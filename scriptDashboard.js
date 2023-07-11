window.onload = function(){
    document.getElementById('userIdWlc').innerHTML = localStorage.getItem("name")+' (@'+localStorage.getItem("userid")+')';
}