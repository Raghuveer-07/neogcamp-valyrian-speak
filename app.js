var btnTranslate = document.querySelector("#btn-translate");

var txtInput= document.querySelector("#txt-input");

var outputDiv = document.querySelector("#output");

//outputDiv.innerText ="Raghuveer Deepala"
//console.log(txtInput)

//var serverURL ="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL ="https://api.funtranslations.com/translate/valyrian.json"

function constructURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occured", error)
    alert("server failed please try again after sometime.")
}

function clickHandler() {
    var inputText = txtInput.value;
    var URL = constructURL(inputText);
    fetch(URL)
    .then(Response => Response.json())
    .then(json => {
            var outputText = json.contents.translated;
            outputDiv.innerText =  outputText;    
            console.log(json.contents.translated)
        })
    .catch(errorHandler)
};


 btnTranslate.addEventListener("click",clickHandler)
