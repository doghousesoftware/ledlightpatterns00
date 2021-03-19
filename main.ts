// Happy Face and all light up!
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
})
// Randomly light up an LED
input.onButtonPressed(Button.AB, function () {
	
})
// Sad Face and none-light up
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    pins.digitalWritePin(DigitalPin.P0, 0)
})
