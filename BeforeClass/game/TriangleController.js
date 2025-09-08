class TriangleController extends Component {
    start() {
        this.vertex = Vector2.zero
        this.velocity = Vector2.zero

    }
    update() {

        this.velocity = new Vector2(0, 0)

        if (Input.keysdown.includes("ArrowLeft"))
            this.velocity = Vector2.left
        if (Input.keysdown.includes("ArrowRight"))
            this.velocity = Vector2.right
        if (Input.keysdown.includes("ArrowUp"))
            this.velocity = Vector2.up
        if (Input.keysdown.includes("ArrowDown"))
            this.velocity = Vector2.down

        this.vertex.plusEquals(this.velocity)

        // console.log(Input.keysdown)
        // console.log(Input.buttonsdown)
        console.log(Input.mousePosition)
        if (Input.mousePosition)
            this.vertex = Input.mousePosition


        // if (this.vertex.x > canvas.width || this.vertex.x < 0) {
        //     this.velocity.x *= -1
        // }
        // if (this.vertex.y > canvas.height || this.vertex.y < 0) {
        //     this.velocity.y *= -1
        // }
    }
    draw(ctx) {
        ctx.fillStyle = "white"

        ctx.beginPath()
        ctx.lineTo(this.vertex.x, this.vertex.y)
        ctx.lineTo(this.vertex.x + 50, this.vertex.y + 50)
        ctx.lineTo(this.vertex.x + 0, this.vertex.y + 50)
        ctx.fill()
    }
}