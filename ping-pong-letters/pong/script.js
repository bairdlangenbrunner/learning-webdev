const canvas = document.querySelector('canvas')

let cw = 600
let ch = cw/1.25

canvas.width = cw
canvas.height = ch
canvas.style.background = '#282828'

const c = canvas.getContext('2d')

let mouse = {
  y: undefined
}

window.addEventListener('mousemove', (event) => {
  mouse.y = event.y
})

const line = () => {
  c.setLineDash([ch/50, ch/50])
  c.beginPath()
  c.moveTo((cw/2),0)
  c.lineTo((cw/2), ch)
  c.strokeStyle='#fff'
  c.stroke()
}

const paddleOffsetX = 50

function LeftPaddle(y) {
  this.y = y
  
  this.draw = () => {
    c.setLineDash([])
    c.beginPath()
    c.moveTo(50,(this.y - paddleOffsetX))
    c.lineTo(50,(this.y + paddleOffsetX))
    c.stroke()
  }
  
  this.update = () => {
    // this.y = mouse.y ? mouse.y - 150 : this.y
    this.y = pong.y || 250
    this.draw()
  }
}

function RightPaddle(y) {
  this.y = y
  
  this.draw = () => {
    c.setLineDash([])
    c.beginPath()
    c.moveTo((cw - paddleOffsetX),(this.y - paddleOffsetX))
    c.lineTo((cw - paddleOffsetX),(this.y + paddleOffsetX))
    c.stroke()
  }
  
  this.update = () => {
    this.y = pong.y || 250
    this.draw()
  }
}

function Pong(x, y, dx, dy, radius) {
  this.x = x
  this.y = y
  this.dx = dx
  this.dy = dy
  this.radius = radius
  
  this.draw = () => {
    line()
    c.beginPath()
    c.lineWidth = 1
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = '#fff'
    c.fill()
  }
  
  this.upda
