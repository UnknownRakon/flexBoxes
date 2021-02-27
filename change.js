const button = document.getElementById('change');
const box = document.getElementsByClassName('wraper');

box.style.flexDirection = 'row';

const change = () => {
if (box.style.flexDirection === 'row'){
box.style.flexDirection = 'column'
}else if (box.style.flexDirection === 'column'){
box.style.flexDirection = 'column-reverse'
}else if (box.style.flexDirection === 'column-reverse'){
    box.style.flexDirection = 'row-reverse'
}else if (box.style.flexDirection === 'row-reverse'){
    box.style.flexDirection = 'row'
}

};

button.addEventListener(`click`, change);