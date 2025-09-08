class TriangleController extends Component {
    start() {
        this.vertex = new Vector2(0, 0)
        this.velocity = new Vector2(1, 1)

    }
    update() {
        this.vertex.plusEquals(this.velocity)

        if (this.vertex.x > canvas.width || this.vertex.x < 0) {
            this.velocity.x *= -1
        }
        if (this.vertex.y > canvas.height || this.vertex.y < 0) {
            this.velocity.y *= -1
        }
    }
    draw(ctx) {
        ctx.fillStyle = "white"

        ctx.beginPath()
        ctx.lineTo(this.vertex.x, this.vertex.y)
        ctx.lineTo(this.vertex.x + 5, this.vertex.y + 5)
        ctx.lineTo(this.vertex.x + 0, this.vertex.y + 5)
        ctx.fill()
    }
}