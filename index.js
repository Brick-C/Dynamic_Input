const input = document.querySelector('.heading')
const align = document.querySelectorAll('.align')
const h1 = document.querySelector('.holder')
const size = document.querySelector('.size')
const color = document.querySelector('.form-control-color')
const ff = document.querySelector('.ff')

input.onkeyup = () => {
    h1.innerHTML = input.value
}

align.forEach(item => {
    item.onchange = () =>{
        h1.style.textAlign = item.value
    }
});

size.oninput = () => {
    h1.style.fontSize = size.value + 'px'
}

color.oninput = () => {
    h1.style.color = color.value
}

ff.onchange = () => {
    h1.style.fontFamily = ff.value
}

