const horas = document.querySelector('#hours')
const minutos = document.querySelector('#minutes')
const segundos = document.querySelector('#seconds')

const relogio = setInterval(function time(){
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let sec = dateToday.getSeconds()

    horas.textContent = hr < 10 ? '0' + hr : hr
    minutos.textContent = min < 10 ? '0' + min : min
    segundos.textContent = sec < 10 ? '0' + sec : sec
})