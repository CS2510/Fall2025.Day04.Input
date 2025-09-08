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
            proposedChange = Vector2.up
        }
        if(Input.keysDown.includes("ArrowDown")){
            proposedChange = Vector2.down
        }

        this.vertex.plusEquals(proposedChange)

        // this.vertex.plusEquals(this.velocity)

        // if (this.vertex.x > canvas.width-5 || this.vertex.x < 0) {
        //     this.velocity.x *= -1
        // }
        // if (this.vertex.y > canvas.height-5 || this.vertex.y < 0) {
        //     this.velocity.y *= -1
        // }
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