let name=document.getElementById("nameInput");
let email=document.getElementById("emailInput");
let number=document.getElementById("numberInput");
let addBtn=document.getElementById("addBtn");
let index=1;
let insertData=()=>{
    let key="key"+(index++);
    localStorage.setItem(key,JSON.stringify({"Name":name.value,"Email":email.value,"phoneNumber":number.value}));
    let data=(JSON.parse(localStorage.getItem("key1")))
    let table=document.getElementById("tableData");
    let row=table.insertRow(1);
    let cell1=row.insertCell(0);
    let cell2=row.insertCell(1);
    let cell3=row.insertCell(2);
    let cell4=row.insertCell(3);
    cell1.innerHTML=data.Name;
    cell2.innerHTML=data.Email;
    cell3.innerHTML=data.phoneNumber;
    let deleteButton = document.createElement("BUTTON");
    deleteButton.innerHTML = "Delete";
    cell4.appendChild(deleteButton);
    deleteButton.addEventListener("click",()=>{
        table.deleteRow(row.rowIndex);
        localStorage.removeItem(key);
    })
}
addBtn.addEventListener("click",insertData);
