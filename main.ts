RainbowSparkleUnicorn.Touch.onAnyTouched(function (pin) {
    music.playTone(Math.map(pin, 0, 11, 133, 988), music.beat(BeatFraction.Whole))
})
RainbowSparkleUnicorn.start()
RainbowSparkleUnicorn.Light.turnAllOn()
RainbowSparkleUnicorn.Sound.setVolume(11)
RainbowSparkleUnicorn.Sound.playTrack(20)
for (let servos = 0; servos <= 15; servos++) {
    RainbowSparkleUnicorn.Movement.moveServoBouncy(servos, 0, 180, 20)
}
RainbowSparkleUnicorn.Light.turnAllOff()
for (let lights = 0; lights <= 15; lights++) {
    RainbowSparkleUnicorn.Light.breathe(
    lights,
    1000,
    1000,
    500,
    500
    )
}
basic.forever(function () {
    RainbowSparkleUnicorn.Dial.value(RainbowSparkleUnicorn.Dial.Dials.Dial1, randint(0, 255))
    RainbowSparkleUnicorn.Dial.value(RainbowSparkleUnicorn.Dial.Dials.Dial2, randint(0, 255))
    basic.pause(1000)
})
