import {winner} from "./func_winner"

let fields = document.querySelectorAll('.field');
    export let countUser = document.querySelector('.count-user');
    export let countComp = document.querySelector('.count-comp');
    export let userField = document.querySelector('.user-field');
    export let compField = document.querySelector('.comp-field');
    export let play = document.querySelector('.play');
    export let res = document.querySelector('.result');
    export let blocked = false;
    export let userStep;
    export let compStep;
    export let countU = 0;
    export let countC = 0;
    
    const chooseUser = (e) => {
        if(blocked) return;
        let target = e.target;
        if(target.classList.contains('field')) {
            userStep = target.dataset.field;
            fields.forEach(item => item.classList.remove('active', 'error'));
            target.classList.add('active');
            chooseComp();
        }
    }
    
    const chooseComp = () => {
        blocked = true;
        let rand = Math.floor(Math.random() * 3);
        compField.classList.add('blink');
        let compFields = compField.querySelectorAll('.field');
    
        setTimeout(() => {
            compField.classList.remove('blink');
            compStep = compFields[rand].dataset.field;
            compFields[rand].classList.add('.active');
            winner();
        },1000)
    }
    
    const playGame = () => {
        countU = countC = 0;
        res.innerText = 'CHOOSE one of them';
        countUser.innerText = '0';
        countComp.innerText = '0';
        fields.forEach(item => item.classList.remove('active', 'error'));
    }
    
    play.addEventListener("click", playGame,chooseUser);
    userField.addEventListener("click", chooseUser);