var database=[
    {
        username:"moshiur",
        password:"12345"
    }
];

var newsFeed = [
    {
        username:"Ela",
        status:"This is my first date! 21/05/2019"
    },
    {
        username:"Nusrat",
        status:"Those moment are so Comfortable"
    }
];

var prompUserName = prompt("Input your Username!");
var prompPassword = prompt("Input your Password!");

function signIn(user,pass) {
    if(user == database[0].username && pass == database[0].password){
        console.log(newsFeed);
    }else{
        console.error("Please Input correct username or password");
    }
}

signIn(prompUserName,prompPassword);