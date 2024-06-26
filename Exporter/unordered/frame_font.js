"use strict";
function ex_frame_font(o, x) {
    let e = o + divisible(48, g.divisibility)
    su8(o + 8, x.u8_08)
    su8(o + 9, x.u8_09)
    su8(o + 10, x.u8_10)
    sf32(o + 12, x.f32_12)
    su32(o + 24, x.u32_24)
    ex_patch(o + 0, g.texture_patch_array, x.texture_00);

    e = ex_s_offset(o + 28, e, ex_frame_font_28, x.section_28, 'up')

    if (x.section_36.length) {
        su32(o + 32, x.section_36.length)
        su32(o + 36, e)
        g.oa.push(o + 36)
        let temp_offset = e
        e += divisible(x.section_36.length * 12, g.divisibility)
        for (let i = 0; i < x.section_36.length; i++) {
            e = ex_frame_font_36(temp_offset + (i * 12), e, x.section_36[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "O7hZ") : 0;

    return e

}

function ex_frame_font_28(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 0, x.f32_00)

    g.debug ? ex_debug(o, "?KgJ") : 0;

    return e

}

function ex_frame_font_36(o, e, x) {
    su8(o + 0, x.u8_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)

    g.debug ? ex_debug(o, "?HV;") : 0;

    return e

}
