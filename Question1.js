var minRemoval = (inputString) =>{

    let inputArray = inputString.split("");
    let strLength = inputArray.length;
    let indexList = [];
    let finalOutput = [];

     for(let index = 0;index<strLength;index++){
         //saving a bracket start index
        if(inputString[index] == '('){
            indexList.push(index);
        }
        else if(inputString[index] == ')'){
            //if a bracked end if detected then removing the last saved bracket start index
            if(indexList.length>0){
                indexList.pop(index);
            }
            else{
                //if there is a bracket end but no bracket start, then replace it with a space(to be handled/avoid later)
                inputArray[index] = ' ';
            }

        }
        
    }

    for(let index = 0;index<strLength;index++){
        //if the index is has an empty value or it is bracket start with no bracket end, the remove it
        if(indexList.indexOf(index)==-1 && inputArray[index] != ' '){
            finalOutput.push(inputArray[index]);
        }
    }

    return finalOutput.join("");

}

var output =minRemoval("lee(t(c)o)de)");