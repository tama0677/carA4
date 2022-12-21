function 前に進む () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.analogWritePin(AnalogPin.P15, 198)
}
function ライトを消す () {
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function 後ろに進む () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.analogWritePin(AnalogPin.P15, 528)
}
function ライトをつける () {
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function 止まる () {
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
}
let 正面 = 84
pins.servoWritePin(AnalogPin.P12, 正面)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P12, 正面)
    止まる()
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P12, 正面 + 30)
    前に進む()
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P12, 正面)
    止まる()
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P12, 正面 + 30)
    前に進む()
    basic.pause(2000)
})
