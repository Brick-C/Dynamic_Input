const input = document.querySelector('.heading')
const input2 = document.querySelector('#my-text')
const alignh = document.querySelectorAll('.align')
const alignb = document.querySelectorAll('.alignb')
const h1 = document.querySelector('.holder')
const p = document.querySelector('.store')
const size = document.querySelector('.size')
const sizeb = document.querySelector('.sizeb')
const colorh = document.querySelector('.form-control-hcolor')
const colorb = document.querySelector('.form-control-bcolor')
const ffh = document.querySelector('.ffh')
const ffb = document.querySelector('.ffb')

input.onkeyup = () => {
    h1.innerHTML = input.value
}

input2.onkeyup = () => {
    p.innerHTML = input2.value
}

alignh.forEach(item => {
    item.onchange = () =>{
        h1.style.textAlign = item.value
    }
});

alignb.forEach(item => {
    item.onchange = () =>{
        
        p.style.textAlign = item.value
    }
});

size.oninput = () => {
    h1.style.fontSize = size.value + 'px'
}

sizeb.oninput = () => {
    p.style.fontSize = sizeb.value + 'px'
}
colorh.oninput = () => {
    h1.style.color = colorh.value
}

colorb.oninput = () => {
    p.style.color = colorb.value
}

ffh.onchange = () => {
    h1.style.fontFamily = ffh.value
}

ffb.onchange = () => {
    p.style.fontFamily = ffb.value
}

