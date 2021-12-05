const rec = (x, y, i, obj) => {
    if (i === 0) {
        return
    }
    const randomX = Math.round(Math.random() * 100);
    const randomX2 = Math.round(Math.random() * 100);

    const randomY = Math.round(Math.random() * 100);
    const randomY2 = Math.round(Math.random() * 100);

    if (randomX > 70) {
        obj.moveTo(x, y)
        obj.lineTo(x +randomX, y- randomY)
        rec(x +randomX, y- randomY, i-1, ctx)
    } else if (randomX < 20) {
        obj.moveTo(x, y)
        obj.lineTo(x +randomX, y- randomY)
    } else {
        obj.moveTo(x, y)
        obj.lineTo(x +randomX, y- randomY)
        obj.moveTo(x, y)
        obj.lineTo(x-randomX2, y - randomY2)
        rec(x +randomX, y- randomY, i-1, ctx)
        rec(x - randomX2, y-randomY2, i-1, ctx)
    }
}
const canvasObject = document.getElementById('TestCanvas')
const okButton = document.getElementById('okButton')
const input = document.getElementById('inputValue')

canvasObject.width = document.documentElement.scrollWidth
canvasObject.height = document.documentElement.clientHeight - 200

const ctx = canvasObject.getContext('2d')

let mouseStatus = false

const coordinate = {
    x: null,
    y: null
}

canvasObject.addEventListener('mousedown', (e) => {
    console.log(e.pageX, e.pageY)
    coordinate.x = e.pageX
    coordinate.y = e.pageY
    mouseStatus = true
})
canvasObject.addEventListener('mouseup', (e) => {
    mouseStatus = false
})
canvasObject.addEventListener('mouseout', (e) => {
    mouseStatus = false
})

const startCoordinateTree = {
    x: canvasObject.width/2,
    y: canvasObject.height
}

okButton.addEventListener('click', (e)=>{
    ctx.moveTo(startCoordinateTree.x, startCoordinateTree.y)
    ctx.lineTo(startCoordinateTree.x, startCoordinateTree.y - 20)
    rec(startCoordinateTree.x, startCoordinateTree.y - 20, +input.value, ctx)
    ctx.strokeStyle = 'blue'
    ctx.stroke()
})


canvasObject.addEventListener('mousemove',  (e) => {
    if (mouseStatus) {
        if (coordinate.x === null || coordinate.y === null ) {
            ctx.moveTo(e.pageX, e.pageY)
        } else {
            ctx.moveTo(coordinate.x, coordinate.y)
        }
        ctx.lineTo(e.x, e.y)
        ctx.strokeStyle = 'grey'
        ctx.stroke()
        coordinate.x = e.pageX
        coordinate.y = e.pageY
    }
}, false)
