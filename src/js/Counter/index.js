// import { setInterval } from "timers"

export default class Counter{

    constructor(container){
        this.count = 0
        this.timer = null

        this.buildView(container)
    }
    // count = 0

    buildView(container) {
        const displayCount = document.createElement('h3')
        displayCount.classList.add('counter_display')

        const displayTimer = document.createElement('h3')
        displayTimer.classList.add('timer_display')

        const row = document.createElement('div')
        row.classList.add('counter_row')

        const btnStartTimer = document.createElement('button')
        btnStartTimer.classList.add('timer_btn')
        btnStartTimer.innerText = 'START'
        btnStartTimer.addEventListener('click', () => {this.timerStart(displayTimer)})

        const btnStopTimer = document.createElement('button')
        btnStopTimer.classList.add('timer_btn')
        btnStopTimer.innerText = 'STOP'
        btnStopTimer.addEventListener('click', () => {this.timerStop()})

        const btnPlus = document.createElement('button')
        btnPlus.classList.add('counter_btn_up')
        btnPlus.innerText = 'UP'
        btnPlus.addEventListener('click', () => { this.plus(displayCount) })

        const btnMinus = document.createElement('button')
        btnMinus.classList.add('counter_btn')
        btnMinus.innerText = 'DOWN'
        btnMinus.addEventListener('click', () => {this.minus(displayCount)})

        row.appendChild(btnStartTimer)
        row.appendChild(btnStopTimer)
        row.appendChild(btnPlus)
        row.appendChild(btnMinus)

        container.appendChild(displayTimer)
        container.appendChild(displayCount)
        container.appendChild(row)

        return displayCount, displayTimer
    }

    plus(displayCount){
        this.count++
        displayCount.innerText = this.count
    } 

    minus(displayCount){
        this.count--
        displayCount.innerText = this.count
    }

    timerStart(displayTimer){
        this.timer = setInterval(() => {
            this.timer++
            displayTimer.innerText = this.timer + ' секунд'
        }, 1000)
    }
    
    timerStop(){
        clearInterval(this.timer)
    }
}

