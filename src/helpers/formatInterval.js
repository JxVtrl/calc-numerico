import IMask from "imask"

export const formatInterval = (txt) => {
    var masked = IMask.createMask({
        mask: '0-0'
    })
    var maskedValue = masked.resolve(txt)
    return maskedValue;
}