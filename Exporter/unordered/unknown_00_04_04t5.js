"use strict";
function ex_unknown_00_04_04t5(o, x) {
    let e = o + divisible(48, g.divisibility)
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)
    su32(o + 8, x.u32_08)
    su32(o + 16, x.u32_16)
    su32(o + 24, x.u32_24)
    su32(o + 32, x.u32_32)
    su8(o + 40, x.u8_40)

    e = ex_s_offset(o + 4, e, ex_unknown_00_04_04t5_04, x.section_04, 'down');
    e = ex_s_offset(o + 12, e, ex_unknown_00_04_04t5_12, x.section_12, 'down');
    e = ex_s_offset(o + 20, e, ex_unknown_00_04_04t5_20, x.section_20, 'down');
    e = ex_s_offset(o + 28, e, ex_unknown_00_04_04t5_28, x.section_28, 'down');
    e = ex_s_offset(o + 36, e, ex_unknown_00_04_04t5_36, x.section_36, 'down');

    g.debug ? ex_debug(o, "fptO") : 0;
    return e
}
function ex_unknown_00_04_04t5_04(o, x) {
    let e = o + divisible(48, g.divisibility)
    su32(o + 0, x.u32_00)
    sf32(o + 4, x.f32_04)
    su8(o + 8, x.u8_08)
    //?
    su8(o + 9, x.u8_09)
    //amount?   su32(o +16, x.u32_16)
    //amount?   su32(o +28, x.u32_28)

    switch (x.u8_08) {
    case 103:
        e = ex_s_offset(o + 12, e, ex_unknown_00_04_04t5_04_12t103, x.section_12, 'down');
        break;
    case 105:
        e = ex_s_offset(o + 12, e, ex_unknown_00_04_04t5_04_12t105, x.section_12, 'down');
        break;
    }
    if (x.section_20.length) {
        su32(o + 16, x.section_20.length)
        su32(o + 20, e)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 4, g.divisibility)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_unknown_00_04_04t5_04_20(temp_offset + (i * 4), e, x.section_20[i])
        }
        ;
    }
    ;if (x.section_32.length) {
        su32(o + 28, x.section_32.length)
        su32(o + 32, e)
        g.oa.push(o + 32)
        let temp_offset = e
        e += divisible(x.section_32.length * 64, g.divisibility)
        for (let i = 0; i < x.section_32.length; i++) {
            e = ex_mysterious(temp_offset + (i * 64), e, x.section_32[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "7d4l") : 0;
    return e
}
function ex_unknown_00_04_04t5_04_12t103(o, x) {
    let e = o + divisible(48, g.divisibility)
    su32(o + 4, x.u32_04)
    su32(o + 12, x.u32_12)
    su32(o + 28, x.u32_28)

    g.debug ? ex_debug(o, "H>2U") : 0;
    return e
}
function ex_unknown_00_04_04t5_04_12t105(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)
    //amount?   su32(o +04, x.u32_04)

    if (x.section_08.length) {
        su32(o + 4, x.section_08.length)
        su32(o + 8, e)
        g.oa.push(o + 8)
        let temp_offset = e
        e += divisible(x.section_08.length * 64, g.divisibility)
        for (let i = 0; i < x.section_08.length; i++) {
            e = ex_mysterious(temp_offset + (i * 64), e, x.section_08[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "Yz^8") : 0;
    return e
}
function ex_unknown_00_04_04t5_04_20(o, e, x) {
    su32(o + 0, x.u32_00)

    g.debug ? ex_debug(o, "kluT") : 0;
    return e
}
function ex_unknown_00_04_04t5_12(o, x) {
    let e = o + divisible(16, g.divisibility)
    //amount?   su32(o +00, x.u32_00)
    su8(o + 8, x.u8_08)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 12, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_unknown_00_04_04t5_12_04(temp_offset + (i * 12), e, x.section_04[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "VkuS") : 0;
    return e
}
function ex_unknown_00_04_04t5_12_04(o, e, x) {
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)
    su8(o + 4, x.u8_04)
    sf32(o + 8, x.f32_08)

    g.debug ? ex_debug(o, "g=BX") : 0;
    return e
}
function ex_unknown_00_04_04t5_20(o, x) {
    let e = o + divisible(16, g.divisibility)
    //amount?   su32(o +00, x.u32_00)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 12, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_unknown_00_04_04t5_20_04(temp_offset + (i * 12), e, x.section_04[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, ";pec") : 0;
    return e
}
function ex_unknown_00_04_04t5_20_04(o, e, x) {
    sf32(o + 0, x.f32_00)
    sf32(o + 8, x.f32_08)

    g.debug ? ex_debug(o, "TuTs") : 0;
    return e
}
function ex_unknown_00_04_04t5_28(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    e = ex_s_offset(o + 4, e, ex_unknown_00_04_04t5_28_04, x.section_04, 'up');

    g.debug ? ex_debug(o, "db:b") : 0;
    return e
}
function ex_unknown_00_04_04t5_28_04(o, x) {
    let e = o + divisible(16, g.divisibility)

    e = ex_ml(x.unordered_unknown_00_04_04t5_28_04_00_00, g.unknown_00_04_04t5_28_04_00_array, ex_unknown_00_04_04t5_28_04_00, g.unordered_ref.unknown_00_04_04t5_28_04_00, o + 0, e, 'down');

    g.debug ? ex_debug(o, "h8pJ") : 0;
    return e
}

function ex_unknown_00_04_04t5_36(o, x) {
    let e = o + divisible(16, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)

    g.debug ? ex_debug(o, "WosI") : 0;
    return e
}
