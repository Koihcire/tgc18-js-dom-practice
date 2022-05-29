function extractFormInfo()
{
  let ticketPrices = {
    "First Class" : 1200,
    "Business Class" : 750,
    "Economy Class" : 250
  }

  let optionsPrices = {
    "In-Flight Meal" : 10,
    "Free Flow Drinks" : 10,
    "In-Flight Entertainment" : 10,
    "Extra Luggage Space" : 10
  }

  let totalPriceArr = [];
  let priceSummaryDiv = document.createElement("div");
  priceSummaryDiv.innerHTML = `<h4>Price Summary</h4>`;

  let summary = document.querySelector("#summary");
  
  let sumHeadDiv = document.createElement("div");
  sumHeadDiv.innerHTML = `<h3>Booking Summary</h3>`;
  summary.appendChild(sumHeadDiv);


  let firstName = document.querySelector("#firstName").value;
  //console.log(firstName);

  let lastName = document.querySelector("#lastName").value;
  //console.log(lastName);

  let nameDiv = document.createElement("div");
  nameDiv.innerHTML = `
  Passenger Name : ${firstName} ${lastName}
  `;
  summary.appendChild(nameDiv);
  

  let ticketClass = document.querySelectorAll(".ticketClass")
  //let ticketClassResults = [];
  let ticketDiv = document.createElement("div");
  let ticketPriceDiv = document.createElement("div");
  for (let t of ticketClass){
    if (t.checked){
      //ticketClassResults.push(t.value);
      ticketDiv.innerHTML = `
      Ticket Class : ${t.value}
      `;
      price = ticketPrices[t.value];
      totalPriceArr.push(price);
      ticketPriceDiv.innerHTML = `
      ${t.value} : $${price}
      `;
    }
  }
  summary.appendChild(ticketDiv);
  priceSummaryDiv.appendChild(ticketPriceDiv);
  //console.log(ticketClassResults);

  let options = document.querySelectorAll(".options");
  //let optionsResults = [];
  let optionsDiv = document.createElement("div");
  optionsDiv.innerHTML = `Options Selected :`;
  let ulElement = document.createElement("ul");
  let optionPriceDiv = document.createElement("div");
  for (let o of options){
    if (o.checked){
      //optionsResults.push(o.value);
      let liElement = document.createElement("li");
      liElement.innerHTML = `${o.value}`;
      ulElement.appendChild(liElement);
      price = optionsPrices[o.value];
      totalPriceArr.push(price);
      let priceDiv = document.createElement("div");
      priceDiv.innerHTML = `
      ${o.value} : $${price}
      `;
      optionPriceDiv.appendChild(priceDiv);
    }
  }
  optionsDiv.appendChild(ulElement);
  priceSummaryDiv.appendChild(optionPriceDiv);



  let totalPrice = 0;
  for (let x in totalPriceArr){
    totalPrice += parseFloat(totalPriceArr[x]);
  }
  //console.log(totalPrice);
  totalPriceDiv = document.createElement("div");
  totalPriceDiv.innerHTML = `
  <h4>Total Price : $${totalPrice}</h4>
  `;
  priceSummaryDiv.appendChild(totalPriceDiv);


  summary.appendChild(optionsDiv);
  summary.appendChild(priceSummaryDiv);
  //console.log(optionsResults);
  //console.log(totalPriceArr);

}

document.querySelector("#placeBooking").addEventListener("click", function(){
  extractFormInfo();
})