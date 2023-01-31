input.onGesture(Gesture.Shake, function () {
    reset()
})
function update () {
    OLED.clear()
    OLED.writeStringNewLine("Player A score: " + pas2)
    OLED.newLine()
    OLED.writeStringNewLine("Player B score: " + pbs2)
    OLED.newLine()
    OLED.writeStringNewLine("Ties: " + u)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:  " + s)
}
function reset () {
    OLED.init(128, 64)
    pas2 = 0
    pbs2 = 0
    u = 0
    s = 0
    OLED.writeStringNewLine("wanna play a game?")
    basic.pause(2000)
    update()
}
let s = 0
let u = 0
let pbs2 = 0
let pas2 = 0
reset()
basic.forever(function () {
	
})
