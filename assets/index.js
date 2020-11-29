const hr1 = document.querySelector("#hr1");
const hr2 = document.querySelector("#timeH");
const min1 = document.querySelector("#min1");
const min2 = document.querySelector("#timeM");
const card = document.querySelector('#time-card')
const button = document.querySelector('#add-calculate');
const diffButton = document.querySelector('#diff-calculate');
const display = document.querySelector('#display-time')
const jTime = document.querySelector('#all-time')
const focusableInputs = document.querySelectorAll('.focus-change-value')
const arthimetic = (multiplier) => {
    card.classList.remove("uk-animation-slide-bottom-small");
    display.classList.remove("uk-animation-fade")

    const totalMins = parseInt(parseInt((parseInt(hr1.value) * multiplier + parseInt(hr2.innerText)) * 60) + parseInt(min1.value) * multiplier + parseInt(min2.innerText));
    const hrs = parseInt(totalMins / 60);
    const mins = parseInt(totalMins % 60);
    hr2.innerText = hrs;
    min2.innerText = mins;
    hr1.value = '';
    min1.value = 0;
    if (hrs < 4) {
        jTime.classList.remove('uk-text-success')

        jTime.classList.add('uk-text-danger')
    } else {
        jTime.classList.remove('uk-text-danger')

        jTime.classList.add('uk-text-success')
    }
    card.classList.add("uk-animation-slide-bottom-small");
    display.classList.add("uk-animation-fade")

    hr1.focus();
}
button.addEventListener('click', (e) => {
    e.preventDefault()
    arthimetic(1);

    // document.querySelector('#timeText').innerHTML = `${hrs}h ${mins}m`

})

diffButton.addEventListener('click', (e) => {
    e.preventDefault()
    arthimetic(-1);

    // document.querySelector('#timeText').innerHTML = `${hrs}h ${mins}m`

})



document.getElementById('reset-btn').addEventListener('click', e => {
    e.preventDefault();
    location.reload();
})

focusableInputs.forEach(element => {
    element.addEventListener('focus', (e) => {
        if (e.target.value == '0') {
            e.target.value = ''
        }
    })

    element.addEventListener('blur', e => {
        if (e.target.value == '') {
            e.target.value = '0'
        }
    })
})