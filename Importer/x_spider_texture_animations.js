function get_texture_animations(offset, XFA,anim_i) {
    XFA.push({
        id: gen_id(),
        pattern: [],
        color: [],
        translation: [],
    })

    let anim_offset = u32(offset, is_little_endian) + offset_mid

    get_pattern_sequence(u32(anim_offset + 4, is_little_endian) + offset_mid, XFA[anim_i].pattern)

    for (let i = 0; i < u32(anim_offset + 8, is_little_endian); i++) {
        get_color_sequence(u32(anim_offset + 12, is_little_endian) + offset_mid + (i * 12), XFA[anim_i].color)
    }
    for (let i = 0; i < u32(anim_offset + 16, is_little_endian); i++) {
        get_translation_sequence(u32(anim_offset + 20, is_little_endian) + offset_mid + (i * 16), XFA[anim_i].translation)
    }

    console.log(anim_offset, XFA, 'XFA animations ????')
    console.log(offset_mid, 'offset_mid')

    function get_pattern_sequence(offset, XFA) {

        XFA.push({
            textures: [],
            unknown: u32(offset + 8, is_little_endian),
            time: u32(offset + 20, is_little_endian)

        })

        let pattern_offset = u32(offset + 4, is_little_endian) + offset_mid
        for (let i = 0; i < u32(offset, is_little_endian); i++) {
            get_pattern_sequence_2(pattern_offset + (i * 4), XFA[0].textures, i)
        }

        function get_pattern_sequence_2(offset, XFA, i) {

            XFA.push(u16(0, is_little_endian))

            let patch_array = get_patch_offset_index(texture_patch, offset - offset_mid)
            if (patch_array != -1) {
                XFA[i] = patch_array
            }

        }

    }
    function get_color_sequence(offset, XFA) {

        XFA.push({
            color: {
                R: u8(offset),
                G: u8(offset + 1),
                B: u8(offset + 2),
                A: u8(offset + 3),
            },
            unknown: u32(offset + 4, is_little_endian),
            time: f32(offset + 8, is_little_endian)

        })
    }
    function get_translation_sequence(offset, XFA) {

        XFA.push({
            x: f32(offset + 0, is_little_endian),
            y: f32(offset + 4, is_little_endian),
            unknown: u32(offset + 8, is_little_endian),
            time: f32(offset + 12, is_little_endian)

        })
    }

    
}