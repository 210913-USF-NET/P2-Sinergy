
const AUTHORIZE = "https://accounts.spotify.com/authorize";
const TOKEN = "https://accounts.spotify.com/api/token";
const PLAYLISTS = "https://api.spotify.com/v1/me/playlists";
const DEVICES = "https://api.spotify.com/v1/me/player/devices";
const PLAY = "https://api.spotify.com/v1/me/player/play";
const PAUSE = "https://api.spotify.com/v1/me/player/pause";
const NEXT = "https://api.spotify.com/v1/me/player/next";
const TRACKS = "https://api.spotify.com/v1/playlists/{{PlaylistId}}/tracks";

  // Helper Function to Extract Access Token for URL


function fetchAccessToken(){
    if(sessionStorage.authCode == null || sessionStorage.authCode == "" || sessionStorage.authCode == undefined || sessionStorage.authCode == 'undefined'){
        loginSpotify();
    }
    else if(sessionStorage.refresh_token == null || sessionStorage.refresh_token == "" || sessionStorage.refresh_token == undefined || sessionStorage.refresh_token == 'undefined'){

        let body = "grant_type=authorization_code";
        body += "&code=" + sessionStorage.authCode; 
        body += "&redirect_uri=" + encodeURI("http://localhost:4200/login");
        callAuthorizationApi(body);
    }
    else{
        console.log('Already have an access token, to refresh, please login again');
    }
}

function callAuthorizationApi(body){
    let xhr = new XMLHttpRequest();
    xhr.open("POST", TOKEN, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', 'Basic NGY2MjI2MWJmOWVjNDAyZDg2N2FhNTI1ZjEyODRiYTg6OTBkNzA1NmEzNThlNDdiMTg0YzIyNWQ5MzQ5ZDdiM2Q=');
    xhr.send(body);
    xhr.onload = handleAuthorizationResponse;
}


function handleAuthorizationResponse(){
    if ( this.status == 200 ){
        var data = JSON.parse(this.responseText);
        console.log("Here is the data: " +this.responseText);
        if ( data.access_token != undefined ){
            sessionStorage.authCode = data.access_token;
            console.log("authCode is now "+sessionStorage.authCode)
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
        if(sessionStorage.authCode != null && sessionStorage.authCode != "" && sessionStorage.authCode != undefined && sessionStorage.authCode != 'undefined'){
            if(sessionStorage.refresh_token == null || sessionStorage.refresh_token == "" || sessionStorage.refresh_token == undefined || sessionStorage.refresh_token == 'undefined'){
                fetchAccessToken();
            }
        }
    
}
function loginSpotify(){
    
    let client_id = '4f62261bf9ec402d867aa525f1284ba8';
    let redirect_uri = 'http%3A%2F%2Flocalhost%3A4200%2Flogin'; // should encode the URL
    // *************** END *************************
    const redirect = `https://accounts.spotify.com/authorize?client_id=${client_id}&scope=user-read-email%20user-read-private%20playlist-modify-private%20playlist-read-private%20playlist-modify-public%20playlist-read-collaborative%20user-read-playback-position%20user-read-recently-played%20user-top-read%20user-follow-modify%20user-follow-read%20
    &response_type=code&redirect_uri=${redirect_uri}`;
    // Don't authorize if we have an access token already
    if(sessionStorage.authCode == null || sessionStorage.authCode == "" || sessionStorage.authCode == undefined || sessionStorage.authCode == 'undefined'){
        window.location.replace(redirect);
    }
    else{console.log("There is already an auth code, so not refreshing the page. Token: " +sessionStorage.authCode)}
}


function clearAuthCode(){
    sessionStorage.removeItem('authCode');
    sessionStorage.removeItem('refresh_token');
}


function refreshChecker(){
    console.log(sessionStorage.refresh_token);
}



///queries

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
        let div = document.querySelector('.id');
        let captionEl = document.createElement('caption');
        let idNode = document.createTextNode(data.id);
        captionEl.appendChild(idNode);
        div.appendChild(captionEl);
        console.log(data);
        
    }
    else {
        console.log(this.responseText);
        alert(this.responseText);
    }
}

function fetchTracks(){
    //let playlist_id = document.getElementById("playlists").value;
    //if ( playlist_id.length > 0 ){
        url = TRACKS.replace("{{PlaylistId}}", "37i9dQZF1DZ06evO1F4G5T");
        callApi( "GET", url, null, handleTracksResponse );
    //}
}

function removeAllItems( elementId ){
    let node = document.getElementById(elementId);
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}

function handleTracksResponse(){
    if ( this.status == 200 ){
        var data = JSON.parse(this.responseText);
        console.log(data);
        removeAllItems( "tracks" );
        data.items.forEach( (item, index) => addTrack(item, index));
    }
    else if ( this.status == 401 ){
        refreshAccessToken()
    }
    else {
        console.log(this.responseText);
        alert(this.responseText);
    }
}
