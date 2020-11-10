const hr1 = document.querySelector("#hr1");
const hr2 = document.querySelector("#hr2");
const min1 = document.querySelector("#min1");
const min2 = document.querySelector("#min2");

const button = document.querySelector('#calculate');

button.addEventListener('click', (e) => {
    e.preventDefault()
    const totalMins = parseInt(parseInt((parseInt(hr1.value) + parseInt(hr2.value)) * 60) + parseInt(min1.value) + parseInt(min2.value));
    const hrs = parseInt(totalMins / 60);
    const mins = parseInt(totalMins % 60);

    document.querySelector('#timeText').innerHTML = `${hrs}h ${mins}m`

})