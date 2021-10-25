
$.ajax({
    url: `https://accounts.spotify.com/api/token`,
    type: 'POST',
    form:{
        code: "",
        redirect_uri: "https://localhost:4200",
        grant_type: 'authorization_code'
    },
    headers: {
        'Authorization': 'Basic ' + ('NGY2MjI2MWJmOWVjNDAyZDg2N2FhNTI1ZjEyODRiYTg6OTBkNzA1NmEzNThlNDdiMTg0YzIyNWQ5MzQ5ZDdiM2Q=')
    },
    success: function(data) {
        console.log(data);
        },
})