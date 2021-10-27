
const PROFILE = "https://api.spotify.com/v1/me";
const AUTHORIZE = "https://accounts.spotify.com/authorize";
const TOKEN = "https://accounts.spotify.com/api/token";


function callApi(method, url, body, callback){
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', 'Bearer ' + sessionStorage.authCode);
    xhr.send(body);
    xhr.onload = callback;
}

function getUserDetails(){
    callApi( "GET", PROFILE, null, handleResponse );
}

function handleResponse(){
    if ( this.status == 200 ){
        var data = JSON.parse(this.responseText);
        console.log(data);
        
    }
    else {
        console.log(this.responseText);
        alert(this.responseText);
    }
}