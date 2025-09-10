/**
 * Represents a 2D vector (direction) or 2D position
 * 
 * See https://docs.unity3d.com/6000.1/Documentation/ScriptReference/Vector2.html
 * 
 * 
 */

class Vector2 {
    /**
   * The x component of the Vector
   * 
   * See https://docs.unity3d.com/6000.1/Documentation/ScriptReference/Vector2-x.html
   *
   * @type {Number}
   */
    x

    /**
   * The y component of the Vector
   * 
   * See https://docs.unity3d.com/6000.1/Documentation/ScriptReference/Vector2-y.html
   *
   * @type {Number}
   */
    y

    /**
   * Create a new vector
   * 
   * See https://docs.unity3d.com/6000.1/Documentation/ScriptReference/Vector2-ctor.html
   * 
   * @param {Number} x The x coordinate of the vector
   * @param {Number} y The y coordinate of the vector
   */
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    static zero = new Vector2(0, 0)
    static left = new Vector2(-1, 0)
    static right = new Vector2(1, 0)
    static up = new Vector2(0, -1)
    static down = new Vector2(0, 1)

    plusEquals(other) {
        this.x += other.x
        this.y += other.y
    }
}