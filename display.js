function onFormSubmit(){
    var formData = readFormData()
    var newRecord = insertNewRecord(formData);      
   // console.log(newRecord);
}

function readFormData() {
var formData = {};
formData["fname"] = document.getElementById("fname").value;
formData["email"] = document.getElementById("email").value;
formData["contact"] = document.getElementById("contact").value;
return formData;
}

function insertNewRecord(data) {
var table = document.getElementById("details").getElementsByTagName('tbody')[0];
var newRow = table.insertRow(table.length);
var cell1 = newRow.insertCell(0);
cell1.innerHTML = data.fname;
var cell2 = newRow.insertCell(1);
cell2.innerHTML = data.email;
var cell3 = newRow.insertCell(2);
cell3.innerHTML = data.contact;
}
