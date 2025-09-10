/**
 * Base class for all objects in a scene.
 * 
 * See: https://docs.unity3d.com/ScriptReference/GameObject.html
 */

class GameObject {
    components = []
    start() {
        for (const component of this.components) {
            component.start()
        }
    }
    update() {
        for (const component of this.components) {
            component.update()
        }
    }
    draw(ctx) {
        for (const component of this.components) {
            component.draw(ctx)
        }
    }
}