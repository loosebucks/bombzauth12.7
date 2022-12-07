var password = "@bombz444";

function passcheck() {

    if(document.getElementById('pass1').value != password) {
        alert('Wrong Password, Please reach out to lbcriisp or vietblike for current password.');
        return false;
    }

    if(document.getElementById('pass1').value == password) {
        alert('Welcome to the Beta version of the Bombz streaming platform, Please NFT & Chill responsibly! Click Ok to proceed.');
    }
}