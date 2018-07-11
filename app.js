//google login
function onLoadFunction(){
    gapi.client.setApiKey('AIzaSyBsww_m_r_zZFy6djdtg9Du582wYFOdHvA ');
    gapi.client.load('plus', 'v1', function(){});
}