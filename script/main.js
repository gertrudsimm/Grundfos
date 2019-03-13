"use strict";

// hide all pages
function hideAllPages() {
  let pages = document.querySelectorAll(".page");
  for (let page of pages) {
    page.style.display = "none";
  }
}


// set default page
function setDefaultPage() {
  let page = "home";
  if (location.hash) {
    page = location.hash.slice(1);
	  hideAllPages();
  document.querySelector(`#${page}`).style.display = "block";
  }
}


setDefaultPage();


// go to next page


let i = 0;



function count(){
     i++;
	console.log(i)
	hideAllPages();
	
	if(i === 1 ){
  document.querySelector(`#about`).style.display = "block";
	} else if(i === 2) {   document.querySelector(`#clients`).style.display = "block";
	} else if(i === 3) {   document.querySelector(`#contact`).style.display = "block";
	} else if(i === 4) {   document.querySelector(`#home`).style.display = "block";
	i = 0;
	}
}

