class Input {
  static keysdown = []

  static buttonsdown = []

  static  mousePosition

  static keydown(event) {
    if (!Input.keysdown.includes(event.code))
      Input.keysdown.push(event.code)

  }

  static keyup(event) {
    Input.keysdown = Input.keysdown.filter(k => k != event.code)

  }

  static mousemove(event){
    Input.mousePosition = new Vector2(event.clientX, event.clientY)
  }

  static mousedown(event){
    if(!Input.buttonsdown.includes(event.button))
        Input.buttonsdown.push(event.button)
  }

  static mouseup(event){
    Input.buttonsdown = Input.buttonsdown.filter(b=>b!=event.button)

  }
}