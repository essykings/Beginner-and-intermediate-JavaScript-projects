const optionsContainer = document.querySelector(".select-voices");
const convertBtn = document.querySelector(".convert");
const messageContainer = document.querySelector(".message");

const synthesis = window.speechSynthesis;
const voices = [
{ name: "Google Deutsch", lang: "de-DE" },
{ name: "Google US English", lang: "en-US" },
{ name: "Google UK English Female", lang: "en-GB" },
{ name: "Google UK English Male", lang: "en-GB" },
{ name: "Google español", lang: "es-ES" },
{ name: "Google español de Estados Unidos", lang: "es-US" },
{ name: "Google français", lang: "fr-FR" },
{ name: "Google हिन्दी", lang: "hi-IN" },
{ name: "Google Bahasa Indonesia", lang: "id-ID" },
{ name: "Google italiano", lang: "it-IT" },
{ name: "Google 日本語", lang: "ja-JP" },
{ name: "Google 한국의", lang: "ko-KR" },
{ name: "Google Nederlands", lang: "nl-NL" },
{ name: "Google polski", lang: "pl-PL" },
{ name: "Google português do Brasil", lang: "pt-BR" },
{ name: "Google русский", lang: "ru-RU" },
{ name: "Google 普通话（中国大陆）", lang: "zh-CN" },
{ name: "Google 粤語（香港）", lang: "zh-HK" },
{ name: "Google 國語（臺灣）", lang: "zh-TW" }
];

function addVoices() {
console.log(voices);
voices.forEach((voice) => {
let option = document.createElement("option");
option.value = voice.lang;
option.textContent = voice.name;
optionsContainer.appendChild(option);

if (voice.lang === "en-US") {
  option.selected = true;
}
});
}
// addVoices();

if (navigator.userAgent.indexOf("Chrome") !== -1) {
speechSynthesis.addEventListener("voiceschanged", addVoices);
}else{
addVoices();
}

convertBtn.addEventListener("click", function () {
convertText = document.querySelector(".content").value;

if (convertText === "") {
messageContainer.textContent = " Please provide some text";
messageContainer.style.display = "block";

setTimeout(() => {
messageContainer.textContent = ""; 
messageContainer.style.display = "none";
}, 3000);

return;
}

const selectedLang =
optionsContainer.options[optionsContainer.selectedIndex].value;
console.log(selectedLang);

convertToSpeech(convertText, selectedLang);
});

function convertToSpeech(text, lang) {
if (!("speechSynthesis" in window)) {
messageContainer.textContent =
  " Your browser is not supported, try another browser";
  messageContainer.style.display ="block"
return;
}
let utterance = new SpeechSynthesisUtterance();
utterance.lang = lang;
utterance.text = text;

speechSynthesis.speak(utterance);

}