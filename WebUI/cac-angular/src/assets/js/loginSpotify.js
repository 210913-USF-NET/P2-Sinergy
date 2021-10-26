const PLAYLISTS = "https://api.spotify.com/v1/me";

  // Helper Function to Extract Access Token for URL

function loginSpotify(accessToken){
  const getUrlParameter = (sParam) => {
    let sPageURL = window.location.search.substring(1),////substring will take everything after the https link and split the #/&
        sURLVariables = sPageURL != undefined && sPageURL.length > 0 ? sPageURL.split('#') : [],
        sParameterName,
        i;
    let split_str = window.location.href.length > 0 ? window.location.href.split('#') : [];
    sURLVariables = split_str != undefined && split_str.length > 1 && split_str[1].length > 0 ? split_str[1].split('&') : [];
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

 // Get Access Token
  accessToken = getUrlParameter('access_token');
console.log(accessToken);
sessionStorage.accessToken = accessToken;
console.log("session set to "+ sessionStorage.accessToken);

    // AUTHORIZE with Spotify (if needed)
    // *************** REPLACE THESE VALUES! *************************
    let client_id = '4f62261bf9ec402d867aa525f1284ba8';

    let redirect_uri = 'http%3A%2F%2Flocalhost%3A4200%2Flogin'; // should encode the URL
    // *************** END *************************
console.log("got the token")
    const redirect = `https://accounts.spotify.com/authorize?client_id=${client_id}&scope=playlist-modify-private%20playlist-read-private%20playlist-modify-public%20playlist-read-collaborative%20user-read-playback-position%20user-read-recently-played%20user-top-read%20user-follow-modify%20user-follow-read%20
    &response_type=token&redirect_uri=${redirect_uri}`;
    // Don't authorize if we have an access token already
    if(accessToken == null || accessToken == "" || accessToken == undefined){
        window.location.replace(redirect);
    }
    
  }


  function callApi(method, url, body, callback){
    
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken );
    xhr.send(body);
    xhr.onload = callback;
}


function refreshPlaylists(){
    callApi( "GET", PLAYLISTS, null, handlePlaylistsResponse );
}

function handlePlaylistsResponse(){
    if ( this.status == 200 ){
        var data = JSON.parse(this.responseText);
        let username = document.querySelector('.user');
        let captEl = document.createElement('caption');
        let screenName = document.createTextNode(data.display_name);
        captEl.appendChild(screenName);
        username.appendChild(captEl);






        console.log(data);
        
    }
    else {
        console.log(this.responseText);
        alert(this.responseText);
    }
}