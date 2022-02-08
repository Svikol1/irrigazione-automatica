let umidita_terreno = 0
let livello_acqua = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(umidita_terreno)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 2; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Quarter))
        music.playTone(392, music.beat(BeatFraction.Quarter))
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    led.plotBarGraph(
    livello_acqua,
    100
    )
})
basic.forever(function () {
    umidita_terreno = Environment.ReadSoilHumidity(AnalogPin.P1)
    livello_acqua = Environment.ReadWaterLevel(AnalogPin.P2)
    if (umidita_terreno <= 70) {
        for (let index = 0; index < 4; index++) {
            pins.servoWritePin(AnalogPin.P9, 180)
            basic.pause(500)
            pins.servoWritePin(AnalogPin.P9, 0)
            basic.pause(500)
        }
    } else {
        pins.servoWritePin(AnalogPin.P9, 0)
        basic.pause(500)
    }
})
