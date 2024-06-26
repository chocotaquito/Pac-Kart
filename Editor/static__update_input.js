"use strict";
// call this whenever an input box is updated
// all inputs have these datasets: type, offset
// types: u32 | u16 | u8 | Float | custom
function update_input(e) {
    if (this.tagName === "INPUT") {
        if (this.dataset.type === "u32") {
            let new_val = this.value

            new DataView(buffer).setUint32(this.dataset.offset, new_val, g.endian)

            this.value = u32(this.dataset.offset, g.endian)

        } else if (this.dataset.type === "u16") {
            let new_val = this.value

            new DataView(buffer).setUint16(this.dataset.offset, new_val, g.endian)

            this.value = u16(this.dataset.offset, g.endian)

        } else if (this.dataset.type === "u8") {
            let new_val = this.value

            new DataView(buffer).setUint8(this.dataset.offset, new_val)

            this.value = u8(this.dataset.offset)

        } else if (this.dataset.type === "float") {
            let new_val = this.value

            new DataView(buffer).setFloat32(this.dataset.offset, new_val, g.endian)
            let set_val = f32(this.dataset.offset, g.endian)

            if (isNaN(set_val) === true) {
                new DataView(buffer).setFloat32(this.dataset.offset, 0, g.endian)
                set_val = f32(this.dataset.offset, g.endian)
            }

            if (Number.isSafeInteger(set_val) === false) {
                new DataView(buffer).setFloat32(this.dataset.offset, new_val, g.endian)
                set_val = f32(this.dataset.offset, g.endian)
            }

            if (Number.isInteger(set_val)) {

                this.value = set_val
            } else {
                this.value = set_val.toFixed(2)
            }

        }
    } else if (this.tagName === "SELECT") {
        if (this.dataset.type === "u32") {
            let new_val = this.value

            new DataView(buffer).setUint32(this.dataset.offset, new_val, g.endian)

            this.value = u32(this.dataset.offset, g.endian)

        } else if (this.dataset.type === "u16") {
            let new_val = this.value

            new DataView(buffer).setUint16(this.dataset.offset, new_val, g.endian)

            this.value = u16(this.dataset.offset, g.endian)

        } else if (this.dataset.type === "u8") {
            let new_val = this.value

            new DataView(buffer).setUint8(this.dataset.offset, new_val)

            this.value = u8(this.dataset.offset)

        } else if (this.dataset.type === "float") {
            let new_val = this.value

            new DataView(buffer).setFloat32(this.dataset.offset, new_val, g.endian)
            let set_val = f32(this.dataset.offset, g.endian)

            if (isNaN(set_val) === true) {
                new DataView(buffer).setFloat32(this.dataset.offset, 0, g.endian)
                set_val = f32(this.dataset.offset, g.endian)
            }
            if (Number.isSafeInteger(set_val) === false) {
                new DataView(buffer).setFloat32(this.dataset.offset, 0, g.endian)
                set_val = f32(this.dataset.offset, g.endian)
            }

            if (Number.isInteger(set_val)) {

                this.value = set_val
            } else {
                this.value = set_val.toFixed(2)
            }

        }
    }
}
class bitArray {
    constructor(length) {
        this.backingArray = Array.from({
            length: Math.ceil(length / 32)
        }, ()=>0)
        this.length = length
    }
    get(n) {
        return (this.backingArray[n / 32 | 0] & 1 << n % 32) > 0
    }
    on(n) {
        this.backingArray[n / 32 | 0] |= 1 << n % 32
    }
    off(n) {
        this.backingArray[n / 32 | 0] &= ~(1 << n % 32)
    }
    toggle(n) {
        this.backingArray[n / 32 | 0] ^= 1 << n % 32
    }
    forEach(callback) {
        this.backingArray.forEach((number,container)=>{
            const max = container == this.backingArray.length - 1 ? this.length % 32 : 32
            for (let x = 0; x < max; x++) {
                callback((number & 1 << x) > 0, 32 * container + x)
            }
        }
        )
    }
}
