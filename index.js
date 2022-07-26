/* START TASK 1: Your code goes here */
function log(e){
    console.log(e)
}

const col1 = document.querySelector('.col1');
const col4 = document.querySelector('.col4');
const col7 = document.querySelector('.col7');

const row1 = document.querySelector('.row1');
const row2 = document.querySelector('.row2');
const row3 = document.querySelector('.row3');

col1.addEventListener('click',function(){
 row1.style.backgroundColor = 'blue';
})

col4.addEventListener('click',function(){
 row2.style.backgroundColor = 'blue';
})

col7.addEventListener('click',function(){
 row3.style.backgroundColor = 'blue';
})

const table = document.querySelector('.table')
const col2 = document.querySelector('.col2');
const col3 = document.querySelector('.col3');
const col5 = document.querySelector('.col5');
const col6Special = document.querySelector('.col6');
const col8 = document.querySelector('.col8');
const col9 = document.querySelector('.col9');

col6Special.addEventListener('click',function(){
    table.style.backgroundColor = 'green'
})

col2.addEventListener('click',function(){
    col2.style.backgroundColor = 'yellow'
})

col3.addEventListener('click',function(){
    col3.style.backgroundColor = 'yellow'
})

col5.addEventListener('click',function(){
    col5.style.backgroundColor = 'yellow'
})

col8.addEventListener('click',function(){
    col8.style.backgroundColor = 'yellow'
})

col9.addEventListener('click',function(){
    col9.style.backgroundColor = 'yellow'
})
/* END TASK 1 */

/* START TASK 2: Your code goes here */
const input = document.querySelector('.inp')
const div2 = document.querySelector('.div2')
const btn = document.querySelector('.btn')
let p;

input.addEventListener('input',function(){

    const regExp = /\+380[\d]{0,9}$/;
    p = document.createElement('p');
    
    if (regExp.test(input.value) === false) {
        div2.style.backgroundColor = 'coral'
        p.textContent = 'Type number does not follow format +380*********'
        p.classList = 'invalid';
        div2.appendChild(p);
        input.style.border = '4px solid red'
        btn.setAttribute('disabled',true);
        
    } else if (regExp.test(input.value) === true) {
        div2.style.backgroundColor = 'green'
        p.textContent = 'Data was succsessfully sent'
        p.classList = 'valid';
        div2.appendChild(p);
        input.style.border = '4px solid green'
        btn.removeAttribute('disabled')
}

})
/* END TASK 2 */

/* START TASK 3: Your code goes here */
const field = document.getElementById('field');
const ball = document.getElementById('ball');
const two = 2;

field.onclick = function(event) {
    let fieldCoords = this.getBoundingClientRect();

    let ballCoords = {
      top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / two,
      left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / two
    };

    if (ballCoords.top < 0) {
        ballCoords.top = 0;
    }

    if (ballCoords.left < 0) {
        ballCoords.left = 0;
    }

    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
      ballCoords.left = field.clientWidth - ball.clientWidth;
    }

    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
      ballCoords.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
  }
/* END TASK 3 */