const REGISTER_ORDER_FORM_ID = "register-order-form";
const BACKEND_API_URL = "https://geld-app.azurewebsites.net/v1";


function setAction(form) {
    form = document.getElementById(REGISTER_ORDER_FORM_ID)
    // TODO: verificar se todos os campos estao preenchidos

    desc = document.getElementById("desc-input").value;
    installments = parseInt(document.getElementById("parcelas-input").value);
    value = parseFloat(document.getElementById("valor-input").value);
    registerOrder(desc, installments, value);
}

function registerOrder(desc, installments, value) {
    const registerOrderUrl = 'https://geld-app.azurewebsites.net/v1/order';
    requestData = {
        id: 1, value: value, installmentsNumber: installments, 
    	createdAt: "2023-08-30T21:18:02.746+00:00",
        updatedAt: "2023-08-30T21:18:02.746+00:00" 
    };
    console.log(registerOrderUrl)
    console.log(requestData);
    fetch(registerOrderUrl, { 
        mode: "no-cors",
        method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': '*' }, 
        body: JSON.stringify(requestData) })
        .then(response => console.log(response.json()))
        .then(data => console.log(data))
        .catch(error => console.error(error));
}


function cleanForm(form) {
    inputs = document.querySelectorAll(".form-control>input");

    inputs.forEach(element => {
        element.value = "";
    });

}