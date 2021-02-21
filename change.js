const button = document.getElementById('change');
const wrapper = document.getElementById('wraper');

wrapper.style.flexDirection = 'row';

const change = () => {
if (wrapper.style.flexDirection === 'row'){
wrapper.style.flexDirection = 'column'
}else{
wrapper.style.flexDirection = 'row'
}
};

button.addEventListener(`click`, change);