const button = document.getElementById('change');
const direction = document.getElementById('direction');

direction.style.flexDirection = 'row';

const change = () => {
    if (direction.style.flexDirection === 'row'){
    direction.style.flexDirection = 'column';
    }else if (direction.style.flexDirection === 'column'){
    direction.style.flexDirection = 'column-reverse';
    }else if (direction.style.flexDirection === 'column-reverse'){
        direction.style.flexDirection = 'row-reverse';
    }else if (direction.style.flexDirection === 'row-reverse'){
        direction.style.flexDirection = 'row';
    }
};

button.addEventListener(`click`, change);