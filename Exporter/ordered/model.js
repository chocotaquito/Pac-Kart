"use strict";
function dyn_model(offset, XFA) {
    let mid = g.m
    // idk
    let end_block = offset + 64

    su16(offset, XFA.magic)
    sf32(offset + 16, XFA.visibility.x1)
    sf32(offset + 20, XFA.visibility.y1)
    sf32(offset + 24, XFA.visibility.z1)
    sf32(offset + 28, XFA.visibility.w1)
    sf32(offset + 32, XFA.visibility.x2)
    sf32(offset + 36, XFA.visibility.y2)
    sf32(offset + 40, XFA.visibility.z2)
    sf32(offset + 44, XFA.visibility.w2)
    sf32(offset + 48, XFA.visibility.x3)
    sf32(offset + 52, XFA.visibility.y3)
    sf32(offset + 56, XFA.visibility.z3)
    sf32(offset + 60, XFA.visibility.w3)

    if (XFA.sections.length) {
        let temp_offset = end_block
        g.oa.push(offset + 4)
        su16(offset + 2, XFA.sections.length)
        su32(offset + 4, offset + 64 - mid)
        g.oa.push(offset + 12)
        end_block += divisible(XFA.sections.length * 8, 16)
        let render_offset = end_block
        end_block += divisible(XFA.sections.length * 4, 16)

        for (let i = 0; i < XFA.sections.length; i++) {
            end_block = dyn_model_04(temp_offset + (i * 8), XFA.sections[i], end_block)
        }

        su32(offset + 12, render_offset - mid)

        for (let i = 0; i < XFA.sections.length; i++) {
            sf32(render_offset + (i * 4), XFA.sections[i].render)
        }

        if (XFA.second_names.length) {
            let start_offset = end_block

            for (let i = 0; i < XFA.second_names.length; i++) {
                // if (i === XFA.second_names.length -1) {
                // end_block = dyn_string(end_block, XFA.second_names[i], mid, 1)
                // }else{
                end_block = dyn_string(end_block, XFA.second_names[i], mid, 1)

            }
            end_block += 1

            end_block = start_offset + divisible(end_block - start_offset, 16)

        }

        if (XFA.second_names.length === 0) {
            end_block += XFA.name_padding
        }

        end_block = ex_byte_alignment_testing(end_block)
        su32(offset + 8, end_block - mid)
        g.oa.push(offset + 8)

        end_block = dyn_string(end_block, XFA.name, mid)

        return end_block
        // end model

        function dyn_model_04(offset, XFA, end_block) {

            if (XFA.sub_section.length) {
                let temp_offset = end_block
                su32(offset + 0, XFA.sub_section.length)
                su32(offset + 4, end_block - mid)
                g.oa.push(offset + 4)
                end_block += divisible(XFA.sub_section.length * 4, 16)

                for (let i = 0; i < XFA.sub_section.length; i++) {
                    end_block = dyn_model_04_04(temp_offset + (i * 4), XFA.sub_section[i], end_block)
                }

            }
            return end_block

        }

        function dyn_model_04_04(offset, XFA, end_block) {

            su32(offset, end_block - mid)
            g.oa.push(offset)
            if (g.console === 'gamecube') {
                end_block = ex_GC_models_04_04_00(end_block, XFA)
            } else {
                end_block = dyn_model_04_04_00(end_block, XFA)
            }

            return end_block

            // let end_block = jump_offset + divisible(XFA.sub_section.length * 4, 16)
            // let sub_sub_section_end = divisible(XFA.sub_section.length * 4, 16) + offset

            // su32(offset, XFA.sub_section.length )
            // su32(offset + 4, jump_offset - mid )

            // for (let i = 0; i < XFA.sub_section.length; i++) {
            //     end_block = dyn_model_04_04_00(jump_offset + (i * 4), XFA.sub_section[i], sub_sub_section_end, end_block)
            // }

            // return end_block
        }

        function dyn_model_04_04_00(offset, XFA) {
            end_block = offset + 96

            su32(offset + 0, XFA.unknown_00)
            su32(offset + 8, XFA.unknown_08)
            su8(offset + 12, XFA.unknown_12)
            su8(offset + 13, XFA.unknown_13)
            su8(offset + 15, XFA.unknown_15)
            su32(offset + 16, XFA.unknown_16)
            su32(offset + 24, XFA.unknown_24)
            su32(offset + 28, XFA.unknown_28)
            su8(offset + 44, XFA.unknown_44)
            su8(offset + 45, XFA.unknown_45)
            su8(offset + 46, XFA.unknown_46)
            su8(offset + 47, XFA.unknown_47)
            su8(offset + 48, XFA.unknown_48)
            su8(offset + 49, XFA.unknown_49)
            su8(offset + 52, XFA.unknown_52)
            su8(offset + 53, XFA.unknown_53)
            su8(offset + 54, XFA.unknown_54)
            su8(offset + 55, XFA.unknown_55)
            su32(offset + 56, XFA.unknown_56)
            su32(offset + 60, XFA.unknown_60)
            su32(offset + 64, XFA.unknown_64)
            su32(offset + 88, XFA.unknown_88)

            if (XFA.texture !== -1) {
                ex_patch(offset + 40, g.texture_patch_array, XFA.texture)

                // su16(offset + 40, XFA.texture[0][1] )
                // // console.log(XFA.texture,XFA.texture[0],XFA.texture[0][1])
                // su16(offset + 42, 52428 )
                // g.texture_patch_array.push([offset + 40, XFA.texture[0][1], XFA.texture[0][2]])
            } else {
                su16(offset + 40, 65535)
            }
            if (XFA.animation !== -1) {
                su16(offset + 36, XFA.texture[0][1])
                // console.log(XFA.texture,XFA.texture[0],XFA.texture[0][1])
                su16(offset + 38, 52428)
                g.animation_patch_array.push([offset + 36, XFA.animation[0][1], XFA.animation[0][2]])
            }
            if (XFA.unknown_24_animation !== -1) {
                // su16(offset + 36, XFA.texture[0][1] )
                // console.log(XFA.texture,XFA.texture[0],XFA.texture[0][1])
                // su16(offset + 38, 52428 )
                g.animation_patch_array.push([offset + 24, XFA.unknown_24_animation[0][1], XFA.unknown_24_animation[0][2]])
            }

            // g.texture_patch_array.push([offset - mid, XFA.texture[0][1], XFA.texture[0][2]])
            // add to xfa

            if (XFA.v_array.length !== 0) {
                let temp_offset = end_block
                g.oa.push(offset + 68)
                su32(offset + 68, end_block - mid)
                end_block += divisible((XFA.v_array.byteLength), 16)

                new Uint8Array(dynamic_buffer).set(new Uint8Array(XFA.v_array), temp_offset)

                // for (let i = 0; i < XFA.v_array.byteLength / 4; i++) {
                //     sf32(temp_offset + (i * 4), new DataView(XFA.v_array).getFloat32(i * 4, g.endian))
                //     temp___ = temp_offset + (i * 4)
                // }

            }

            if (XFA.c_array.length !== 0) {
                let temp_offset = end_block
                g.oa.push(offset + 72)
                su32(offset + 72, end_block - mid)
                end_block += divisible((XFA.c_array.byteLength), 16)
                new Uint8Array(dynamic_buffer).set(new Uint8Array(XFA.c_array), temp_offset)

                // for (let i = 0; i < XFA.c_array.byteLength; i++) {
                //     su8(temp_offset + i, new DataView(XFA.c_array).getUint8(i, g.endian))
                // }

            }

            if (XFA.n_array.length !== 0) {
                let temp_offset = end_block
                g.oa.push(offset + 76)
                su32(offset + 76, end_block - mid)
                end_block += divisible((XFA.n_array.byteLength), 16)
                new Uint8Array(dynamic_buffer).set(new Uint8Array(XFA.n_array), temp_offset)

                // for (let i = 0; i < XFA.n_array.byteLength / 4; i++) {
                //     sf32(temp_offset + (i * 4), new DataView(XFA.n_array).getFloat32(i * 4, g.endian))
                // }

            }

            if (XFA.u_array.length !== 0) {
                let temp_offset = end_block
                g.oa.push(offset + 80)
                su32(offset + 80, end_block - mid)
                end_block += divisible((XFA.u_array.byteLength), 16)
                new Uint8Array(dynamic_buffer).set(new Uint8Array(XFA.u_array), temp_offset)

                // for (let i = 0; i < XFA.u_array.byteLength / 4; i++) {
                //     sf32(temp_offset + (i * 4), new DataView(XFA.u_array).getFloat32(i * 4, g.endian))
                // }

            }
            if (XFA.s_array.length !== 0) {
                let temp_offset = end_block
                g.oa.push(offset + 84)
                su32(offset + 84, end_block - mid)
                end_block += divisible((XFA.s_array.byteLength), 16)
                new Uint8Array(dynamic_buffer).set(new Uint8Array(XFA.s_array), temp_offset)

                // for (let i = 0; i < XFA.s_array.byteLength; i++) {
                //     su8(temp_offset + (i * 1), new DataView(XFA.s_array).getUint8(i, g.endian))
                // }

            }

            if (XFA.section_92.length) {
                g.oa.push(offset + 92)
                su32(offset + 92, end_block - mid)
                end_block = dyn_model_04_04_00_92(end_block, XFA.section_92[0])
            }

            ;g.debug ? ex_debug(offset, "MODL") : 0;

            return end_block
        }

        function dyn_model_04_04_00_92(offset, XFA) {
            let end_block = offset + 16

            su32(offset + 0, XFA.amount_00)

            if (XFA.section_12.length) {
                let temp_offset = end_block
                g.oa.push(offset + 12)
                su32(offset + 8, XFA.section_12.length)
                su32(offset + 12, end_block - mid)

                end_block += divisible(XFA.section_12.length, 16)
                for (let i = 0; i < XFA.section_12.length; i++) {
                    su8(temp_offset + i, XFA.section_12[i].unknown_00)
                }

            }

            return end_block
        }

        function ex_GC_models_04_04_00(o, x) {
            let e = o + 96
            su32(o + 0, x.u32_00)
            su32(o + 8, x.u32_08)
            su8(o + 12, x.u8_12)
            su8(o + 13, x.u8_13)
            su8(o + 15, x.u8_15)
            su32(o + 16, x.u32_16)
            su32(o + 24, x.u32_24)
            su32(o + 28, x.u32_28)
            ex_patch(o + 40, g.texture_patch_array, x.texture_40)
            su8(o + 44, x.u8_44)
            su8(o + 45, x.u8_45)
            su8(o + 46, x.u8_46)
            su8(o + 47, x.u8_47)
            su8(o + 48, x.u8_48)
            su8(o + 49, x.u8_49)
            su8(o + 52, x.u8_52)
            su8(o + 53, x.u8_53)
            su8(o + 54, x.u8_54)
            su8(o + 55, x.u8_55)
            su32(o + 56, x.u32_56)
            //amount?   su16(o +84, x.u16_84)
            su16(o + 86, x.u16_86);
            e = ex_s_offset(o + 80, e, ex_GC_models_04_04_00_80, x.section_80, 'down');

            e = ex_s_offset(o + 60, e, ex_GC_models_04_04_00_60, x.section_60, 'down');
            e = ex_s_offset(o + 64, e, ex_GC_models_04_04_00_64, x.section_64, 'down');
            e = ex_s_offset(o + 68, e, ex_GC_models_04_04_00_68, x.section_68, 'down');
            e = ex_s_offset(o + 72, e, ex_GC_models_04_04_00_72, x.section_72, 'down');

            ;if (x.section_76.length) {
                su16(o + 84, x.section_76.length)
                su32(o + 76, e)
                g.oa.push(o + 76)
                let temp_offset = e
                e += divisible(x.section_76.length * 24, 16)
                for (let i = 0; i < x.section_76.length; i++) {
                    e = ex_GC_models_04_04_00_76(temp_offset + (i * 24), e, x.section_76[i])
                }
                ;
            }

            g.debug ? ex_debug(o, "q1hz") : 0;
            return e
        }

        function ex_GC_models_04_04_00_80(o, x) {
            let e = o + 16
            su32(o + 8, x.u32_08)

            e = ex_s_offset(o + 4, e, ex_GC_models_04_04_00_80_04, x.section_04, 'down');

            if (x.section_00.length) {
                su32(o + 8, x.section_00.length)
                su32(o + 0, e)
                g.oa.push(o + 0)
                let temp_offset = e
                e += divisible(x.section_00.length * 32, 16)
                for (let i = 0; i < x.section_00.length; i++) {
                    e = ex_GC_models_04_04_00_80_00(temp_offset + (i * 32), e, x.section_00[i])
                }
                ;
            }
            ;g.debug ? ex_debug(o, "Oe30") : 0;
            return e
        }

        function ex_GC_models_04_04_00_80_04(o, x) {
            new Uint8Array(dynamic_buffer).set(new Uint8Array(x.temp_buffer), o)

            // for (let i = 0; i < x.temp_buffer.byteLength; i++) {
            //     su8(o + i, new DataView(x.temp_buffer).getUint8(i))
            // }

            return x.temp_buffer.byteLength + o

            g.debug ? ex_debug(o, "?7i;") : 0;
            return e
        }

        function ex_GC_models_04_04_00_80_00(o, e, x) {
            sf32(o + 0, x.f32_00)
            sf32(o + 4, x.f32_04)
            sf32(o + 8, x.f32_08)
            sf32(o + 12, x.f32_12)
            sf32(o + 16, x.f32_16)
            sf32(o + 20, x.f32_20)
            su16(o + 24, x.u16_24)
            su16(o + 26, x.u16_26)
            su8(o + 29, x.u8_29)
            su8(o + 30, x.u8_30)
            su8(o + 31, x.u8_31)

            g.debug ? ex_debug(o, "Z2tc") : 0;
            return e
        }
        function ex_GC_models_04_04_00_60(o, x) {
            new Uint8Array(dynamic_buffer).set(new Uint8Array(x.temp_buffer), o)

            // for (let i = 0; i < x.temp_buffer.byteLength; i++) {
            //     su8(o + i, new DataView(x.temp_buffer).getUint8(i))
            // }

            return x.temp_buffer.byteLength + o

            g.debug ? ex_debug(o, "dfnV") : 0;
            return e
        }
        function ex_GC_models_04_04_00_64(o, x) {
            new Uint8Array(dynamic_buffer).set(new Uint8Array(x.temp_buffer), o)

            // for (let i = 0; i < x.temp_buffer.byteLength; i++) {
            //     su8(o + i, new DataView(x.temp_buffer).getUint8(i))
            // }

            return x.temp_buffer.byteLength + o

            g.debug ? ex_debug(o, "XEyN") : 0;
            return e
        }
        function ex_GC_models_04_04_00_68(o, x) {
            new Uint8Array(dynamic_buffer).set(new Uint8Array(x.temp_buffer), o)

            // for (let i = 0; i < x.temp_buffer.byteLength; i++) {
            //     su8(o + i, new DataView(x.temp_buffer).getUint8(i))
            // }

            return x.temp_buffer.byteLength + o

            g.debug ? ex_debug(o, "6h2p") : 0;
            return e
        }
        function ex_GC_models_04_04_00_72(o, x) {
            new Uint8Array(dynamic_buffer).set(new Uint8Array(x.temp_buffer), o)

            // for (let i = 0; i < x.temp_buffer.byteLength; i++) {
            //     su8(o + i, new DataView(x.temp_buffer).getUint8(i))
            // }

            return x.temp_buffer.byteLength + o

            g.debug ? ex_debug(o, "FJ<O") : 0;
            return e
        }
        function ex_GC_models_04_04_00_76(o, e, x) {
            su32(o + 4, x.u32_04)
            su8(o + 20, x.u8_20)

            if (x.section_08.length) {
                su32(o + 8, e)
                g.oa.push(o + 8)
                let temp_offset = e
                e += divisible(x.section_08.length * 1, 16)
                for (let i = 0; i < x.section_08.length; i++) {
                    e = ex_GC_models_04_04_00_76_08(temp_offset + (i * 1), e, x.section_08[i])
                }
                ;
            }
            ;e = ex_s_offset(o + 12, e, ex_GC_models_04_04_00_76_12, x.section_12, 'down');
            ;e = ex_s_offset(o + 16, e, ex_GC_models_04_04_00_76_16, x.section_16, 'down');
            // if (x.section_16.length) {
            //     su32(o + 16, e  )
            //     g.oa.push(o + 16)
            //     let temp_offset = e
            //     e += x.section_16.length
            //     for (let i = 0; i < x.section_16.length; i++) {
            //         e = ex_GC_models_04_04_00_76_16(temp_offset + (i * NaN), e, x.section_16[i])
            //     }
            //     ;
            // }
            ;g.debug ? ex_debug(o, "Pa1o") : 0;
            return e
        }
        function ex_GC_models_04_04_00_76_08(o, e, x) {
            su8(o + 0, x.u8_00)

            g.debug ? ex_debug(o, "QBm4") : 0;
            return e
        }
        function ex_GC_models_04_04_00_76_12(o, x) {
            new Uint8Array(dynamic_buffer).set(new Uint8Array(x.temp_buffer), o)

            // for (let i = 0; i < x.temp_buffer.byteLength; i++) {
            //     su8(o + i, new DataView(x.temp_buffer).getUint8(i))
            // }

            return x.temp_buffer.byteLength + o

            g.debug ? ex_debug(o, "MVXS") : 0;
            return e
        }
        function ex_GC_models_04_04_00_76_16(o, x) {
            new Uint8Array(dynamic_buffer).set(new Uint8Array(x.temp_buffer), o)

            // for (let i = 0; i < x.temp_buffer.byteLength; i++) {
            //     su8(o + i, new DataView(x.temp_buffer).getUint8(i))
            // }

            return x.temp_buffer.byteLength + o

            g.debug ? ex_debug(o, "sqK;") : 0;
            return e
        }
        function ex_texture_animation_section(o, e, x) {

            e = ex_ml(x.unordered_texture_anim_1_00, g.texture_anim_1_array, ex_texture_anim_1, g.unordered_ref.texture_anim_1, o + 0, e, 'down');

            g.debug ? ex_debug(o, "f>0G") : 0;
            return e
        }

    }
}

// function ex_models_old(o, x) {
//     let e = o + 64
//     su16(o + 0, x.u16_00)
//     su16(o + 2, x.u16_02)
//     sf32(o + 16, x.f32_16)
//     sf32(o + 20, x.f32_20)
//     sf32(o + 24, x.f32_24)
//     sf32(o + 28, x.f32_28)
//     sf32(o + 32, x.f32_32)
//     sf32(o + 36, x.f32_36)
//     sf32(o + 40, x.f32_40)
//     sf32(o + 44, x.f32_44)
//     sf32(o + 48, x.f32_48)
//     sf32(o + 52, x.f32_52)
//     sf32(o + 56, x.f32_56)
//     sf32(o + 60, x.f32_60)

//     if (XFA.sections.length) {
//         let temp_offset = end_block
//         g.oa.push(offset + 4 - mid)
//         su16(offset + 2, XFA.sections.length)
//         su32(offset + 4, offset + 64 - mid)
//         g.oa.push(offset + 12 - mid)
//         end_block += divisible(XFA.sections.length * 8, 16)
//         let render_offset = end_block
//         end_block += divisible(XFA.sections.length * 4, 16)

//         for (let i = 0; i < XFA.sections.length; i++) {
//             end_block = dyn_model_04(temp_offset + (i * 8), XFA.sections[i], end_block)
//         }

//         su32(offset + 12, render_offset - mid)

//         for (let i = 0; i < XFA.sections.length; i++) {
//             sf32(render_offset + (i * 4), XFA.sections[i].render, g.endian)
//         }

//         // if (end_block === 252376) {
//         //     end_block += 16
//         // }
//         // if (end_block === 332328) {
//         //     end_block += 16
//         // }
//         // if (end_block === 351320) {
//         //     end_block += 16
//         // }
//         // if (end_block === 352184) {
//         //     end_block += 16
//         // }
//         // if (end_block === 355896) {
//         //     end_block += 16
//         // }
//         // if (end_block === 363128) {
//         //     end_block += 16
//         // }
//         // if (end_block === 374648) {
//         //     end_block += 16
//         // }
//         // if (end_block === 380568) {
//         //     end_block += 16
//         // }
//         // if (end_block === 404504) {
//         //     end_block += 16
//         // }
//         // if (end_block === 416024) {
//         //     end_block += 16
//         // }

//         if (XFA.second_names.length) {
//             let start_offset = end_block

//             for (let i = 0; i < XFA.second_names.length; i++) {
//                 // if (i === XFA.second_names.length -1) {
//                 // end_block = dyn_string(end_block, XFA.second_names[i], mid, 1)
//                 // }else{
//                 end_block = dyn_string(end_block, XFA.second_names[i], mid, 1)

//             }
//             end_block += 1

//             end_block = start_offset + divisible(end_block - start_offset, 16)

//         } else {// if (end_block === 1378600) {
//         // } else if(end_block === 2884504) {
//         // } else if(end_block === 3532568) {
//         // } else if(end_block === 3515752) {
//         // } else if(end_block === 3536360) {
//         // } else if(end_block === 3553176) {
//         // } else if(end_block === 5971928) {
//         // } else if(end_block === 6579176) {
//         // } else if(end_block === 6581000) {
//         // } else if(end_block === 6587784) {
//         // } else if(end_block === 6589288) {
//         // } else if(end_block === 7103848) {
//         // }else{
//         //     end_block += 16
//         // }

//         }

//         su32(offset + 8, end_block - mid)
//         g.oa.push(offset + 8 - mid)
//         end_block = dyn_string(end_block, XFA.name, mid)
//     }

//     return end_block
//     // end model

//     function dyn_model_04(offset, XFA, end_block) {

//         if (XFA.sub_section.length) {
//             let temp_offset = end_block
//             su32(offset + 0, XFA.sub_section.length)
//             su32(offset + 4, end_block - mid)
//             g.oa.push(offset + 4 - mid)
//             end_block += divisible(XFA.sub_section.length * 4, 16)

//             for (let i = 0; i < XFA.sub_section.length; i++) {
//                 end_block = dyn_model_04_04(temp_offset + (i * 4), XFA.sub_section[i], end_block)
//             }

//         }
//         return end_block

//     }

//     function dyn_model_04_04(offset, XFA, end_block) {

//         su32(offset, end_block - mid)
//         g.oa.push(offset - mid)
//         end_block = dyn_model_04_04_00(end_block, XFA)

//         return end_block

//         // let end_block = jump_offset + divisible(XFA.sub_section.length * 4, 16)
//         // let sub_sub_section_end = divisible(XFA.sub_section.length * 4, 16) + offset

//         // su32(offset, XFA.sub_section.length )
//         // su32(offset + 4, jump_offset - mid )

//         // for (let i = 0; i < XFA.sub_section.length; i++) {
//         //     end_block = dyn_model_04_04_00(jump_offset + (i * 4), XFA.sub_section[i], sub_sub_section_end, end_block)
//         // }

//         // return end_block
//     }

//     function dyn_model_04_04_00(offset, XFA) {
//         end_block = offset + 96

//         su32(offset + 0, XFA.unknown_00)
//         su32(offset + 8, XFA.unknown_08)
//         su8(offset + 12, XFA.unknown_12)
//         su8(offset + 13, XFA.unknown_13)
//         su8(offset + 15, XFA.unknown_15)
//         su32(offset + 16, XFA.unknown_16)
//         su32(offset + 24, XFA.unknown_24)
//         su32(offset + 28, XFA.unknown_28)
//         su8(offset + 44, XFA.unknown_44)
//         su8(offset + 45, XFA.unknown_45)
//         su8(offset + 46, XFA.unknown_46)
//         su8(offset + 47, XFA.unknown_47)
//         su8(offset + 49, XFA.unknown_49)
//         su8(offset + 52, XFA.unknown_52)
//         su8(offset + 53, XFA.unknown_53)
//         su8(offset + 54, XFA.unknown_54)
//         su8(offset + 55, XFA.unknown_55)
//         su32(offset + 56, XFA.unknown_56)
//         su32(offset + 60, XFA.unknown_60)
//         su32(offset + 64, XFA.unknown_64)
//         su32(offset + 88, XFA.unknown_88)

//         if (XFA.texture !== -1) {

//             su16(offset + 40, XFA.texture[0][1])
//             // console.log(XFA.texture,XFA.texture[0],XFA.texture[0][1])
//             su16(offset + 42, 52428)
//             g.texture_patch_array.push([offset + 40 - mid, XFA.texture[0][1], XFA.texture[0][2]])
//         } else {
//             su16(offset + 40, 65535)
//         }
//         if (XFA.animation !== -1) {
//             su16(offset + 36, XFA.texture[0][1])
//             // console.log(XFA.texture,XFA.texture[0],XFA.texture[0][1])
//             su16(offset + 38, 52428)
//             g.animation_patch_array.push([offset + 36 - mid, XFA.animation[0][1], XFA.animation[0][2]])
//         }
//         if (XFA.unknown_24_animation !== -1) {
//             // su16(offset + 36, XFA.texture[0][1] )
//             // console.log(XFA.texture,XFA.texture[0],XFA.texture[0][1])
//             // su16(offset + 38, 52428 )
//             g.animation_patch_array.push([offset + 24 - mid, XFA.unknown_24_animation[0][1], XFA.unknown_24_animation[0][2]])
//         }

//         // g.texture_patch_array.push([offset - mid, XFA.texture[0][1], XFA.texture[0][2]])
//         // add to xfa

//         if (XFA.v_array.length !== 0) {
//             let temp_offset = end_block
//             g.oa.push(offset + 68 - mid)
//             su32(offset + 68, end_block - mid)
//             end_block += divisible((XFA.v_array.byteLength), 16)
//             for (let i = 0; i < XFA.v_array.byteLength / 4; i++) {
//                 sf32(temp_offset + (i * 4), new DataView(XFA.v_array).getFloat32(i * 4))
//                 temp___ = temp_offset + (i * 4)
//             }

//         }

//         if (XFA.c_array.length !== 0) {
//             let temp_offset = end_block
//             g.oa.push(offset + 72 - mid)
//             su32(offset + 72, end_block - mid)
//             end_block += divisible((XFA.c_array.byteLength), 16)
//             for (let i = 0; i < XFA.c_array.byteLength; i++) {
//                 su8(temp_offset + i, new DataView(XFA.c_array).getUint8(i))
//             }

//         }

//         if (XFA.n_array.length !== 0) {
//             let temp_offset = end_block
//             g.oa.push(offset + 76 - mid)
//             su32(offset + 76, end_block - mid)
//             end_block += divisible((XFA.n_array.byteLength), 16)
//             for (let i = 0; i < XFA.n_array.byteLength / 4; i++) {
//                 sf32(temp_offset + (i * 4), new DataView(XFA.n_array).getFloat32(i * 4))
//             }

//         }

//         if (XFA.u_array.length !== 0) {
//             let temp_offset = end_block
//             g.oa.push(offset + 80 - mid)
//             su32(offset + 80, end_block - mid)
//             end_block += divisible((XFA.u_array.byteLength), 16)
//             for (let i = 0; i < XFA.u_array.byteLength / 4; i++) {
//                 sf32(temp_offset + (i * 4), new DataView(XFA.u_array).getFloat32(i * 4))
//             }

//         }
//         if (XFA.s_array.length !== 0) {
//             let temp_offset = end_block
//             g.oa.push(offset + 84 - mid)
//             su32(offset + 84, end_block - mid)
//             end_block += divisible((XFA.s_array.byteLength), 16)
//             for (let i = 0; i < XFA.s_array.byteLength; i++) {
//                 su8(temp_offset + (i * 1), new DataView(XFA.s_array).getUint8(i))
//             }

//         }

//         if (XFA.section_92.length) {
//             g.oa.push(offset + 92 - mid)
//             su32(offset + 92, end_block - mid)
//             end_block = dyn_model_04_04_00_92(end_block, XFA.section_92[0])
//         }

//         return end_block
//     }

//     function dyn_model_04_04_00_92(offset, XFA) {
//         let end_block = offset + 16

//         su32(offset + 0, XFA.amount_00)

//         if (XFA.section_12.length) {
//             let temp_offset = end_block
//             g.oa.push(offset + 12 - mid)
//             su32(offset + 8, XFA.section_12.length)
//             su32(offset + 12, end_block - mid)

//             end_block += divisible(XFA.section_12.length, 16)
//             for (let i = 0; i < XFA.section_12.length; i++) {
//                 su8(temp_offset + i, XFA.section_12[i].unknown_00)
//             }

//         }

//         return end_block
//     }

//     g.debug ? ex_debug(o, "DO;O") : 0;

//     return e

// }

function ex_models(o, x) {
    let e = o + 64
    let render_o = o
    su16(o + 0, x.u16_00)
    //amount?   su16(o +02, x.u16_02)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)
    sf32(o + 36, x.f32_36)
    sf32(o + 40, x.f32_40)
    sf32(o + 44, x.f32_44)
    sf32(o + 48, x.f32_48)
    sf32(o + 52, x.f32_52)
    sf32(o + 56, x.f32_56)
    sf32(o + 60, x.f32_60)

    if (x.section_04.length) {
        su16(o + 2, x.section_04.length)
        su32(o + 4, e)
        g.oa.push(o + 4)
        let temp_offset = e
        e += divisible(x.section_04.length * 8, 16)
        for (let i = 0; i < x.section_04.length; i++) {
            e = ex_models_04(temp_offset + (i * 8), e, x.section_04[i], i)
        }
        ;
    }
    ;e = ex_string(o + 8, e, x.section_08)
    if (x.section_12.length) {
        su16(o + 2, x.section_12.length)
        su32(o + 12, render_o)
        g.oa.push(o + 12)
        let temp_offset = render_o
        for (let i = 0; i < x.section_12.length; i++) {
            render_o = ex_models_12(temp_offset + (i * 4), render_o, x.section_12[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "vL>O") : 0;
    return e

    function ex_models_04(o, e, x, i) {
        //amount?   su32(o +00, x.u32_00)
        // calculate render
        let render_offset = 0
        if (i === 0) {
            render_offset = divisible(x.section_04.length * 4, 16)
            render_o = o + render_offset
        }

        if (x.section_04.length) {
            su32(o + 0, x.section_04.length)
            su32(o + 4, e + render_offset)
            g.oa.push(o + 4)
            let temp_offset = e
            e += divisible(x.section_04.length * 4, 16) + render_offset
            for (let i = 0; i < x.section_04.length; i++) {
                e = ex_models_04_04(temp_offset + (i * 4), e, x.section_04[i])
            }
            ;
        }
        ;g.debug ? ex_debug(o, "8t?7") : 0;
        return e
    }
}

function ex_models_12(o, e, x) {
    sf32(o + 0, x.f32_00)

    g.debug ? ex_debug(o, "YdA;") : 0;
    return e
}
function ex_models_04_04(o, e, x) {

    e = ex_s_offset(o + 0, e, ex_models_04_04_00, x.section_00, 'down');

    g.debug ? ex_debug(o, "FCg6") : 0;
    return e
}
function ex_models_04_04_00(o, x) {
    let e = o + 96
    su32(o + 0, x.u32_00)
    su32(o + 8, x.u32_08)
    su8(o + 12, x.u8_12)
    su8(o + 13, x.u8_13)
    su8(o + 15, x.u8_15)
    su32(o + 16, x.u32_16)
    su32(o + 24, x.u32_24)
    su32(o + 28, x.u32_28)
    ex_patch(o + 36, g.animation_patch_array, x.animation_36)
    ex_patch(o + 40, g.texture_patch_array, x.texture_40)
    su8(o + 44, x.u8_44)
    su8(o + 45, x.u8_45)
    su8(o + 46, x.u8_46)
    su8(o + 47, x.u8_47)
    su8(o + 49, x.u8_49)
    su8(o + 52, x.u8_52)
    su8(o + 53, x.u8_53)
    su8(o + 54, x.u8_54)
    su8(o + 55, x.u8_55)
    //amount?   su32(o +56, x.u32_56)
    su32(o + 60, x.u32_60)
    su32(o + 64, x.u32_64)
    su32(o + 88, x.u32_88)

    if (x.section_68.length) {
        // su32(o + 56, x.section_68.length)
        su32(o + 68, e)
        g.oa.push(o + 68)
        let temp_offset = e
        e += divisible(x.section_68.length * 36, 16)
        for (let i = 0; i < x.section_68.length; i++) {
            e = ex_models_04_04_00_68(temp_offset + (i * 36), e, x.section_68[i])
        }
        ;
    }
    ;if (x.section_72.length) {
        su32(o + 56, x.section_72.length)
        su32(o + 72, e)
        g.oa.push(o + 72)
        let temp_offset = e
        e += divisible(x.section_72.length * 4, 16)
        for (let i = 0; i < x.section_72.length; i++) {
            e = ex_models_04_04_00_72(temp_offset + (i * 4), e, x.section_72[i])
        }
        ;
    }
    ;if (x.section_76.length) {
        // su32(o + 56, x.section_76.length)
        su32(o + 76, e)
        g.oa.push(o + 76)
        let temp_offset = e
        e += divisible(x.section_76.length * 12, 16)
        for (let i = 0; i < x.section_76.length; i++) {
            e = ex_models_04_04_00_76(temp_offset + (i * 12), e, x.section_76[i])
        }
        ;
    }
    ;if (x.section_80.length) {
        // su32(o + 56, x.section_80.length)
        su32(o + 80, e)
        g.oa.push(o + 80)
        let temp_offset = e
        e += divisible(x.section_80.length * 8, 16)
        for (let i = 0; i < x.section_80.length; i++) {
            e = ex_models_04_04_00_80(temp_offset + (i * 8), e, x.section_80[i])
        }
        ;
    }
    ;if (x.section_84.length) {
        // su32(o + 56, x.section_84.length)
        su32(o + 84, e)
        g.oa.push(o + 84)
        let temp_offset = e
        e += divisible(x.section_84.length * 1, 16)
        for (let i = 0; i < x.section_84.length; i++) {
            e = ex_models_04_04_00_84(temp_offset + (i * 1), e, x.section_84[i])
        }
        ;
    }
    ;e = ex_s_offset(o + 92, e, ex_models_04_04_00_92, x.section_92, 'down');

    g.debug ? ex_debug(o, "b9Et") : 0;
    return e
}
function ex_models_04_04_00_68(o, e, x) {
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)
    sf32(o + 12, x.f32_12)
    sf32(o + 16, x.f32_16)
    sf32(o + 20, x.f32_20)
    sf32(o + 24, x.f32_24)
    sf32(o + 28, x.f32_28)
    sf32(o + 32, x.f32_32)

    g.debug ? ex_debug(o, "loJ5") : 0;
    return e
}
function ex_models_04_04_00_72(o, e, x) {
    su8(o + 0, x.u8_00)
    su8(o + 1, x.u8_01)
    su8(o + 2, x.u8_02)
    su8(o + 3, x.u8_03)

    g.debug ? ex_debug(o, "W5eQ") : 0;
    return e
}
function ex_models_04_04_00_76(o, e, x) {
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)
    sf32(o + 8, x.f32_08)

    g.debug ? ex_debug(o, "vcdi") : 0;
    return e
}
function ex_models_04_04_00_80(o, e, x) {
    sf32(o + 0, x.f32_00)
    sf32(o + 4, x.f32_04)

    g.debug ? ex_debug(o, "y3Em") : 0;
    return e
}
function ex_models_04_04_00_84(o, e, x) {
    su8(o + 0, x.u8_00)

    g.debug ? ex_debug(o, "ZXhq") : 0;
    return e
}
function ex_models_04_04_00_92(o, x) {
    let e = o + 16
    su32(o + 0, x.u32_00)
    //amount?   su32(o +08, x.u32_08)

    if (x.section_12.length) {
        su32(o + 8, x.section_12.length)
        su32(o + 12, e)
        g.oa.push(o + 12)
        let temp_offset = e
        e += divisible(x.section_12.length * 1, 16)
        for (let i = 0; i < x.section_12.length; i++) {
            e = ex_models_04_04_00_92_12(temp_offset + (i * 1), e, x.section_12[i])
        }
        ;
    }
    ;g.debug ? ex_debug(o, "=vXT") : 0;
    return e
}
function ex_models_04_04_00_92_12(o, e, x) {
    su8(o + 0, x.u8_00)

    g.debug ? ex_debug(o, "LSXh") : 0;
    return e
}
