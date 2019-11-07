//toggle navbar on scroll
window.onscroll = function() {
  if(document.documentElement.scrollTop > 50){
    document.querySelector("#nav").classList.add("fixed-nav");
    document.querySelector("#navBtn").style.color = "black";
  }else{
    document.querySelector("#nav").classList.remove("fixed-nav");
    document.querySelector("#navBtn").style.color = "white";
  }
};


//Glide services carousel
var glide = new Glide('.glide', {
	autoplay: "3000",
	hoverpause: false,
	type: "carousel",
	direction: "rtl",
  perView: 4,
  breakpoints: {
    1230: {
      perView: 3
    },
    1024: {
      perView: 2
    },
    600: {
      perView: 1
    }
  }
});
glide.mount();

//Glide posts carousel
var postGlide = new Glide('.post-glide', {
  autoplay: "3000",
  hoverpause: false,
  type: "carousel",
  direction: "rtl",
  perView: 4,
  breakpoints: {
    1230: {
      perView: 3
    },
    1024: {
      perView: 2
    },
    600: {
      perView: 1
    }
  }
});
postGlide.mount();


//sidbar dropdown menu
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}