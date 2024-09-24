const error = document.querySelectorAll('.p-error');
const showBox = document.querySelector('.box');
const form = document.querySelector('form');
const inputs = document.querySelectorAll('.my-input');
const btn = document.querySelector('#continue-btn');
const button = document.querySelector('#submit-button');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    submitCard();
})

function submitCard() {
const name = document.getElementById('name').value;
const number = document.getElementById('number').value;
const mm = document.getElementById('mm').value;
const yy = document.getElementById('yy').value;
const cvc = document.getElementById('cvc').value;

 console.log('clicked');
    const numericPattern = /^[0-9]/;
    inputs.forEach((input, index) => {
        if (input.value.trim() === '' || !numericPattern.test(input.value.trim())) 
        {   error[index].style.display = 'block';
            setTimeout(function() {
            error[index].style.display = 'none';
            }, 2000)
    } else {
         showBox.style.display = 'block';
         form.style.display = 'none';
        document.getElementById('text-name').innerText = name;
        document.getElementById('text-number').innerText = number;
        document.getElementById('text-cvc').innerText = cvc;
        // document.getElementById('text-month').textContent = mm;
        // document.getElementById('text-year').textContent = yy;
    }
    });
}


btn.addEventListener('click', () => {
    showBox.style.display = "none";
    form.style.display = 'flex'
    inputs.forEach(input => input.value = '')
})

document.querySelector('.btn').addEventListener('click', submitCard);