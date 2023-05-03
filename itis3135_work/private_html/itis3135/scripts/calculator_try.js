const num = doucment.getElementByID('htmlcalcbutton');
const dis = document.getElementById('display');
function display(){
    dis.innerHTML = num.value;

}
num.addEventListener('click',display);

//Got stuck trying to display the values that correlate with the button/s

