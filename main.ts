RainbowSparkleUnicorn.Switch.onAnyPressed(function (pin) {
    music.playMelody("E B C5 A B G A F ", 120)
})
input.onButtonPressed(Button.A, function () {
    RainbowSparkleUnicorn.Light.turnAllOn()
})
RainbowSparkleUnicorn.Touch.onAnyTouched(function (pin) {
    music.playTone(Math.map(pin, 0, 11, 133, 988), music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    RainbowSparkleUnicorn.Light.turnAllOff()
})
RainbowSparkleUnicorn.start()
RainbowSparkleUnicorn.Light.turnAllOn()
RainbowSparkleUnicorn.Sound.setVolume(11)
RainbowSparkleUnicorn.Sound.playTrack(20)
RainbowSparkleUnicorn.Movement.moveServoBouncy(RainbowSparkleUnicorn.Movement.Pins.P8, 0, 180, 20)
RainbowSparkleUnicorn.Movement.moveServoBouncy(RainbowSparkleUnicorn.Movement.Pins.P15, 0, 180, 20)
RainbowSparkleUnicorn.Light.breathe(
RainbowSparkleUnicorn.Light.Pins.P0,
1000,
1000,
500,
500
)
RainbowSparkleUnicorn.Light.breathe(
RainbowSparkleUnicorn.Light.Pins.P7,
1000,
1000,
500,
500
)
basic.forever(function () {
    RainbowSparkleUnicorn.Dial.value(RainbowSparkleUnicorn.Dial.Dials.Dial1, randint(0, 255))
    RainbowSparkleUnicorn.Dial.value(RainbowSparkleUnicorn.Dial.Dials.Dial2, randint(0, 255))
    basic.pause(1000)
})
