
const AUTHORIZE = "https://accounts.spotify.com/authorize";
const TOKEN = "https://accounts.spotify.com/api/token";
  // Helper Function to Extract Access Token for URL
function handleAuthorizationResponse(){
    if ( this.status == 200 ){
        var data = JSON.parse(this.responseText);
        console.log(data);
        var data = JSON.parse(this.responseText);
        if ( data.code != undefined ){
            authCode = data.code;
            sessionStorage.authCode = authCode;
        }
        if ( data.refresh_token  != undefined ){
            refresh_token = data.refresh_token;
            localStorage.setItem("refresh_token", refresh_token);
        }
    }
    else {
        console.log(this.responseText);
        alert(this.responseText);
    }
}

function fetchAccessToken(){
    let client_id = '4f62261bf9ec402d867aa525f1284ba8';
    let client_secret = '90d7056a358e47b184c225d9349d7b3d';// we need to remove this later, and replace with something like environment to hide the secret, but just putting here for now
    let body = "grant_type=authorization_code";
    body += "&code=" + sessionStorage.authCode; 
    body += "&redirect_uri=" + encodeURI("http://localhost:4200/login");
    callAuthorizationApi(body);
}

function callAuthorizationApi(body){
    let client_id = '4f62261bf9ec402d867aa525f1284ba8';
    let client_secret = '90d7056a358e47b184c225d9349d7b3d';
    let xhr = new XMLHttpRequest();
    xhr.open("POST", TOKEN, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', 'Basic NGY2MjI2MWJmOWVjNDAyZDg2N2FhNTI1ZjEyODRiYTg6OTBkNzA1NmEzNThlNDdiMTg0YzIyNWQ5MzQ5ZDdiM2Q=');
    xhr.send(body);
    xhr.onload = handleAuthorizationResponse;
}

function handleAuthorizationResponse(){
    console.log("did this get skipped?");
    if ( this.status == 200 ){
        var data = JSON.parse(this.responseText);
        console.log("Here is the data:" +data);
        if ( data.access_token != undefined ){
            sessionStorage.access_token = data.access_token;
            console.log("access token is now "+sessionStorage.access_token)
        }
        if ( data.refresh_token  != undefined ){
            sessionStorage.refresh_token = data.refresh_token;
            console.log("refresh token is now "+sessionStorage.refresh_token)
        }
    }
    else {
        console.log(this.responseText);
        alert(this.responseText);
    }
}
function readAuthToken(){
    const getUrlParameter = (sParam) => {
        let sPageURL = window.location.search.substring(1),////substring will take everything after the https link and split the #/&
            sURLVariables = sPageURL != undefined && sPageURL.length > 0 ? sPageURL.split('#') : [],
            sParameterName,
            i;
        let split_str = window.location.href.length > 0 ? window.location.href.split('?') : [];
        sURLVariables = split_str != undefined && split_str.length > 1 && split_str[1].length > 0 ? split_str[1].split('&') : [];
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
                }
            }
        };
    
        // Get Access Token
        authCode = getUrlParameter('code');
        console.log(authCode);
        sessionStorage.authCode = authCode;
        console.log("session set to "+ sessionStorage.authCode);
    
}
function loginSpotify(){
    
    let client_id = '4f62261bf9ec402d867aa525f1284ba8';
    let redirect_uri = 'http%3A%2F%2Flocalhost%3A4200%2Flogin'; // should encode the URL
    // *************** END *************************
    const redirect = `https://accounts.spotify.com/authorize?client_id=${client_id}&scope=playlist-modify-private%20playlist-read-private%20playlist-modify-public%20playlist-read-collaborative%20user-read-playback-position%20user-read-recently-played%20user-top-read%20user-follow-modify%20user-follow-read%20
    &response_type=code&redirect_uri=${redirect_uri}`;
    // Don't authorize if we have an access token already
    if(sessionStorage.authCode == null || sessionStorage.authCode == "" || sessionStorage.authCode == undefined || sessionStorage.authCode == 'undefined'){
        window.location.replace(redirect);
    }
    else{console.log("There is already an auth code, so not refreshing the page. Token: " +sessionStorage.authCode)}
}


function handleAuthorizationResponse(){
    if ( this.status == 200 ){
        var data = JSON.parse(this.responseText);
        console.log(data);
        var data = JSON.parse(this.responseText);
        if ( data.access_token != undefined ){
            access_token = data.access_token;
            sessionStorage.authCode=access_token;
        }
        if ( data.refresh_token  != undefined ){
            refresh_token = data.refresh_token;
            localStorage.setItem("refresh_token", refresh_token);
        }
    }
    else {
        console.log(this.responseText);
        alert(this.responseText);
    }
}

function clearAuthCode(){
    sessionStorage.removeItem('authCode');
}


function refreshChecker(){
    console.log(sessionStorage.refresh_token);
}
