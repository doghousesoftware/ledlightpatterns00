let choice = 0
function allControl (onoff: number) {
    pins.digitalWritePin(DigitalPin.P0, onoff)
    pins.digitalWritePin(DigitalPin.P1, onoff)
    pins.digitalWritePin(DigitalPin.P2, onoff)
}
// Happy Face and all light up!
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    allControl(1)
})
// randomly select one to light
input.onButtonPressed(Button.AB, function () {
    allControl(0)
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
    allControl(0)
})
