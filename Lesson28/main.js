var button1 = document.getElementById("btn1");

button1.onclick = function(){
    alert('You clicked the button!');
}

var button1 = document.querySelector('button');

button1.onclick = function(){
    alert('hello');
}

button1.addEventListener('click', function(){
    alert('hello');
});

//ourElement.addEventListener('click', funksioni1);
//ourElement.addEventListener('click', funksioni2);

var button2 = document.getElementById('btn2');
var button3 = document.getElementById('btn3');
var button4 = document.getElementById('btn4');

button2.onmouseover = function(){
    alert('hello');
}

button3.onmouseleave = function(){
    alert('goodbye');
}

button4.onmousewheel =  function(){
    alert('rotate');
}

var v_text = document.getElementById("btn1");

v_text.onclick = function(){
    v_text.style.color = "red";
    v_text.style.backgroundColor = "lightgrey";
    v_text.style.textAlign = "center";
    v_text.style.fontSize = "100px";
    v_text.style.padding = "20px";
}

v_text.onmouseover = function(){
    v_text.style.cssText = "color: red; background-color: lightgrey; padding: 20px; font-size:100px;"
}

v_text.onclick = function(){
    v_text.setAttribute("class", "test");
}

v_btn22.onclick = function()
{
    v_text.setAttribute("class", "test2");
}