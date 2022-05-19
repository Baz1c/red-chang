let Light_Levels = 0
basic.showString("@theredchang")
basic.forever(function () {
    Light_Levels = input.lightLevel()
    basic.showNumber(input.lightLevel())
    if (Light_Levels < 150) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        music.playMelody("- A G F - - - - ", 125)
    }
})
