basic.forever(function () {
    if (input.temperature() + 10 > input.lightLevel() / 2) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.No)
    }
})
