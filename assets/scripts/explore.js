// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // console.log("ha");
  // let voices = window.speechSynthesis.getVoices();
  // console.log(speechSynthesis.getVoices());
  // for (let i = 0; i < voices.length; i++) {
  //   const option = document.createElement('option');
  //   option.textContent = `${voices[i].name} (${voices[i].lang})`;

  //   if (voices[i].default) {
  //     option.textContent += ' — DEFAULT';
  //   }

  //   option.setAttribute('data-lang', voices[i].lang);
  //   option.setAttribute('data-name', voices[i].name);
  //   document.getElementById("voiceSelect").appendChild(option);
  // }
  let options = document.getElementById("voice-select");
  let synth = window.speechSynthesis;
  synth.addEventListener("voiceschanged", function() {
    let voices = window.speechSynthesis.getVoices();
    for(let i = 0; i < voices.length; i++) {
      let option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      option.setAttribute("voice-name", voices[i].name);
      option.setAttribute("voice-lang", voices[i].lang);
      options.appendChild(option);
    }
  });

  let talkBtn = document.querySelector("button");
  talkBtn.addEventListener("click", () => {
    let text = document.getElementById("text-to-speak");
    let img = document.querySelector("#explore > img");
    if(options.value == "select") {
      alert("Please select a voice!");
    } 
    else if(text.value == "") {
      alert("Please enter text!");
    } 
    else {
      const content = new SpeechSynthesisUtterance(text.value);
      content.voice = synth.getVoices().filter(function(voice) {
        return voice.name + ' (' + voice.lang + ')' == options.value;
      })[0];
      synth.speak(content);
      if(synth.speaking) {
        img.src = "assets/images/smiling-open.png"
      }
      utt.onend = function() {
        img.src = "assets/images/smiling.png";
      };
    }
  });

}