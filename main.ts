input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    pas += 1
    r += 1
    update()
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    t += 1
    r += 1
    update()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # # . .
        `)
    pbs += 1
    r += 1
    update()
})
input.onGesture(Gesture.Shake, function () {
    reset()
})
function update () {
    OLED.clear()
    OLED.writeStringNewLine("Player A score: " + pas)
    OLED.newLine()
    OLED.writeStringNewLine("Player B score: " + pbs)
    OLED.newLine()
    OLED.writeStringNewLine("Ties: " + t)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:  " + r)
}
function reset () {
    OLED.init(128, 64)
    pas = 0
    pbs = 0
    r = 0
    t = 0
    OLED.writeStringNewLine("wanna play a game?")
    basic.pause(2000)
    update()
}
let pbs = 0
let t = 0
let r = 0
let pas = 0
reset()
basic.forever(function () {
	
})
