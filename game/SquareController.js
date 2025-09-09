class SquareController extends Component{
    start() {
        this.vertex = new Vector2(100, 100)
        this.velocity = new Vector2(1, 1)

    }
    update() {

        console.log(Input.keysDown)

        let proposedChange = Vector2.zero

        //Left
        if(Input.keysDown.includes("ArrowLeft")){
            proposedChange.plusEquals(Vector2.left)
        }
        if(Input.keysDown.includes("ArrowRight")){
            proposedChange.plusEquals(Vector2.right)
        }
        if(Input.keysDown.includes("ArrowUp")){
            proposedChange.plusEquals(Vector2.up)
        }
        if(Input.keysDown.includes("ArrowDown")){
            proposedChange.plusEquals(Vector2.down)
        }

        this.vertex.plusEquals(proposedChange)
    }
    draw(ctx) {
        ctx.fillStyle = "red"

        ctx.beginPath()
        ctx.lineTo(this.vertex.x, this.vertex.y)
        ctx.lineTo(this.vertex.x+5, this.vertex.y)
        ctx.lineTo(this.vertex.x + 5, this.vertex.y + 5)
        ctx.lineTo(this.vertex.x + 0, this.vertex.y + 5)
        ctx.fill()
    }
}