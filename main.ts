let choice = 0
// Happy Face and all light up!
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
})
input.onButtonPressed(Button.AB, function () {
    choice = randint(0, 2)
    if (choice == 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else if (choice == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
})
// Sad Face and none-light up
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
})
