const root = document.getElementById('root');
function log(e){
    console.log(e)
}
const addTweetBtn = root.querySelector('.addTweet');
const modifyItemInput = document.getElementById('modifyItemInput');
const list = document.getElementById('list');

let twitts;
!localStorage.twitts ? twitts = [] : twitts = JSON.parse(localStorage.getItem('twitts'));


let toTwittItemElems = []

function Twitt(description) {
    this.description = description;
    this.completed = false;
}

const createTwitt = (twitt, index) => {
    return `
    <li class ='toTwitt ${twitt.completed ? 'checked' : ''}'>
    <p class='description'>${twitt.description}</p>
    <div class='buttons'>
    <input onclick='completeTwitt(${index})' class='btnLike' type='checkbox' ${twitt.completed ? 'checked' : ''}>
    like
    </input>
    <button onclick='removeTwitt(${index})' class='btnRemove'>remove</button>
    </div>
    </li>
    `
}

const fillList = () => {
    list.innerHTML = '';
if(twitts.length > 0) {
    twitts.forEach((item, index) => {
       list.innerHTML += createTwitt(item, index);
    });
    toTwittItemElems = document.querySelectorAll('.toTwitt');
}
}
fillList();

const updateLocal = () => {
    localStorage.setItem('twitts', JSON.stringify(twitts))
}


const completeTwitt = (index) => {
    twitts[index].completed = !twitts[index].completed;
    if(twitts[index].complited){
toTwittItemElems[index].classList.add('checked');
    } else {
        toTwittItemElems[index].classList.remove('checked');
    }
    updateLocal();
    fillList();
}


const removeTwitt = index => {
    const five500 = 500;
    toTwittItemElems[index].classList.add('removing');
    setTimeout(() => {
    twitts.splice(index, 1);
    updateLocal();
    fillList();
},five500)
}


addTweetBtn.addEventListener('click', () => {
    twitts.push(new Twitt(modifyItemInput.value));
    updateLocal();
    fillList();
    modifyItemInput.value = '';
})