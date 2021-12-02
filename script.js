const rec = (x, y, i, obj) => {
    if (i === 0) {
        return
    }
        obj.moveTo(x, y)
        obj.lineTo(x + 50, y)
        obj.moveTo(x, y)
        obj.lineTo(x, y + 50)
        // rec(x + 50, y, i-1, ctx)
        // rec(x, y + 50, i-1, ctx)
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
    ctx.lineTo(startCoordinateTree.x, startCoordinateTree.y - 100)
    // rec()
    // for (let i = 0; i<=+input.value; i++) {
    //     ctx.moveTo(i*50,i*50)
    //     ctx.lineTo((i+1)*50, (i+1)*50)
    //     rec(i*50, i*50, i, ctx)
    //         // ctx.moveTo(i*50, i*50)
    //         // ctx.lineTo((i+ 1)  *50, i*50)
    //         // ctx.moveTo(i*50, i*50)
    //         // ctx.lineTo(i*50, (i+1)*50)
    // }
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
