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

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    $("#image").attr('src', profile.getImageUrl());
    $(".data").css("dispaly","block");
    $(".g-signin2").css("display","none");
  }

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
     alert("You have been signed out successfully");
     $(".g-signin2").css("display","block");
     $(".data").css("dispaly","none");
    });
  }