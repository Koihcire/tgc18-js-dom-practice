
function getFormValues() {
    // document.querySelector('#submit').addEventListener('click', function(){
        let email = document.querySelector('#email-address').value;

        let allModels = document.querySelectorAll('.phone-type');
        let model = null;
        for (let m of allModels) {
            if (m.checked) {
                model = m.value;
                break;
            }
        } 

        let allServices = document.querySelectorAll('.services');
        let services = [];
        for (let s of allServices) {
            if (s.checked) {
                services.push(s.value);
            }
        }

        let pickup = document.querySelector('#pick-up').value;

    // leave this line alone!
    return [email, model, services, pickup];

}

// LEAVE THE BELOW ALONE! DON'T TOUCH
try {
    module.exports = getFormValues;
} catch (e) { }
