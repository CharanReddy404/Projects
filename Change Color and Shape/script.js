let cur = "square";
let color = ['red','blue','green', 'yellow', 'orange', 'lightblue', 'purple'];
let shape = ["square","circle", "triangle", "right-angle"];


var clickColor = document.getElementById('btn-color');

clickColor.addEventListener('click',function(){
    document.getElementById("box").style.backgroundColor = color[Math.floor(Math.random()*color.length)];
    // if(colorChange.style.backgroundColor === "red"){
    //     colorChange.style.backgroundColor = "green";
    // }
});

var changeShape = document.getElementById('btn-shape');

changeShape.addEventListener('click', function(){
    var ran = shape[Math.floor(Math.random()*shape.length)];
    document.getElementById(cur).id = ran;
    cur =ran;
});

function isChecked(){
    if(document.getElementById('my-checkbox').checked){
        document.body.style.backgroundColor = 'black';
        document.body.style.color ="white";
    }else{
        document.body.style.backgroundColor = 'white';
        document.body.style.color ="black";
    }
}