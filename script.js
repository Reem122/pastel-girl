window.onscroll = function(){
  if (window.scrollY > 50) {
    $(".navbar").addClass("navbar-custom2");
    $(".navbar").removeClass("navbar-custom");
  } else {
    $(".navbar").addClass("navbar-custom");
    $(".navbar").removeClass("navbar-custom2");
  }
} 

function chooseBlackBag(){
  $(".black-bag").show();
  $(".white-bag").hide();
  $(".brown-bag").hide();
}

function chooseWhiteBag(){
  $(".black-bag").hide();  
  $(".white-bag").show();
  $(".brown-bag").hide();
}

function chooseBrownBag(){
  $(".black-bag").hide();
  $(".white-bag").hide();
  $(".brown-bag").show();
}

function chooseBlackShoes(){
  $(".black-shoes").show();
  $(".white-shoes").hide();
}

function chooseWhiteShoes(){
  $(".black-shoes").hide();
  $(".white-shoes").show();
}

function chooseWhiteShirt() {
  $(".white-shirt").show();
  $(".yellow-shirt").hide();
}

function chooseYellowShirt() {
    $(".white-shirt").hide();
    $(".yellow-shirt").show();
} 

function addToWishlistBag(){
  $(".wb").toggleClass("fa-heart-o");
}

function addToWishlistShoes(){
  $(".wo").toggleClass("fa-heart-o");
}

function addToWishlistShirt(){
  $(".wi").toggleClass("fa-heart-o");
}
function emailIsSent(){
  let newsmail = $("#news_mail").val();
  if (newsmail != "") {
    $("#email_sent").html("thank you for subscribing to our newsletter. Please check your email.");
  } 
}
function submitMessage(){
  let messFName = $("#mess_fname").val()
  let messLName = $("#mess_lname").val()
  let messMail = $("#mess_mail").val()
  let message = $("#message").val()
  if (messFName != "" && messLName != "" && messMail != "" && message != ""){
    $("#message_submitted").html("the message is sent.");
  }
}