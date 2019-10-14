const clock = document.querySelector('.clock')

const tick = () => {

    const now = new Date()

    const hours = now.getHours()
    const minutes = ('0' + now.getMinutes()).slice(-2)
    const seconds = ('0' + now.getSeconds()).slice(-2)

    const html = `
        <span>${hours}</span> :
        <span>${minutes}</span> :
        <span>${seconds}</span>
    `

    clock.innerHTML = html
}

setInterval(tick, 1000)