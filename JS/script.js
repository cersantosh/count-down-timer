
let input = document.querySelector(".input")


function calculate(value){
    if(value == "="){
        if(input.value == ""){
            input.placeholder = "Please Enter Data";
            return;
        }
        let result = eval(input.value);
        input.value = `${input.value} = ${result}`
        return;
    }
    if(value == "clear"){
        input.value = "";
        return;
    }
    if(value == "back"){
        let array = input.value.split("");
        array.pop();
        input.value = array.join(""); 
        console.log(array);
        return;
    }
    input.value += value;
}