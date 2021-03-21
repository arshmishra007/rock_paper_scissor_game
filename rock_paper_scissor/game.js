var randomNum1 = Math.floor(Math.random()*3+1);

var randomImg = "img"+randomNum1+".png";

var randomImgSrc = "images/"+randomImg;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src",randomImgSrc);

var randomNum2 = Math.floor(Math.random()*3+1);

var randomImg2 = "img"+randomNum2+".png";

var randomImgSrc2 = "images/"+randomImg2;

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src",randomImgSrc2);
