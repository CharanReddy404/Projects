var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var input1 = 0;
var input2 = null;
var operator = null;

for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click', function(){
        var value = this.getAttribute('data-value');
        
        if(value=='+'){
            operator = '+';
            input1 = parseFloat(display.textContent);
            display.innerHTML="";

        }else if(value=='-'){
            operator = '-';
            input1 = parseFloat(display.textContent);
            display.innerHTML="";

        }else if(value=='*'){
            operator = '*';
            input1 = parseFloat(display.textContent);
            display.innerHTML="";

        }else if(value=='/'){
            operator = '/';
            input1 = parseFloat(display.textContent);
            display.innerHTML="";

        }else if(value=='%'){
            operator = '%';
            input1 = parseFloat(display.textContent);
            display.innerHTML="";

        }else if(value=='x2'){
            
            operator = '*';
            input1 = parseFloat(display.textContent);
            var result = eval(input1+" "+operator+" "+input1);
            display.innerHTML = result;
            // display.innerHTML="";
            // if(value=='+'){
            //     display.innerHTML='+' + display.innerHTML;
            // }else{
            //     display.innerHTML = '-' +display.innerHTML;
            // }

        }else if(value=='AC'){
            input1=0;
            input2=null;
            operator = null;
            display.innerHTML="";

        }else if(value=='='){
            // operator = '=';
            input2 = parseFloat(display.textContent);
            var result = eval(input1 + " " + operator + " " +input2);
            if(result=="Infinity" || result=="NaN"){
                display.innerHTML = "Error";
            }else{
               display.innerHTML = result; 
            }
            
            // console.log(result);

        }else{
            display.innerHTML+=value;
        }
    });
}