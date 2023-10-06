let name=document.getElementById("nameInput");
let email=document.getElementById("emailInput");
let number=document.getElementById("numberInput");
let addBtn=document.getElementById("addBtn");
let index=1;
let insertData=()=>{
    let key="key"+(index++);
    localStorage.setItem(key,JSON.stringify({"Name":name.value,"Email":email.value,"Phone Number":number.value}));
    console.log(JSON.parse(localStorage.getItem("key1")))
}
addBtn.addEventListener("click",insertData);