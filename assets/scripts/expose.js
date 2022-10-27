// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  console.log("aaa");
  let horn_select = document.getElementById("horn-select");
  let img = document.querySelector("img");
  let audio = document.getElementsByClassName("hidden")[0];
  let volume_range = document.getElementById("volume")
  let vol_icon = document.querySelector("#volume-controls > img")
  let play_button = document.querySelector("button");

  horn_select.addEventListener("change", function() {
    if(horn_select.selectedIndex == 1) {
      img.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    }
    if(horn_select.selectedIndex == "2") {
      img.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    }
    if(horn_select.selectedIndex == 3) {
      img.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }
  })

  volume_range.addEventListener("input", function(){
    audio.volume = volume_range.value / 100;
    if(volume_range.value == 0){
      vol_icon.src = "assets/icons/volume-level-0.svg";
    }
    else if(volume_range.value < 33){
      vol_icon.src = "assets/icons/volume-level-1.svg";
    }
    else if(volume_range.value < 67){
      vol_icon.src = "assets/icons/volume-level-2.svg";
    }
    else {
      vol_icon.src = "assets/icons/volume-level-3.svg";
    }

  })

  play_button.addEventListener("click",()=> {
    if(horn_select.selectedIndex == -1){
      alert("Please select a sound~");
    }
    else{
      if(horn_select.selectedIndex == 3) {
        const confetti = new JSConfetti();
        confetti.addConfetti();
        
      }
      audio.play();
    }
  }) 


}