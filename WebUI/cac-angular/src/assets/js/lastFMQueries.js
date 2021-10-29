const TRACKS ="https://ws.audioscrobbler.com/2.0/?method=user.getweeklytrackchart"
const APIKEY = "bd9a22a5a89705767018c3e16cd85172"

function callFMApi(method, url, body, callback){
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    body+="&api_key="+APIKEY;
    body+="&format=json"
    xhr.send(body);
    xhr.onload = callback;
}

function userTopTracks(user, startTime, endTime){
    let body = "&user="+user;
    body +="&from="+startTime;
    body+="&to="+endTime;
    callFMApi("GET", TRACKS, body, handleFMTracksResponse);
}


function removeAllFMItems( elementId ){
    let node = document.getElementById(elementId);
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}

function handleFMTracksResponse(){
    if ( this.status == 200 ){
        var data = JSON.parse(this.responseText);
        console.log(data);
    }
    else if ( this.status == 401 ){
        console.log("something wrong happened")
    }
    else {
        console.log(this.responseText);
        alert(this.responseText);
    }
}


    function InfoSubmit(playlistName, listLength, from, to, user) {
        let listName = document.getElementById(playlistName).value;
        let listLength = document.getElementById(listLength).value;
        let from = document.getElementById(from).value;
        let to = document.getElementById(to).value;
        let user =  document.getElementById(user).value;
        console.log('Start:' + startDate);

        return playlistName, listLength, from, to, user;
    // }
// let searchBtn = document.getElementByID('searchBtn').addEventListener('click',search());

async function search(InfoSubmit){
  let results = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=user.getweeklytrackchart&user=${user}&api_key=bd9a22a5a89705767018c3e16cd85172&from=${from}&to=${to}&format=json`)
  console.log(results);
}}
