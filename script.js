alert("Сменить язык клавиатуры ctrl+shift")
if(!localStorage.getItem('lang')){
    localStorage.setItem('lang',"rus")
}
var lang = localStorage.getItem('lang');
var CAPS = false

class button {
    constructor(rusValue ,engValue ,shiftRusValue ,shiftEngValue, boardKey){
        this.rusValue = rusValue
        this.engValue = engValue
        this.shiftRusValue = shiftRusValue
        this.shiftEngValue = shiftEngValue
        this.boardKey = boardKey
    }

    get RusValue(){
        return this.rusValue
    }
    get EngValue(){
        return this.engValue
    }
    get ShiftRusValue(){
        return this.shiftRusValue
    }
    get ShiftEngValue(){
        return this.shiftEngValue
    }

    get Key(){
        return this.boardKey;
    }
    HtmlButton(buttonline) {
        var button = document.createElement("button")

        if(lang == 'rus' && CAPS == false){
            button.innerHTML = this.rusValue;
        }
        if(lang == 'eng' && CAPS == false){
            button.innerHTML = this.engValue;
        }
        if(lang == 'rus' && CAPS == true){
            button.innerHTML = this.rusValue.toUpperCase();
        }
        if(lang == 'eng' && CAPS == true){
            button.innerHTML = this.engValue.toUpperCase();
        }
        

        var rusValueCopy = this.rusValue;
        var engValueCopy = this.engValue;

        button.className = "button";

        if(rusValueCopy == "&#8592"){
            button.id = "delete"
        }
        if(rusValueCopy == "TAB"){
            button.id = "tab"
        }
        if(rusValueCopy == "CAPS"){
            button.id = "caps"
        }
        if(rusValueCopy == "&#8629"){
            button.id = "enter"
        }
        if(rusValueCopy == "shift"){
            button.id = "shift"
        }
        if(rusValueCopy == "pause"){
            button.id = "pause"
        }
        if(rusValueCopy == ""){
            button.id = "space"
        }

        if(rusValueCopy == "alt"){
            button.className = "button alt"
        }

        if(rusValueCopy == "ctrl"){
            button.className = "button ctrl"
        }
        

        button.addEventListener('mousedown',function(){
            button.style.opacity = "0.5" 
            if(lang == "rus" && rusValueCopy.length === 1 && CAPS == false){
                textArea.value = textArea.value + rusValueCopy;
            }
            if(lang == "eng" && rusValueCopy.length === 1 && CAPS == false){
                textArea.value = textArea.value + engValueCopy;
            }
            if(lang == "rus" && rusValueCopy.length === 1 && CAPS == true){
                textArea.value = textArea.value + rusValueCopy.toUpperCase();
            }
            if(lang == "eng" && rusValueCopy.length === 1 && CAPS == true){
                textArea.value = textArea.value + engValueCopy.toUpperCase();
            }
            if(rusValueCopy == "&#8592"){
                textArea.value =textArea.value.substr(0, textArea.value.length -1)
            }
            if(rusValueCopy == ""){
                textArea.value = textArea.value + " "
            }
            if(rusValueCopy == "CAPS"){
                keyBoard.innerHTML = ""
                if(CAPS == false){
                    CAPS = true;
                }
                else{CAPS = false}
                BoardInit(lang)
            }
        },false)
        button.addEventListener('mouseup',function(){
            button.style.opacity = "1" 
        })




        var keycopy = this.boardKey;

        window.addEventListener("keydown",function (key) {
            if(key.which === keycopy){
                button.style.opacity = "0.5"       
            }
        },false)

        window.addEventListener("keyup",function (key) {
            if(key.which === keycopy){
                button.style.opacity = "1"
            }
        },false)
        buttonline.appendChild(button)

    }

}

var textArea = document.createElement("textarea")

var keyBoard =  document.createElement('div')

var body = document.body;

textArea.id = "text"
keyBoard.id = "board"

    function BoardInit(lang){

    var buttonline = document.createElement('div')

    new button("ё","`","Ё","~",192).HtmlButton(buttonline)
    new button("1","1","Ё","~",49).HtmlButton(buttonline)
    new button("2","2","Ё","~",50).HtmlButton(buttonline)
    new button("3","3","Ё","~",51).HtmlButton(buttonline)
    new button("4","4","Ё","~",52).HtmlButton(buttonline)
    new button("5","5","Ё","~",53).HtmlButton(buttonline)
    new button("6","6","Ё","~",54).HtmlButton(buttonline)
    new button("7","7","Ё","~",55).HtmlButton(buttonline)
    new button("8","8","Ё","~",56).HtmlButton(buttonline)
    new button("9","9","Ё","~",57).HtmlButton(buttonline)
    new button("0","0","Ё","~",48).HtmlButton(buttonline)
    new button("-","-","Ё","~",189).HtmlButton(buttonline)
    new button("=","=","Ё","~",187).HtmlButton(buttonline)
    new button("&#8592","&#8592","&#8592","&#8592",8).HtmlButton(buttonline)

    keyBoard.appendChild(buttonline)
    buttonline.className = "buttonline"

    var buttonline = document.createElement('div')

    new button("TAB","TAB","TAB","TAB",9).HtmlButton(buttonline)
    new button("й","q","Ё","~",81).HtmlButton(buttonline)
    new button("ц","w","Ё","~",87).HtmlButton(buttonline)
    new button("у","e","Ё","~",69).HtmlButton(buttonline)
    new button("к","r","Ё","~",82).HtmlButton(buttonline)
    new button("е","t","Ё","~",84).HtmlButton(buttonline)
    new button("н","y","Ё","~",89).HtmlButton(buttonline)
    new button("г","u","Ё","~",85).HtmlButton(buttonline)
    new button("ш","i","Ё","~",73).HtmlButton(buttonline)
    new button("щ","o","Ё","~",79).HtmlButton(buttonline)
    new button("з","p","Ё","~",80).HtmlButton(buttonline)
    new button("х","[","Ё","~",88).HtmlButton(buttonline)
    new button("ъ","]","Ё","~",221).HtmlButton(buttonline)
    new button("\\","\\","Ё","~",220).HtmlButton(buttonline) //&#92

    keyBoard.appendChild(buttonline)
    buttonline.className = "buttonline"

    var buttonline = document.createElement('div')

    new button("CAPS","CAPS","CAPS","CAPS",20).HtmlButton(buttonline)
    new button("ф","a","Ё","~",65).HtmlButton(buttonline)
    new button("ы","s","Ё","~",83).HtmlButton(buttonline)
    new button("в","d","Ё","~",68).HtmlButton(buttonline)
    new button("а","f","Ё","~",70).HtmlButton(buttonline)
    new button("п","g","Ё","~",71).HtmlButton(buttonline)
    new button("р","h","Ё","~",72).HtmlButton(buttonline)
    new button("о","j","Ё","~",74).HtmlButton(buttonline)
    new button("л","k","Ё","~",75).HtmlButton(buttonline)
    new button("д","l","Ё","~",76).HtmlButton(buttonline)
    new button("ж",";","Ё","~",186).HtmlButton(buttonline)
    new button("э","'","Ё","~",222).HtmlButton(buttonline)
    new button("&#8629","&#8629","&#8629","&#8629",13).HtmlButton(buttonline)

    keyBoard.appendChild(buttonline)
    buttonline.className = "buttonline"

    var buttonline = document.createElement('div')
    new button("shift","shift","shift","shift",16).HtmlButton(buttonline)
    new button("я","z","Ё","~",90).HtmlButton(buttonline)
    new button("ч","x","Ё","~",88).HtmlButton(buttonline)
    new button("с","c","Ё","~",67).HtmlButton(buttonline)
    new button("м","v","Ё","~",86).HtmlButton(buttonline)
    new button("и","b","Ё","~",66).HtmlButton(buttonline)
    new button("т","n","Ё","~",78).HtmlButton(buttonline)
    new button("ь","m","Ё","~",77).HtmlButton(buttonline)
    new button("б",",","Ё","~",188).HtmlButton(buttonline)
    new button("ю",".","Ё","~",190).HtmlButton(buttonline)
    new button(".","/","Ё","~",191).HtmlButton(buttonline)
    new button("pause","pause","pause","pause",16).HtmlButton(buttonline)

    keyBoard.appendChild(buttonline)
    buttonline.className = "buttonline"

    var buttonline = document.createElement('div')
    new button("ctrl","ctrl","ctrl","ctrl",17).HtmlButton(buttonline)
   // new button("win","win","win","win",91).HtmlButton(buttonline)
    new button("alt","alt","alt","alt",18).HtmlButton(buttonline)
    new button("","","","",32).HtmlButton(buttonline)
    new button("alt","alt","alt","alt",18).HtmlButton(buttonline)
    new button("ctrl","ctrl","ctrl","ctrl",17).HtmlButton(buttonline)
    new button("&#8656","&#8656","&#8656","&#8656",37).HtmlButton(buttonline)
    new button("&#8657","&#8657","&#8657","&#8657",38).HtmlButton(buttonline)
    new button("&#8659","&#8659","&#8659","&#8659",40).HtmlButton(buttonline)
    new button("&#8658","&#8658","&#8658","&#8658",39).HtmlButton(buttonline)

    keyBoard.appendChild(buttonline)
    buttonline.className = "buttonline"
    }

BoardInit(lang)


window.addEventListener("keydown",function (key){
    
    if(key.shiftKey && key.ctrlKey){
        keyBoard.innerHTML = ""
        if(lang == "rus"){
            lang = "eng"
            localStorage.setItem('lang',"eng")
        }
        else{
            lang = "rus"
            localStorage.setItem('lang',"rus")
        }
        BoardInit(lang)
    }

    if(key.which == 20){
        keyBoard.innerHTML = ""
        if(CAPS == false){
            CAPS = true;
        }
        else{CAPS = false}
        BoardInit(lang)
    }
    
},false)

body.appendChild(textArea)
body.appendChild(keyBoard)

