if (localStorage.getItem("internalUsers") != null) {
    internalUsers = JSON.parse(localStorage.getItem("internalUsers")) 
} else {
    internalUsers = [];
}

localStorage.setItem("internalUsers", JSON.stringify(internalUsers))

display(internalUsers)

function addUser() {
    var newUser = {
        "fullName" : document.getElementById("fullName").value,
        "email" : document.getElementById("email").value,
        "phone" : document.getElementById("phone").value,
        "image" : document.getElementById("image").value
    };
    internalUsers.push(newUser);
    localStorage.setItem("internalUsers",JSON.stringify(internalUsers));

    display(internalUsers);
}

function removeUser (id) {
    if(confirm("Are you sure you want to delete?")) {
        internalUsers.splice(id,1);
        localStorage.setItem("internalUsers", JSON.stringify(internalUsers));
        display(internalUsers);
    }
}

function triggerEdit(id) {
    document.getElementById("fullName").value = internalUsers[id].fullName;
    document.getElementById("email").value = internalUsers[id].email;
    document.getElementById("phone").value = internalUsers[id].phone;
    document.getElementById("image").value = internalUsers[id].image;
    document.getElementById("index").value = id;

    document.getElementById("addButton").style.display = "none";
    document.getElementById("updateButton").style.display = "inline";
    
    document.getElementById("add-user").style.display = "block";
}

function updateUser() {
    var i = document.getElementById("index").value;
    internalUsers[i] = {
        "fullName" : document.getElementById("fullName").value,
        "email" : document.getElementById("email").value,
        "phone" : document.getElementById("phone").value,
        "image" : document.getElementById("image").value
    };

    localStorage.setItem("internalUsers", JSON.stringify(internalUsers));
    display(internalUsers);
}

function display(internalUsers) {
    userVar = '';

for(i=0; i<internalUsers.length; i++) {
    userVar += `
    <div class="users" id="${i}">
    <img src="${internalUsers[i].image}" alt="" style="max-width:100px"><br>
    <strong>Full Name: </strong>${internalUsers[i].fullName} </br>
    <strong>Email: </strong>${internalUsers[i].email} </br>
    <strong>Phone Number: </strong>${internalUsers[i].phone} </br>
    <button class="edit-btn" onclick="triggerEdit(${i})">Edit</button>
    <button  class="delete-btn" onclick="removeUser(${i})">Delete</button></br></br>
</div>`;
}
document.getElementById('userDetails').innerHTML = userVar;
}

function displayDiv() {
    document.getElementById("fullName").value = null;
    document.getElementById("email").value = null;
    document.getElementById("phone").value = null;
    document.getElementById("image").value = null;
    document.getElementById("index").value = null;

    document.getElementById("add-user").style.display = "block";
    document.getElementById("updateButton").style.display = "none"
    document.getElementById("addButton").style.display = "inline"
}

function removeDiv() {
    document.getElementById("add-user").style.display = "none";
}

function searchSingle() {
    var searchParam = document.getElementById("searchParam").value;

    foundUser =[];
    foundUser.push(internalUsers.find(x=>x.fullName==searchParam));

    display(foundUser);
}

function searchAll() {
    var searchParam = document.getElementById("searchParam").value;
    
    display(internalUsers.filter(x=>(x.fullName).toLowerCase()==searchParam.toLowerCase()));
}

function findContaining() {
    var searchParam = document.getElementById("searchParam").value;
    foundUser = internalUsers.filter(x=>((x.fullName).toLowerCase()).includes(searchParam.toLowerCase()));

    display(foundUser);
}

function displaySearch() {

}