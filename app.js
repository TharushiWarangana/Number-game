let y=(Math.floor((Math.random()*10)+1));
console.log(y);
 let guess=1;



 function Guess(){
    let x=document.getElementById("number").value;
    let attempNumber=0;
    let maxAttempNumber=3;
    do{
    
     if(x==y){
        output.innerHTML="Game over!! The number is correct. " 
        console.log("win");
        break;
    
    
    }else if(x>y){
        guess++;
        output.innerHTML="Sorry!!! Try a Greater Number"
        console.log("high");
        break;
        
    }else{
        guess++;
        output.innerHTML="Sorry!!! Try a Lower Number"
        console.log("low");
        break;
        }

    }while(x!=y && ++attempNumber<=maxAttempNumber);
            if(attempNumber==maxAttempNumber){
                let output = document.getElementById("output");
                output.innerHTML("You loose! The number was :"+y);

            
            }
    }


 




