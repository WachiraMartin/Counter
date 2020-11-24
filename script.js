const  display = document.querySelector(".display");
const  addbtn = document.querySelector("#add" );
const  minusbtn = document.querySelector("#minus");
const restartbtn = document.querySelector("#start");


addbtn.addEventListener("click", Increament);
minusbtn.addEventListener("click", decreament);
restartbtn.addEventListener("click", restartValue);

let count = 0;
function Increament() {
  count+=1 
    display.innerHTML = count;
    if(display.innerHTML> "0") {
      display.style.color = "blue"
    }

    display.animate([{opacity:"0.3"}, {opacity:"1.0"}],{duration:500, fill:"forwards"});
}

function decreament () {
  count-=1;
  display.innerHTML = count;
  if(display.innerHTML < "0") {
    display.style.color = "red"
  }

  display.animate([{opacity:"0.3"}, {opacity:"1.0"}],{duration:2000, fill:"forwards"});
}
function restartValue() {
  count =0;
  display.innerHTML = count
  if(display.innerHTML >"0") {

  }
  else{
    display.style.color = "black"
  }
  display.animate([{opacity:"0.3"}, {opacity:"1.0"}],{duration:900, fill:"forwards"});
}




