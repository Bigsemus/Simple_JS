import {blocked,userStep,compStep,countC,countU,res,countUser,countComp,userField,compField,play} from "./index"

export const winner = () => {
    blocked = false;
    let comb = userStep + compStep;
    
if ((countU < 3) && (countC < 3)) {

    switch (comb) {
        case 'rr' :
        case 'ss' :
        case 'pp' :
            res.innerText = 'DEAD HEAT !';
            break;

        case 'rs' :
        case 'sp' :
        case 'pr' :
            res.innerText = 'YOU WINNER !';
            countU++;
            countUser.innerText = countU;
            compField.querySelector('[data-field='+compStep+']').classList.add('.error')
            break;

        case 'sr' :
        case 'ps' :
        case 'rp' :
            res.innerText = 'Computer winner !';
            countC++;
            countComp.innerText = countC;
            userField.querySelector('[data-field='+userStep+']').classList.add('.error')
            break;
    } 
 
} else if (countU > countC) {
        res.innerText = `You winner!!! Total: you - ${countU} comp - ${countC}`
        blocked = true;
        play.addEventListener("click", (e) => {
            if (e.isTrusted){
                blocked = false;
            }
        });

    } else {
        res.innerText = `You lost((( Total: you - ${countU} comp - ${countC}`
        blocked = true;
        play.addEventListener("click", (e) => {
            if (e.isTrusted){
                blocked = false;
            }
        });
    }  
    }