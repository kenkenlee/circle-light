basic.showIcon(IconNames.Happy)
let strip = neopixel.create(DigitalPin.P8, 12, NeoPixelMode.RGB)
strip.setBrightness(20)
basic.forever(function () {
    strip.setPixelColor(0, neopixel.rgb(randint(0, 255), randint(0, 255), 150))
    strip.show()
    strip.shift(1)
    basic.pause(1000)
})
