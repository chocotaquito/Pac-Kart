"use strict";
function ex_world(o, x) {
    let e = o + divisible(160, g.divisibility)
    su32(o + 16, x.u32_16)
    su32(o + 96, x.u32_96)
    su32(o + 100, x.u32_100)
    su32(o + 104, x.u32_104)
    su32(o + 108, x.u32_108)
    su32(o + 112, x.u32_112)
    su32(o + 116, x.u32_116)
    su32(o + 120, x.u32_120)
    su32(o + 124, x.u32_124)
    su32(o + 128, x.u32_128)
    su32(o + 132, x.u32_132)
    su32(o + 136, x.u32_136)
    su32(o + 140, x.u32_140)
    su32(o + 144, x.u32_144)
    su32(o + 148, x.u32_148)
    su32(o + 152, x.u32_152)
    su32(o + 156, x.u32_156)

    //amount?
    //amount?   su32(o +28, x.u32_28)
    // unknown(o +96-160, x.// unknown_96-160) //?
    e = ex_s_offset(o + 4, e, ex_collision, x.section_04, 'up');
    e = ex_byte_alignment_testing(e)

    if (x.section_20.length) {
        su32(o + 20, e)
        g.oa.push(o + 20)
        e = ex_world_20(e, x.section_20);
    }

    if (x.unordered_world_settings_00) {
        g.oa.push(o + 0)
    }

    e = ex_s_offset(o + 8, e, ex_world_08, x.section_08, 'up');
    e = ex_s_offset(o + 12, e, ex_world_12, x.section_12, 'up');
    if (x.section_32.length) {
        su32(o + 28, x.section_32.length)
        su32(o + 32, e)
        g.oa.push(o + 32)
        let temp_offset = e
        e += divisible(x.section_32.length * 4, g.divisibility)
        for (let i = 0; i < x.section_32.length; i++) {
            e = ex_world_32(temp_offset + (i * 4), e, x.section_32[i])
        }
        ;
    }
    if (g.file_name === 'Award.xpc') {
        g.temp_world_offset_holder.push([x.unordered_world_settings_00, g.world_settings_array, ex_world_settings, g.unordered_ref.world_settings, o + 0, e, 'none']);

    }

    e = ex_s_offset(o + 24, e, ex_world_24, x.section_24, 'up');

    e = ex_ordered_list(e)

    // e = ex_ml(x.unordered_world_settings_00, g.world_settings_array, ex_world_settings, g.unordered_ref.world_settings, o + 0, e, 'none');

    for (let i = 0; i < g.temp_world_offset_holder_5.length; i++) {
        e = ex_ml(g.temp_world_offset_holder_5[i][0], g.temp_world_offset_holder_5[i][1], g.temp_world_offset_holder_5[i][2], g.temp_world_offset_holder_5[i][3], g.temp_world_offset_holder_5[i][4], e, g.temp_world_offset_holder_5[i][6], g.temp_world_offset_holder_5[i][7], g.temp_world_offset_holder_5[i][8])
    }
    if (g.file_name === 'Award.xpc') {

        for (let i = 0; i < g.temp_world_offset_holder.length; i++) {
            if (g.temp_world_offset_holder[i][2].name === "ex_world_20_12t4") {
                e = ex_ml(g.temp_world_offset_holder[i][0], g.temp_world_offset_holder[i][1], g.temp_world_offset_holder[i][2], g.temp_world_offset_holder[i][3], g.temp_world_offset_holder[i][4], e, g.temp_world_offset_holder[i][6], true)
            } else if (g.temp_world_offset_holder[i][2].name === "ex_world_20_12t8") {
                e = ex_ml(g.temp_world_offset_holder[i][0], g.temp_world_offset_holder[i][1], g.temp_world_offset_holder[i][2], g.temp_world_offset_holder[i][3], g.temp_world_offset_holder[i][4], e, g.temp_world_offset_holder[i][6], true)
            } else if (g.temp_world_offset_holder[i][2].name === "ex_model_animation_1") {
                e = ex_ml(g.temp_world_offset_holder[i][0], g.temp_world_offset_holder[i][1], g.temp_world_offset_holder[i][2], g.temp_world_offset_holder[i][3], g.temp_world_offset_holder[i][4], e, g.temp_world_offset_holder[i][6], true)
            } else {
                e = ex_ml(g.temp_world_offset_holder[i][0], g.temp_world_offset_holder[i][1], g.temp_world_offset_holder[i][2], g.temp_world_offset_holder[i][3], g.temp_world_offset_holder[i][4], e, g.temp_world_offset_holder[i][6])
            }
        }

    }

    e = ex_ml(x.unordered_world_settings_00, g.world_settings_array, ex_world_settings, g.unordered_ref.world_settings, o + 0, e, 'none');
    if (g.file_name !== 'Award.xpc') {
        e = ex_ml(x.unordered_world_settings_00, g.world_settings_array, ex_world_settings, g.unordered_ref.world_settings, o + 0, e, 'none');
    }

    for (let i = 0; i < g.temp_world_offset_holder.length; i++) {
        if (g.temp_world_offset_holder[i][2].name === "ex_world_20_12t4") {
            e = ex_ml(g.temp_world_offset_holder[i][0], g.temp_world_offset_holder[i][1], g.temp_world_offset_holder[i][2], g.temp_world_offset_holder[i][3], g.temp_world_offset_holder[i][4], e, g.temp_world_offset_holder[i][6], true)
        } else if (g.temp_world_offset_holder[i][2].name === "ex_world_20_12t8") {
            e = ex_ml(g.temp_world_offset_holder[i][0], g.temp_world_offset_holder[i][1], g.temp_world_offset_holder[i][2], g.temp_world_offset_holder[i][3], g.temp_world_offset_holder[i][4], e, g.temp_world_offset_holder[i][6], true)
        } else if (g.temp_world_offset_holder[i][2].name === "ex_model_animation_1") {
            e = ex_ml(g.temp_world_offset_holder[i][0], g.temp_world_offset_holder[i][1], g.temp_world_offset_holder[i][2], g.temp_world_offset_holder[i][3], g.temp_world_offset_holder[i][4], e, g.temp_world_offset_holder[i][6], true)
        } else {
            e = ex_ml(g.temp_world_offset_holder[i][0], g.temp_world_offset_holder[i][1], g.temp_world_offset_holder[i][2], g.temp_world_offset_holder[i][3], g.temp_world_offset_holder[i][4], e, g.temp_world_offset_holder[i][6])
        }
    }

    ;g.debug ? ex_debug(o, "du1v") : 0;
    return e
}
function ex_collision(o, x) {
    let e = o + divisible(96, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    su32(o + 36, x.u32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    sf32(o + 48, x.f32_48)
    su32(o + 52, x.u32_52)
    su32(o + 56, x.u32_56)
    su32(o + 60, x.u32_60)
    //   su32(o +68, x.u32_68)
    //amount?   su32(o +72, x.u32_72)
    //amount?   su32(o +80, x.u32_80)
    su32(o + 88, x.u32_88);
    if (x.section_76.length) {
        su32(o + 72, x.section_76.length)
        su32(o + 76, e)
        g.oa.push(o + 76)
        let temp_offset = e
        e += divisible(x.section_76.length * 32, g.divisibility)
        for (let i = 0; i < x.section_76.length; i++) {
            e = ex_collision_76(temp_offset + (i * 32), e, x.section_76[i])
        }
        ;
    }

    ;if (x.section_84.length) {
        su32(o + 80, x.section_84.length)
        su32(o + 84, e)
        g.oa.push(o + 84)
        let temp_offset = e
        e += divisible(x.section_84.length * 64, g.divisibility)
        for (let i = 0; i < x.section_84.length; i++) {
            e = ex_collision_84(temp_offset + (i * 64), e, x.section_84[i])
        }
        ;
    }

    if (x.section_64.length) {
        su32(o + 64, e)
        g.oa.push(o + 64)
        let temp_offset = e
        e += divisible(x.section_64.length * 4, g.divisibility)
        for (let i = 0; i < x.section_64.length; i++) {
            e = ex_collision_64(temp_offset + (i * 4), e, x.section_64[i])
        }
        ;
    }

    let temp_function = ex_collision_32t0

    switch (x.u32_88) {
    case 0:
        temp_function = ex_collision_32t0
        // e = ex_s_offset(o + 32, e, ex_collision_32t0, x.section_32, 'down');
        break;
    case 1:
        temp_function = ex_collision_32t1
        // e = ex_s_offset(o + 32, e, ex_collision_32t1, x.section_32, 'down');
        break;
    }

    if (x.section_32.length) {
        su32(o + 68, x.section_32.length)
        su32(o + 32, e)
        g.oa.push(o + 32)
        let temp_offset = e
        e += divisible(x.section_32.length * 48, g.divisibility)
        for (let i = 0; i < x.section_32.length; i++) {
            e = temp_function(temp_offset + (i * 48), e, x.section_32[i],i === x.section_32.length -1)
        }
        ;
    }

    ;g.debug ? ex_debug(o, "95=m") : 0;
    return e
}
function ex_collision_76(o, e, x) {
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    su32(o + 20, x.u32_20)
    su16(o + 24, x.u16_24)
    su16(o + 26, x.u16_26)

    e = ex_s_offset(o + 16, e, ex_collision_76_16, x.section_16, 'down');

    g.debug ? ex_debug(o, "ttK_") : 0;
    return e
}
function ex_collision_76_16(o, x) {
    let e = o + divisible(48, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)

    g.debug ? ex_debug(o, "?A6W") : 0;
    return e
}
function ex_collision_84(o, e, x) {
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    su32(o + 48, x.u32_48)
    sf32(o + 52, x.f32_52)
    sf32(o + 56, x.f32_56)
    sf32(o + 60, x.f32_60)

    g.debug ? ex_debug(o, "Zn7D") : 0;
    return e
}
function ex_collision_64(o, e, x) {
    su32(o + 0, x.u32_00)

    g.debug ? ex_debug(o, "b0x8") : 0;
    return e
}
function ex_collision_32t0(o, e, x,islast) {
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    //amount?   su32(o +44, x.u32_44)

    if (x.section_40.length) {
        su32(o + 44, x.section_40.length)
        su32(o + 40, e)
        g.oa.push(o + 40)
        let temp_offset = e
        if (islast) {
        e += divisible(x.section_40.length * 4, g.divisibility)
        }else{
        e += x.section_40.length * 4
        }
        for (let i = 0; i < x.section_40.length; i++) {
            e = ex_collision_32t0_40(temp_offset + (i * 4), e, x.section_40[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "TUtL") : 0;
    return e
}
function ex_collision_32t0_40(o, e, x) {
    su32(o + 0, x.u32_00)

    g.debug ? ex_debug(o, "FXrY") : 0;
    return e
}
function ex_collision_32t1(o, e, x) {
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    //amount?   su32(o +32, x.u32_32)
    //amount?   su32(o +44, x.u32_44)

    if (x.section_40.length || x.section_36.length) {
        su32(o + 40, e)
        g.oa.push(o + 40)
    }

    if (x.section_40.length) {
        su32(o + 44, x.section_40.length)
        // su32(o + 40, e  )
        // g.oa.push(o + 40)
        let temp_offset = e
        // e += divisible(x.section_40.length * 12, 16)
        e += replacement_divisibility(x.section_40.length * 12, 16, x.section_40.length * 12 + e, 205)
        for (let i = 0; i < x.section_40.length; i++) {
            e = ex_collision_32t1_40(temp_offset + (i * 12), e, x.section_40[i])
        }
        ;
    }

    if (x.section_40.length || x.section_36.length) {
        su32(o + 36, e)
        g.oa.push(o + 36)
    }

    if (x.section_36.length) {
        su32(o + 32, x.section_36.length)
        // su32(o + 36, e  )
        // g.oa.push(o + 36)
        let temp_offset = e
        // e += divisible(x.section_36.length * 2, 16)
        e += replacement_divisibility(x.section_36.length * 2, 16, x.section_36.length * 2 + e, 205)
        for (let i = 0; i < x.section_36.length; i++) {
            e = ex_collision_32t1_36(temp_offset + (i * 2), e, x.section_36[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "40Qc") : 0;
    return e
}
function ex_collision_32t1_40(o, e, x) {
    //amount?   su32(o +04, x.u32_04)
    su8(o + 8, x.u8_08)
    su8(o + 9, x.u8_09)

    if (x.section_00.length) {
        su32(o + 4, x.section_00.length)
        su32(o + 0, e)
        g.oa.push(o + 0)
        let temp_offset = e
        e += divisible(x.section_00.length * 32, g.divisibility)

        for (let i = 0; i < x.section_00.length; i++) {
            e = ex_collision_32t1_40_00(temp_offset + (i * 32), e, x.section_00[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "prHh") : 0;
    return e
}
function ex_collision_32t1_40_00(o, e, x) {
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    su32(o + 16, x.u32_16)
    su16(o + 20, x.u16_20)
    su16(o + 22, x.u16_22)
    su32(o + 24, x.u32_24)
    su32(o + 28, x.u32_28)

    g.debug ? ex_debug(o, "Hqdp") : 0;
    return e
}
function ex_collision_32t1_36(o, e, x) {
    su16(o + 0, x.u16_00)

    g.debug ? ex_debug(o, "kt_A") : 0;
    return e
}
function ex_world_20(o, x) {
    let e = o + divisible(256, g.divisibility)

    if (x[0].type_0.length) {
        su32(o + 0, 0)
        //type
        su32(o + 4, 128)
        //bytes per entry
        su32(o + 8, x[0].type_0.length)
        //amount
        su32(o + 12, e)
        //offset
        g.oa.push(o + 12)
        e = ex_ma(x[0].type_0, g.world_20_12t0_array, ex_world_20_12t0, e, g.m)
        o += 16
    }
    if (x[0].type_1.length) {
        su32(o + 0, 1)
        //type
        su32(o + 4, 96)
        //bytes per entry
        su32(o + 8, x[0].type_1.length)
        //amount
        su32(o + 12, e)
        //offset
        g.oa.push(o + 12)
        e = ex_ma(x[0].type_1, g.world_20_12t1_array, ex_world_20_12t1, e, g.m)
        o += 16
    }
    if (x[0].type_13.length) {
        su32(o + 0, 13)
        //type
        su32(o + 4, 96)
        //bytes per entry
        su32(o + 8, x[0].type_13.length)
        //amount
        su32(o + 12, e)
        //offset
        g.oa.push(o + 12)

        e = ex_ma(x[0].type_13, g.world_20_12t13_array, ex_world_20_12t13, e, g.m)
        o += 16
    }
    if (x[0].type_14.length) {
        su32(o + 0, 14)
        //type
        su32(o + 4, 80)
        //bytes per entry
        su32(o + 8, x[0].type_14.length)
        //amount
        su32(o + 12, e)
        //offset
        g.oa.push(o + 12)

        e = ex_ma(x[0].type_14, g.world_20_12t14_array, ex_world_20_12t14, e, g.m)
        o += 16
    }
    if (x[0].type_15.length) {
        su32(o + 0, 15)
        //type
        su32(o + 4, 80)
        //bytes per entry
        su32(o + 8, x[0].type_15.length)
        //amount
        su32(o + 12, e)
        //offset
        g.oa.push(o + 12)

        e = ex_ma(x[0].type_15, g.world_20_12t15_array, ex_world_20_12t15, e, g.m)
        o += 16
    }

    if (x[0].type_5.length) {
        su32(o + 0, 5)
        //type
        su32(o + 4, 112)
        //bytes per entry
        su32(o + 8, x[0].type_5.length)
        //amount
        su32(o + 12, e)
        //offset
        g.oa.push(o + 12)

        e = ex_ma(x[0].type_5, g.world_20_12t5_array, ex_world_20_12t5, e, g.m)
        o += 16
    }

    if (x[0].type_2.length) {
        su32(o + 0, 2)
        su32(o + 4, 112)
        su32(o + 8, x[0].type_2.length)
        su32(o + 12, e)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x[0].type_2.length * 112, g.divisibility)
        for (let i = 0; i < x[0].type_2.length; i++) {
            e = ex_world_20_12t2(temp_offset + (i * 112), e, x[0].type_2[i])
        }
        o += 16
    }

    if (x[0].type_10.length) {
        su32(o + 0, 10)
        //type
        su32(o + 4, 96)
        //bytes per entry
        su32(o + 8, x[0].type_10.length)
        //amount
        su32(o + 12, e)
        //offset
        g.oa.push(o + 12)

        e = ex_ma(x[0].type_10, g.world_20_12t10_array, ex_world_20_12t10, e, g.m)
        o += 16
    }

    if (x[0].type_3.length) {
        su32(o + 0, 3)
        //type
        su32(o + 4, 64)
        //bytes per entry
        su32(o + 8, x[0].type_3.length)
        //amount
        su32(o + 12, e)
        //offset
        g.oa.push(o + 12)

        e = ex_ma(x[0].type_3, g.world_20_12t3_array, ex_world_20_12t3, e, g.m)
        o += 16
    }

    if (x[0].type_4.length) {
        // su32(o + 0, 4)
        // //type
        // su32(o + 4, 144)
        // //bytes per entry
        // su32(o + 8, x[0].type_4.length)
        // //amount
        // su32(o + 12, e  )
        // //offset
        // g.oa.push(o + 12)

        // e = ex_ma(x[0].type_4, g.world_20_12t4_array, ex_world_20_12t4, e, g.m)
        // o += 16
        su32(o + 0, 4)
        su32(o + 4, 144)
        su32(o + 8, x[0].type_4.length)
        su32(o + 12, e)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x[0].type_4.length * 144, g.divisibility)
        for (let i = 0; i < x[0].type_4.length; i++) {
            let temp_index = g.world_20_12t4_array[0].a_ids.indexOf(x[0].type_4[i].id)
            g.world_20_12t4_array[0].a_offsets[temp_index] = (temp_offset + (i * 144))

            e = ex_world_20_12t4(temp_offset + (i * 144), e, x[0].type_4[i])
        }
        o += 16

    }

    if (x[0].type_11.length) {
        su32(o + 0, 11)
        //type
        su32(o + 4, 80)
        //bytes per entry
        su32(o + 8, x[0].type_11.length)
        //amount
        su32(o + 12, e)
        //offset
        g.oa.push(o + 12)

        e = ex_ma(x[0].type_11, g.world_20_12t11_array, ex_world_20_12t11, e, g.m)
        o += 16
    }

    if (x[0].type_8.length) {
        // su32(o + 0, 8)
        // //type
        // su32(o + 4, 80)
        // //bytes per entry
        // su32(o + 8, x[0].type_8.length)
        // //amount
        // su32(o + 12, e  )
        // //offset
        // e = ex_ma(x[0].type_8, g.world_20_12t8_array, ex_world_20_12t8, e, g.m)
        // o += 16
        su32(o + 0, 8)
        su32(o + 4, 80)
        su32(o + 8, x[0].type_8.length)
        su32(o + 12, e)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x[0].type_8.length * 80, g.divisibility)
        for (let i = 0; i < x[0].type_8.length; i++) {
            let temp_index = g.world_20_12t8_array[0].a_ids.indexOf(x[0].type_8[i].id)
            g.world_20_12t8_array[0].a_offsets[temp_index] = (temp_offset + (i * 80))

            e = ex_world_20_12t8(temp_offset + (i * 80), e, x[0].type_8[i])
        }
        o += 16

    }

    //0 , 1, 13,14,15,5,2,10,3,4,11,8
    // x[0].type_0

    //0 , 1, 13,14,15,5,2,10,3,4,11,8

    // if (x[0].length) {

    // }

    // su32(o + 4, x.u32_04)
    //?
    //amount?   su32(o +08, x.u32_08)
    // su32(o + 12, x.u32_12)

    // e = ex_s_offset(o + 0, e, ex_world_20_12t0, x.section_00, 'down');

    g.debug ? ex_debug(o, "m^_@") : 0;
    return e
}
function ex_type_entry_header(o, x) {
    su32(o + 0, x.u32_00)
    su16(o + 4, x.u16_04)
    su16(o + 6, x.u16_06)
    su16(o + 12, x.u16_12)
    su16(o + 14, x.u16_14)
    su16(o + 16, x.u16_16)
    su16(o + 18, x.u16_18)

    g.debug ? ex_debug(o, "kYS7") : 0;
}
function ex_world_20_12t0(o, x) {
    let e = o + divisible(128, g.divisibility)

    ex_type_entry_header(o, x.section_00[0])
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    sf32(o + 56, x.f32_56)
    sf32(o + 60, x.f32_60)
    su32(o + 68, x.u32_68)
    su16(o + 74, x.u16_74)
    sf32(o + 76, x.f32_76)
    sf32(o + 80, x.f32_80)
    su8(o + 112, x.u8_112)
    su8(o + 113, x.u8_113)
    su8(o + 114, x.u8_114)
    su8(o + 120, x.u8_120)
    su8(o + 121, x.u8_121)
    //?

    g.debug ? ex_debug(o, "5GU7") : 0;
    return e
}
function ex_world_20_12t1(o, x) {
    let e = o + divisible(96, g.divisibility)

    ex_type_entry_header(o, x.section_00[0])
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 44, x.f32_44)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    sf32(o + 56, x.f32_56)
    sf32(o + 60, x.f32_60)
    sf32(o + 68, x.f32_68)
    su8(o + 76, x.u8_76)
    su8(o + 77, x.u8_77)
    su8(o + 78, x.u8_78)
    sf32(o + 80, x.f32_80)

    if (x.ordered_model_animation_1_64) {
        g.oa.push(o + 64)
    }
    if (x.unordered_idk_72) {
        g.oa.push(o + 72)
    }

    g.temp_world_offset_holder.push([x.ordered_model_animation_1_64, g.model_animation_1_array, ex_model_animation_1, g.ordered_ref.model_animation_1, o + 64, e, 'none'])
    g.temp_world_offset_holder.push([x.unordered_idk_72, g.idk_array, ex_idk, g.unordered_ref.idk, o + 72, e, 'none'])

    // e = ex_ml(x.ordered_model_animation_1_64, g.model_animation_1_array, ex_model_animation_1, g.ordered_ref.model_animation_1, o + 64, e, 'down');
    // e = ex_ml(x.unordered_idk_72, g.idk_array, ex_idk, g.unordered_ref.idk, o + 72, e, 'down');

    g.debug ? ex_debug(o, "c6h0") : 0;
    return e
}
function ex_world_20_12t2(o, e, x) {
    ex_type_entry_header(o, x.section_00[0])

    su32(o + 40, x.u32_40)
    su32(o + 52, x.u32_52)
    //amount?   su32(o +60, x.u32_60)
    su32(o + 84, x.u32_84)
    //amount?   su32(o +104, x.u32_104)

    if (x.section_64.length) {
        su32(o + 60, x.section_64.length)
        su32(o + 64, e)
        g.oa.push(o + 64)
        let temp_offset = e
        e += divisible(x.section_64.length * 4, g.divisibility)
        for (let i = 0; i < x.section_64.length; i++) {
            e = ex_world_20_12t2_64(temp_offset + (i * 4), e, x.section_64[i])
        }
        ;
    }
    if (x.section_100.length) {
        su32(o + 104, x.section_100.length)
        su32(o + 100, e)
        g.oa.push(o + 100)
        let temp_offset = e
        e += divisible(x.section_100.length * 4, g.divisibility)
        for (let i = 0; i < x.section_100.length; i++) {
            e = ex_world_20_12t2_100(temp_offset + (i * 4), e, x.section_100[i])
        }
        ;
    }

    e = ex_s_offset(o + 56, e, ex_world_20_12t2_56, x.section_56, 'down');
    e = ex_s_offset(o + 76, e, ex_world_20_12t2_76, x.section_76, 'up');
    ;e = ex_s_offset(o + 72, e, ex_world_20_12t2_72, x.section_72, 'up');

    ;g.debug ? ex_debug(o, "^PxM") : 0;
    return e
}
function ex_world_20_12t2_100(o, e, x) {
    su32(o + 0, x.u32_00)

    g.debug ? ex_debug(o, "@<rE") : 0;
    return e
}
function ex_world_20_12t2_56(o, x) {
    let e = o + x.buffer.byteLength

    new Uint8Array(dynamic_buffer).set(new Uint8Array(x.buffer), o)

    // for (let i = 0; i < x.buffer.byteLength; i++) {
    //     su8(o + i, new DataView(x.buffer).getUint8(i))
    // }

    // let e = o + 192
    // sf32(o + 0, x.f32_00)
    // sf32(o + 4, x.f32_04)
    // sf32(o + 8, x.f32_08)
    // sf32(o + 12, x.f32_12)
    // su8(o + 16, x.u8_16)
    // su8(o + 17, x.u8_17)
    // su16(o + 18, x.u16_18)
    // su32(o + 20, x.u32_20)
    // su32(o + 24, x.u32_24)
    // su32(o + 28, x.u32_28)
    // sf32(o + 32, x.f32_32)
    // sf32(o + 36, x.f32_36)
    // sf32(o + 40, x.f32_40)
    // sf32(o + 44, x.f32_44)
    // su8(o + 48, x.u8_48)
    // su8(o + 49, x.u8_49)
    // su16(o + 50, x.u16_50)
    // su32(o + 52, x.u32_52)
    // su32(o + 56, x.u32_56)
    // su32(o + 60, x.u32_60)
    // sf32(o + 64, x.f32_64)
    // sf32(o + 68, x.f32_68)
    // sf32(o + 72, x.f32_72)
    // sf32(o + 76, x.f32_76)
    // su8(o + 80, x.u8_80)
    // su8(o + 81, x.u8_81)
    // su16(o + 82, x.u16_82)
    // su32(o + 84, x.u32_84)
    // su32(o + 88, x.u32_88)
    // su32(o + 92, x.u32_92)
    // sf32(o + 96, x.f32_96)
    // sf32(o + 100, x.f32_100)
    // sf32(o + 104, x.f32_104)
    // sf32(o + 108, x.f32_108)
    // su8(o + 112, x.u8_112)
    // su8(o + 113, x.u8_113)
    // su16(o + 114, x.u16_114)
    // su32(o + 116, x.u32_116)
    // su32(o + 120, x.u32_120)
    // su32(o + 124, x.u32_124)
    // sf32(o + 128, x.f32_128)
    // sf32(o + 132, x.f32_132)
    // sf32(o + 136, x.f32_136)
    // sf32(o + 140, x.f32_140)
    // su8(o + 144, x.u8_144)
    // su8(o + 145, x.u8_145)
    // su16(o + 146, x.u16_146)
    // su32(o + 148, x.u32_148)
    // su32(o + 152, x.u32_152)
    // su32(o + 156, x.u32_156)
    // sf32(o + 160, x.f32_160)
    // sf32(o + 164, x.f32_164)
    // sf32(o + 168, x.f32_168)
    // sf32(o + 172, x.f32_172)
    // su8(o + 176, x.u8_176)
    // su8(o + 177, x.u8_177)
    // su16(o + 178, x.u16_178)
    // su32(o + 180, x.u32_180)
    // su32(o + 184, x.u32_184)
    // su32(o + 188, x.u32_188)

    g.debug ? ex_debug(o, "r49S") : 0;
    return e
}
function ex_world_20_12t2_64(o, e, x) {
    su32(o + 0, x.u32_00)

    g.debug ? ex_debug(o, "Iw[p") : 0;
    return e
}
function ex_world_20_12t2_76(o, x) {
    let e = o + divisible(16, g.divisibility)
    su16(o + 2, x.u16_02)
    //amount?   su32(o +08, x.u32_08)

    if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 4, g.divisibility)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_world_20_12t2_76_12(temp_offset + (i * 4), e, x.section_12[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "L>23") : 0;
    return e
}
function ex_world_20_12t2_76_12(o, e, x) {

    switch (x.type) {
    case 13:
        e = ex_ml(x.section_00, g.world_20_12t13_array, ex_world_20_12t13, g.unordered_ref.world_20_12t13, o + 0, e, 'down', true);
        break
    case 14:
        e = ex_ml(x.section_00, g.world_20_12t14_array, ex_world_20_12t14, g.unordered_ref.world_20_12t14, o + 0, e, 'down', true);
        break
    case 15:
        e = ex_ml(x.section_00, g.world_20_12t15_array, ex_world_20_12t15, g.unordered_ref.world_20_12t15, o + 0, e, 'down', true);
        break
    }

    // if (offset) {
    //     if (g.world_20_12t13_array.includes(offset)) {
    //         x[i].section_00 = g.world_20_12t13_array.indexOf(offset)
    //         x[i].type = 13
    //     } else if (g.world_20_12t14_array.includes(offset)) {
    //         x[i].section_00 = g.world_20_12t14_array.indexOf(offset)
    //         x[i].type = 14
    //     } else if (g.world_20_12t15_array.includes(offset)) {
    //         x[i].section_00 = g.world_20_12t15_array.indexOf(offset)
    //         x[i].type = 15
    //     } else {
    //         console.log('?')
    //     }

    // }

    // e = ex_ml(x.section_00t13, g.world_20_12t13_array, ex_world_20_12t13, g.unordered_ref.world_20_12t13, o + 0, e, 'down', true);
    // e = ex_ml(x.section_00t14, g.world_20_12t14_array, ex_world_20_12t14, g.unordered_ref.world_20_12t14, o + 0, e, 'down', true);
    // e = ex_ml(x.section_00, g.world_20_12t15_array, ex_world_20_12t15, g.unordered_ref.world_20_12t15, o + 0, e, 'down', true);

    g.debug ? ex_debug(o, "035Z") : 0;
    return e
}
function ex_world_20_12t2_72(o, x) {
    let e = o + divisible(16, g.divisibility)

    if (x.section_00.length) {
        // su32(o + ___$$$___, x.section_00.length)
        su32(o + 0, e)
        g.oa.push(o + 0)
        let temp_offset = e
        e += divisible(x.section_00.length * 4, g.divisibility)
        for (let i = 0; i < x.section_00.length; i++) {
            e = ex_world_20_12t2_72_00(temp_offset + (i * 4), e, x.section_00[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "DQJ]") : 0;
    return e
}
function ex_world_20_12t2_72_00(o, e, x) {

    e = ex_ml(x.section_00, g.world_20_12t5_array, ex_world_20_12t5, g.unordered_ref.world_20_12t5, o + 0, e, 'down', true);

    // if (x.section_00.length) {
    //     // su32(o + ___$$$___, x.section_00.length)
    //     su32(o + 0, e  )
    //     g.oa.push(o + 0)
    //     let temp_offset = e
    //     e += divisible(x.section_00.length * 112, 16)
    //     for (let i = 0; i < x.section_00.length; i++) {
    //         e = ex_world_20_12t5(temp_offset + (i * 112), e, x.section_00[i])
    //     }
    //     ;
    // }
    ;g.debug ? ex_debug(o, "=A]N") : 0;
    return e
}
function ex_world_20_12t3(o, x) {
    let e = o + divisible(64, g.divisibility)

    ex_type_entry_header(o, x.section_00[0])

    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)

    if (x.unordered_sound_controls_48) {
        g.oa.push(o + 48)
    }

    g.temp_world_offset_holder.push([x.unordered_sound_controls_48, g.sound_controls_array, ex_sound_controls, g.unordered_ref.sound_controls, o + 48, e, 'none']);

    g.debug ? ex_debug(o, "0oiV") : 0;
    return e
}
function ex_world_20_12t4(o, e, x) {
    // let e = o + 144

    ex_type_entry_header(o, x.section_00[0])

    su32(o + 32, x.u32_32)
    sf32(o + 40, x.f32_40)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    sf32(o + 56, x.f32_56)
    sf32(o + 64, x.f32_64)
    sf32(o + 68, x.f32_68)
    sf32(o + 72, x.f32_72)
    sf32(o + 80, x.f32_80)
    sf32(o + 84, x.f32_84)
    sf32(o + 88, x.f32_88)
    sf32(o + 92, x.f32_92)
    sf32(o + 116, x.f32_116)
    su32(o + 120, x.u32_120)
    su32(o + 124, x.u32_124)

    if (x.unordered_unknown_00_96) {
        g.oa.push(o + 96)
    }
    if (x.unordered_interface_104) {
        g.oa.push(o + 104)
    }

    g.temp_world_offset_holder.push([x.unordered_unknown_00_96, g.unknown_00_array, ex_unknown_00, g.unordered_ref.unknown_00, o + 96, e, 'none']);
    g.temp_world_offset_holder.push([x.unordered_interface_104, g.interface_array, ex_interface, g.unordered_ref.interface, o + 104, e, 'none']);
    switch (x.u32_120) {
    case 0:
        if (x.section_128) {
            g.oa.push(o + 128)
        }
        g.temp_world_offset_holder.push([x.section_128, g.world_20_12t4_array, ex_world_20_12t4, g.unordered_ref.world_20_12t4, o + 128, e, 'none'])

        // e = ex_s_offset(o + 128, e, ex_world_20_12t4, x.section_128, 'down');
        break;
    case 1:
        e = ex_s_offset(o + 128, e, ex_world_20_12t4_128t1, x.section_128, 'down');
        break;
    }
    g.debug ? ex_debug(o, "OEXF") : 0;
    return e
}
function ex_world_20_12t4_128t1(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    g.debug ? ex_debug(o, "jLKZ") : 0;
    return e
}
function ex_world_20_12t5(o, x) {
    let e = o + divisible(112, g.divisibility)

    ex_type_entry_header(o, x.section_00[0])

    sf32(o + 32, x.f32_32)
    sf32(o + 52, x.f32_52)
    sf32(o + 72, x.f32_72)
    sf32(o + 92, x.f32_92)
    su8(o + 96, x.u8_96)

    g.temp_world_offset_holder_5.push([x.ordered_models_100, g.models_array, ex_models, g.ordered_ref.models, o + 100, e, 'none', true, "model"]);

    g.debug ? ex_debug(o, "nq>j") : 0;
    return e
}
function ex_world_20_12t8(o, e, x) {
    // let e = o + 80

    ex_type_entry_header(o, x.section_00[0])

    su32(o + 32, x.u32_32)
    su32(o + 36, x.u32_36)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    sf32(o + 56, x.f32_56)
    sf32(o + 60, x.f32_60)
    sf32(o + 64, x.f32_64)
    sf32(o + 68, x.f32_68)

    switch (x.u32_32) {
    case 0:
        e = ex_s_offset(o + 72, e, ex_world_20_12t8_72, x.section_72, 'down');
        break;
    }

    switch (x.u32_36) {
    case 1:
        e = ex_s_offset(o + 76, e, ex_world_20_12t8_76t1, x.section_76, 'up');
        break;
    case 7:
        e = ex_s_offset(o + 76, e, ex_world_20_12t8_76t7, x.section_76, 'up');
        break;
    case 8:
        e = ex_s_offset(o + 76, e, ex_world_20_12t8_76t8, x.section_76, 'up');
        break;
    }
    g.debug ? ex_debug(o, "b:GC") : 0;
    return e
}
function ex_world_20_12t8_72(o, x) {
    let e = o + x.buffer.byteLength

    new Uint8Array(dynamic_buffer).set(new Uint8Array(x.buffer), o)

    // for (let i = 0; i < x.buffer.byteLength; i++) {
    //     su8(o + i, new DataView(x.buffer).getUint8(i))
    // }

    // unknown(o +00, x.// unknown_00)

    g.debug ? ex_debug(o, "CTtL") : 0;
    return e
}
function ex_world_20_12t8_76t1(o, x) {
    let e = o + divisible(32, g.divisibility)
    sf32(o + 8, x.f32_08)
    su32(o + 12, x.u32_12)
    //?

    g.debug ? ex_debug(o, "xs_c") : 0;
    return e
}
function ex_world_20_12t8_76t7(o, x) {
    let e = o + divisible(16, g.divisibility)
    su8(o + 0, x.u8_00)
    su32(o + 4, x.u32_04)

    g.debug ? ex_debug(o, "5S>P") : 0;
    return e
}
function ex_world_20_12t8_76t8(o, x) {
    let e = o + divisible(16, g.divisibility)
    su32(o + 0, x.u32_00)

    //  e = ex_ml(x.unordered_world_20_12t8_76t8_04_04,g.world_20_12t8_76t8_04_array ,ex_world_20_12t8_76t8_04,g.unordered_ref.world_20_12t8_76t8_04, o + 4, e, 'down');
    // e = ex_ml(x.unordered_world_20_12t8_76t8_08_08,g.world_20_12t8_76t8_08_array ,ex_world_20_12t8_76t8_08,g.unordered_ref.world_20_12t8_76t8_08, o + 8, e, 'down');

    if (x.unordered_world_20_12t8_76t8_04_04) {
        g.oa.push(o + 4)
    }
    if (x.unordered_world_20_12t8_76t8_08_08) {
        g.oa.push(o + 8)
    }
    g.temp_world_offset_holder.push([x.unordered_world_20_12t8_76t8_04_04, g.world_20_12t8_76t8_04_array, ex_world_20_12t8_76t8_04, g.unordered_ref.world_20_12t8_76t8_04, o + 4, e, 'none']);
    g.temp_world_offset_holder.push([x.unordered_world_20_12t8_76t8_08_08, g.world_20_12t8_76t8_08_array, ex_world_20_12t8_76t8_08, g.unordered_ref.world_20_12t8_76t8_08, o + 8, e, 'none']);

    // g.temp_world_offset_holder.push([o + 4, e, ex_world_20_12t8_76t8_04, x.section_04, 'down']);
    // g.temp_world_offset_holder.push([o + 8, e, ex_world_20_12t8_76t8_08, x.section_08, 'down']);

    g.debug ? ex_debug(o, "vkwM") : 0;
    return e
}
function ex_world_20_12t8_76t8_04(o, x) {
    let e = o + divisible(48, g.divisibility)
    su32(o + 4, x.u32_04)
    su32(o + 8, x.u32_08)
    sf32(o + 16, x.f32_16)
    su32(o + 20, x.u32_20)
    su32(o + 28, x.u32_28)

    g.debug ? ex_debug(o, "n4sv") : 0;
    return e
}
function ex_world_20_12t8_76t8_08(o, x) {
    let e = o + divisible(32, g.divisibility)
    su32(o + 0, x.u32_00)
    su16(o + 4, x.u16_04)
    sf32(o + 8, x.f32_08)
    su32(o + 12, x.u32_12)

    e = ex_ml(x.unordered_unknown_00_16, g.unknown_00_array, ex_unknown_00, g.unordered_ref.unknown_00, o + 16, e, 'down');
    e = ex_ml(x.unordered_unknown_00_20, g.unknown_00_array, ex_unknown_00, g.unordered_ref.unknown_00, o + 20, e, 'down');

    // g.temp_world_offset_holder.push([x.unordered_unknown_00_16, g.unknown_00_array, ex_unknown_00, g.unordered_ref.unknown_00, o + 16, e, 'down']);
    // g.temp_world_offset_holder.push([x.unordered_unknown_00_20, g.unknown_00_array, ex_unknown_00, g.unordered_ref.unknown_00, o + 20, e, 'down']);

    g.debug ? ex_debug(o, "SIFl") : 0;
    return e
}
function ex_world_20_12t10(o, x) {
    let e = o + divisible(96, g.divisibility)

    ex_type_entry_header(o, x.section_00[0])

    sf32(o + 32, x.f32_32)
    //?
    sf32(o + 36, x.f32_36)
    //?
    sf32(o + 40, x.f32_40)
    //?
    sf32(o + 44, x.f32_44)
    //?
    sf32(o + 48, x.f32_48)
    //?
    sf32(o + 52, x.f32_52)
    //?
    sf32(o + 56, x.f32_56)
    //?
    sf32(o + 60, x.f32_60)
    //?
    sf32(o + 68, x.f32_68)
    sf32(o + 72, x.f32_72)
    su8(o + 76, x.u8_76)
    su32(o + 80, x.u32_80)
    su32(o + 84, x.u32_84)

    if (x.unordered_activator_64) {
        g.oa.push(o + 64)
    }

    g.temp_world_offset_holder.push([x.unordered_activator_64, g.activator_array, ex_activator, g.unordered_ref.activator, o + 64, e, 'none']);

    g.debug ? ex_debug(o, "erOP") : 0;
    return e
}
function ex_world_20_12t11(o, x) {
    let e = o + divisible(80, g.divisibility)

    ex_type_entry_header(o, x.section_00[0])

    sf32(o + 32, x.f32_32)
    //?
    sf32(o + 36, x.f32_36)
    //?
    sf32(o + 40, x.f32_40)
    //?
    sf32(o + 44, x.f32_44)
    //?
    sf32(o + 48, x.f32_48)
    //?
    sf32(o + 52, x.f32_52)
    //?
    sf32(o + 56, x.f32_56)
    //?
    sf32(o + 60, x.f32_60)
    //?
    su32(o + 64, x.u32_64)

    e = ex_ml(x.section_68, g.world_20_12t0_array, ex_world_20_12t0, g.unordered_ref.world_20_12t0, o + 68, e, 'down', true);

    // e = ex_s_offset(o + 68, e, ex_world_20_12t0, x.section_68, 'down');

    g.debug ? ex_debug(o, "1c0L") : 0;
    return e
}
function ex_world_20_12t13(o, x) {
    let e = o + divisible(96, g.divisibility)

    ex_type_entry_header(o, x.section_00[0])

    sf32(o + 32, x.f32_32)
    //?
    sf32(o + 36, x.f32_36)
    //?
    sf32(o + 40, x.f32_40)
    //?
    sf32(o + 44, x.f32_44)
    //?
    sf32(o + 48, x.f32_48)
    //?
    sf32(o + 52, x.f32_52)
    //?
    sf32(o + 56, x.f32_56)
    //?
    sf32(o + 60, x.f32_60)
    //?
    sf32(o + 68, x.f32_68)
    su8(o + 73, x.u8_73)
    su8(o + 77, x.u8_77)

    if (x.unordered_idk_64) {
        g.oa.push(o + 64)
    }

    g.temp_world_offset_holder.push([x.unordered_idk_64, g.idk_array, ex_idk, g.unordered_ref.idk, o + 64, e, 'none']);

    g.debug ? ex_debug(o, "?M7H") : 0;
    return e
}
function ex_world_20_12t14(o, x) {
    let e = o + divisible(80, g.divisibility)

    ex_type_entry_header(o, x.section_00[0])

    sf32(o + 32, x.f32_32)
    //?
    sf32(o + 36, x.f32_36)
    //?
    sf32(o + 40, x.f32_40)
    //?
    sf32(o + 44, x.f32_44)
    //?
    sf32(o + 48, x.f32_48)
    //?
    sf32(o + 52, x.f32_52)
    //?
    sf32(o + 56, x.f32_56)
    //?
    sf32(o + 60, x.f32_60)
    //?
    sf32(o + 72, x.f32_72)
    su8(o + 76, x.u8_76)

    if (x.unordered_strange_64) {
        g.oa.push(o + 64)
    }
    g.temp_world_offset_holder.push([x.unordered_strange_64, g.strange_array, ex_strange, g.unordered_ref.strange, o + 64, e, 'none']);

    g.debug ? ex_debug(o, "AEAO") : 0;
    return e
}
function ex_world_20_12t15(o, x) {
    let e = o + divisible(80, g.divisibility)

    ex_type_entry_header(o, x.section_00[0])

    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    su32(o + 48, x.u32_48)
    su32(o + 52, x.u32_52)
    sf32(o + 60, x.f32_60)
    //?
    su8(o + 68, x.u8_68)
    su8(o + 69, x.u8_69)
    su8(o + 72, x.u8_72)
    su8(o + 73, x.u8_73)
    su8(o + 74, x.u8_74)
    su8(o + 75, x.u8_75)

    if (x.unordered_object_56) {
        g.oa.push(o + 56)
    }

    g.temp_world_offset_holder.push([x.unordered_object_56, g.object_array, ex_object, g.unordered_ref.object, o + 56, e, 'none']);

    g.debug ? ex_debug(o, "n^Vl") : 0;
    return e
}
function ex_world_08(o, x) {
    let e = o + divisible(64, g.divisibility)
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    //amount?   su32(o +24, x.u32_24)
    //amount?   su32(o +28, x.u32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    su32(o + 44, x.u32_44)
    su32(o + 48, x.u32_48)
    su32(o + 52, x.u32_52);
    if (x.section_20.length) {
        su32(o + 24, x.section_20.length)
        su32(o + 20, e)
        g.oa.push(o + 20)
        let temp_offset = e
        e += divisible(x.section_20.length * 4, g.divisibility)
        for (let i = 0; i < x.section_20.length; i++) {
            e = ex_world_08_20(temp_offset + (i * 4), e, x.section_20[i])
        }
        ;
    } else {
        su32(o + 20, o)
        g.oa.push(o + 20)
        //???????
    }

    if (x.section_16.length) {
        su32(o + 28, x.section_16.length)
        su32(o + 16, e)
        g.oa.push(o + 16)
        let temp_offset = e
        e += divisible(x.section_16.length * 80, g.divisibility)
        for (let i = 0; i < x.section_16.length; i++) {
            e = ex_world_08_16(temp_offset + (i * 80), e, x.section_16[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "9L>=") : 0;
    return e
}
function ex_world_08_20(o, e, x) {
    su32(o + 0, x.u32_00)

    g.debug ? ex_debug(o, "gwmz") : 0;
    return e
}
function ex_world_08_16(o, e, x) {
    //amount?   su32(o +08, x.u32_08)
    //amount?   su32(o +56, x.u32_56)
    //amount?   su32(o +64, x.u32_64)

    if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 4, g.divisibility)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_world_08_16_12(temp_offset + (i * 4), e, x.section_12[i])
        }
        ;
    }
    ;if (x.section_60.length) {
        su32(o + 56, x.section_60.length)
        su32(o + 60, e)
        g.oa.push(o + 60)
        let temp_offset = e
        e += divisible(x.section_60.length * 4, g.divisibility)
        for (let i = 0; i < x.section_60.length; i++) {
            e = ex_world_08_16_12(temp_offset + (i * 4), e, x.section_60[i])
        }
        ;
    }
    ;if (x.section_68.length) {
        su32(o + 64, x.section_68.length)
        su32(o + 68, e)
        g.oa.push(o + 68)
        let temp_offset = e
        e += divisible(x.section_68.length * 4, g.divisibility)
        for (let i = 0; i < x.section_68.length; i++) {
            e = ex_world_08_16_12(temp_offset + (i * 4), e, x.section_68[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "QpqG") : 0;
    return e
}
function ex_world_08_16_12(o, e, x) {

    // g.temp_world_offset_holder.push([x.section_00, g.world_20_12t8_array, ex_world_20_12t8, g.unordered_ref.world_20_12t8, o + 0, e, 'down'])// e = ex_ml();
    ex_ml(x.section_00, g.world_20_12t8_array, ex_world_20_12t8, g.unordered_ref.world_20_12t8, o + 0, e, 'down', true)// e = ex_ml();

    // if (x.section_00.length) {
    //     su32(o + ___$$$___, x.section_00.length)
    //     su32(o + 0, e  )
    //     g.oa.push(o + 0)
    //     let temp_offset = e
    //     e += divisible(x.section_00.length * 80, 16)
    //     for (let i = 0; i < x.section_00.length; i++) {
    //         e = ex_world_20_12t8(temp_offset + (i * 80), e, x.section_00[i])
    //     }
    //     ;
    // }
    ;
    g.debug ? ex_debug(o, "0vK5") : 0;
    return e
}
function ex_world_12(o, x) {
    let e = o + divisible(16, g.divisibility)
    //amount?   su32(o +04, x.u32_04)
    su32(o + 8, x.u32_08)
    let tempsectionsection = []

    if (x.section_00.length) {
        su32(o + 4, x.section_00.length)
        su32(o + 0, e)
        g.oa.push(o + 0)
        let temp_offset = e
        e += divisible(x.section_00.length * 128, g.divisibility)
        for (let i = 0; i < x.section_00.length; i++) {
            e = ex_world_12_00(temp_offset + (i * 128), e, x.section_00[i])
        }
        ;
    }

    for (let i = 0; i < tempsectionsection.length; i++) {
        e = ex_world_12_00_temp(i, e)
        // su32(tempsectionsection_52[i][0] + 48, tempsectionsection_52[i][1].section_52.length)
        // su32(tempsectionsection_52[i][0] + 52, e  )
        // g.oa.push(tempsectionsection_52[i][0] + 52)
        // let temp_offset = e
        // e += divisible(tempsectionsection_52[i][1].section_52.length * 4, 16)

        //     // su32(o + 48, x.section_56.length)
        //     // su32(o + 56, e  )
        //     // g.oa.push(o + 56)
        //     // let temp_offset = e
        //     // e += divisible(x.section_56.length * 4, 16)
        //     // for (let i = 0; i < x.section_56.length; i++) {
        //     //     e = ex_world_12_00_56(temp_offset + (i * 4), e, x.section_56[i])
        //     // }
        //     // ;

        // for (let ii = 0; ii < tempsectionsection_52[i][1].section_52.length; ii++) {
        //     e = ex_world_12_00_52(temp_offset + (ii * 4), e, tempsectionsection_52[i][1].section_52[ii])
        //     e = ex_world_12_00_56(temp_offset + (ii * 4), e, tempsectionsection_56[i][1].section_56[ii])
        // }
        // ;
    }

    ;g.debug ? ex_debug(o, "UPu2") : 0;
    return e

    function ex_world_12_00(o, e, x) {
        ex_type_entry_header(o, x.section_00[0])

        sf32(o + 32, x.f32_32)
        sf32(o + 36, x.f32_36)
        sf32(o + 40, x.f32_40)
        sf32(o + 44, x.f32_44)
        //amount?   su32(o +48, x.u32_48)
        //amount?   su32(o +60, x.u32_60)
        sf32(o + 68, x.f32_68)
        //?
        su16(o + 72, x.u16_72)
        //?
        su16(o + 74, x.u16_74)
        su8(o + 76, x.u8_76)
        sf32(o + 80, x.f32_80)
        su32(o + 116, x.u32_116)

        if (x.section_64.length) {
            su32(o + 60, x.section_64.length)
            su32(o + 64, e)
            g.oa.push(o + 64)
            let temp_offset = e
            e += divisible(x.section_64.length * 4, g.divisibility)
            for (let i = 0; i < x.section_64.length; i++) {
                e = ex_world_12_00_64(temp_offset + (i * 4), e, x.section_64[i])
            }
            ;
        }
        tempsectionsection.push([o, x]);
        if (x.section_52.length) {// su32(o + 48, x.section_52.length)
        // su32(o + 52, e  )
        // g.oa.push(o + 52)
        // let temp_offset = e
        // e += divisible(x.section_52.length * 4, 16)
        // for (let i = 0; i < x.section_52.length; i++) {
        //     e = ex_world_12_00_52(temp_offset + (i * 4), e, x.section_52[i])
        // }
        // ;
        }
        ;if (x.section_56.length) {// su32(o + 48, x.section_56.length)
        // su32(o + 56, e  )
        // g.oa.push(o + 56)
        // let temp_offset = e
        // e += divisible(x.section_56.length * 4, 16)
        // for (let i = 0; i < x.section_56.length; i++) {
        //     e = ex_world_12_00_56(temp_offset + (i * 4), e, x.section_56[i])
        // }
        // ;
        }
        ;g.debug ? ex_debug(o, "4[mB") : 0;
        return e
    }

    function ex_world_12_00_temp(i, e) {

        // su32(tempsectionsection[i][0] + 48, tempsectionsection[i][1].section_52.length)
        // su32(tempsectionsection[i][0] + 52, e  )
        // g.oa.push(tempsectionsection[i][0] + 52)

        ;if (tempsectionsection[i][1].section_52.length) {
            su32(tempsectionsection[i][0] + 48, tempsectionsection[i][1].section_52.length)
            su32(tempsectionsection[i][0] + 52, e)
            g.oa.push(tempsectionsection[i][0] + 52)
            let temp_offset = e
            e += divisible(tempsectionsection[i][1].section_52.length * 4, g.divisibility)
            for (let ii = 0; ii < tempsectionsection[i][1].section_52.length; ii++) {
                e = ex_world_12_00_52(temp_offset + (ii * 4), e, tempsectionsection[i][1].section_52[ii])
            }
            ;

        }

        ;if (tempsectionsection[i][1].section_56.length) {
            su32(tempsectionsection[i][0] + 48, tempsectionsection[i][1].section_56.length)
            su32(tempsectionsection[i][0] + 56, e)
            g.oa.push(tempsectionsection[i][0] + 56)
            let temp_offset = e
            e += divisible(tempsectionsection[i][1].section_56.length * 4, g.divisibility)
            for (let ii = 0; ii < tempsectionsection[i][1].section_56.length; ii++) {
                e = ex_world_12_00_56(temp_offset + (ii * 4), e, tempsectionsection[i][1].section_56[ii])
            }
            ;
        }

        return e

    }

}

function ex_world_12_00_64(o, e, x) {
    su32(o + 0, x.u32_00)
    //?

    g.debug ? ex_debug(o, "avV2") : 0;
    return e
}
function ex_world_12_00_52(o, e, x) {
    sf32(o + 0, x.f32_00)
    //?

    g.debug ? ex_debug(o, "lzPS") : 0;
    return e
}
function ex_world_12_00_56(o, e, x) {
    su32(o + 0, x.u32_00)
    //?

    g.debug ? ex_debug(o, "nX@v") : 0;
    return e
}
function ex_world_32(o, e, x) {

    if (x.unordered_gate_00) {
        g.oa.push(o + 0)
    }

    g.temp_world_offset_holder.push([x.unordered_gate_00, g.gate_array, ex_gate, g.unordered_ref.gate, o + 0, e, 'none']);

    g.debug ? ex_debug(o, "e=lK") : 0;
    return e
}
function ex_world_24(o, x) {
    let e = o + divisible(112, g.divisibility)
    //amount?   su32(o +00, x.u32_00)
    //amount?   su32(o +08, x.u32_08)

    if (x.section_04.length) {
        su32(o + 0, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 4, g.divisibility)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_world_24_04(temp_offset + (i * 4), e, x.section_04[i])
        }
        ;
    }
    ;if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 4, g.divisibility)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_world_24_12(temp_offset + (i * 4), e, x.section_12[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "]n4k") : 0;
    return e
}
function ex_world_24_04(o, e, x) {

    if (x.unordered_flag_00) {
        g.oa.push(o + 0)
    }

    g.temp_world_offset_holder.push([x.unordered_flag_00, g.flag_array, ex_flag, g.unordered_ref.flag, o + 0, e, 'none']);

    g.debug ? ex_debug(o, "WeH]") : 0;
    return e
}
function ex_world_24_12(o, e, x) {

    if (x.unordered_var_00) {
        g.oa.push(o + 0)
    }

    g.temp_world_offset_holder.push([x.unordered_var_00, g.var_array, ex_var, g.unordered_ref.var, o + 0, e, 'none']);

    g.debug ? ex_debug(o, "LEGR") : 0;
    return e
}
