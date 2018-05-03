function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    alert('User signed out.');
    $(".g-signin2").css("display","block");
    $(".signin").css("display","none");
    $("#email").css("display","none");
  });
}
function onSignIn(googleUser){
  var profile = googleUser.getBasicProfile();
  var email = profile.getEmail();
  $(".g-signin2").css("display","none");
  $(".signin").css("display","block");
  $("#email").text(email);
}