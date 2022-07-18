function onFormSubmit(){
    var formData = readFormData();
     insertNewRecord(formData);      
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
newRow = table.insertRow(table.length);
cell1 = newRow.insertCell(0);
cell1.innerHTML = data.fname;
cell2= newRow.insertCell(1);
cell2.innerHTML = data.email;
cell3 = newRow.insertCell(2);
cell3.innerHTML = data.contact;
cell4 = newRow.insertCell(3);
cell4.innerHTML = `<button onclick="onEdit(this)">Edit</button>`
cell5 = newRow.insertCell(4);
cell5.innerHTML = `<button>Delete</button>`
}


function onEdit(form) {
    selectedRow = form.parentElement.parentElement;
    document.getElementById("fname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("contact").value = selectedRow.cells[2].innerHTML;
}


function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fname;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.contact;
}
 


