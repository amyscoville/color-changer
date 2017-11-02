init();

function init(){
    genFirstBtns();
    addSelectColor();
}

function createBtn(color){
    var btn = document.createElement('button');
    var text = document.createTextNode(color);
    btn.appendChild(text);
    btn.classList.add('color-button');
    btn.setAttribute('id', color + '-button');
    btn.setAttribute('onclick',"changeBackground('" + color + "')");
    btn.style.backgroundColor = color;
    document.getElementById('color-button-display').appendChild(btn);
}

function genFirstBtns(){
    createBtn('red');
    createBtn('yellow');
    createBtn('blue');
}

function changeBackground(color){
    document.body.style.backgroundColor = color;
}

function addSelectColor(){    
    var selectColor = document.createElement('select');
    var main = document.getElementById('add-color');
    selectColor.setAttribute('id', "select-color");
    main.appendChild(selectColor);

    var menu = document.getElementById('select-color');
    
    var optOne = document.createElement('option');
    optOne.text = 'Select Color';
    optOne.setAttribute('selected', true);
    optOne.setAttribute('disabled', true);
    menu.add(optOne);

    var colorChoices = ['magenta', 'lightpink', 'orangered', 'coral', 'peachpuff', 'lightyellow', 'goldenrod', 'lemonchiffon', 'chartreuse', 'yellowgreen', 'teal', 'forestgreen', 'turquoise', 'lightblue', 'navy', 'indigo', 'violet', 'lavender', 'chocolate', 'darkgray'];

    for(var i = 0; i < colorChoices.length; i++) {
        addOption(colorChoices[i]);
    }
}

function addNewBtn(){
    var val = document.getElementById('select-color').value;
    
    if(val === 'Select Color'){
        alert("You must select a color first!");
    } else if(!btnExists(val)) {
        removeOption(val);
        createBtn(val);
    }
}

function removeCurrent(){
    var currentColor = document.body.style.backgroundColor;
    var parent = document.getElementById("color-button-display");
    var currBtn = document.getElementById(currentColor + "-button");
        
    if(currentColor !== 'red' && currentColor !== 'yellow' && currentColor !== 'blue'){
        parent.removeChild(currBtn);
        addOption(currentColor);
    }
    document.body.style.backgroundColor = 'white';
}

function btnExists(color){
    var btns = document.getElementsByClassName('color-button');

    for(var i = 0; i < btns.length; i++){
        if(btns[i].innerHTML === color){
            return true;
        }
    }
    return false;
}

function addOption(color){
    var menu = document.getElementById('select-color');
    var option = document.createElement('option');
    option.text = color;
    option.value = color;
    menu.add(option);
}

function removeOption(color){
   var select = document.getElementById('select-color');
   var options = select.childNodes;
   for(var i = 0; i < options.length; i++){
       if (options[i].value === color){
           select.removeChild(options[i]);
       }
   }
}