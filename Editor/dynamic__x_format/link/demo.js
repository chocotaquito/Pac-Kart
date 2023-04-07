function load_x_d_link_demo(id, outer_id) {
    TXFA = Object.byString(XFA, id);

    let html = `
<div style="display:inline-block;width:95%;padding:5px;">
   
   <div style='height:23%'>Demo Settings
      <div class='save_records_boarder'>
         <table style='width:100%;' >
            <tbody>
               <tr>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Demo Timer:</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA[0].unknown_1}" data-outer_xfa="${id}[0]"  data-inner_xfa="unknown_1" data-type="u32">
                  </td>
                  <td style="width:10%;white-space:nowrap;" class='no_border'>Unknown:</td>
                  <td class='no_border'>
                     <input style="width:100%" type='text' value="${TXFA[0].unknown_0}" data-outer_xfa="${id}[0]" data-inner_xfa="unknown_0" data-type="u32">
                  </td>
               </tr>  
            </tbody>
         </table>   
      </div>
   </div>
   <div style="display:flex;text-align:center;" class='save_records_boarder' data-type="[]" data-xfa='${id}'>
             <span class='plus_button noselect' style='flex:1;width:50%;color:#959595;font-size:150%;border-right:1px solid;' id='new_entry'>+ Sub Group</span>
             </div>
`
    document.getElementById("file_editor").innerHTML = html
    document.getElementById("_2nd_data_bar").innerHTML = '<a data-is_active="false" class="data_bar_options" id="demo_splice">X</a>'

    let input_field = file_editor.getElementsByTagName('INPUT')
    for (let i = 0; i < input_field.length; i++) {
        input_field[i].addEventListener('change', dyn_update_input)
    }

    document.getElementById("new_entry").addEventListener("click", generate_sub_group);
    document.getElementById("demo_splice").addEventListener('click', delete_demo)

    function generate_sub_group() {
        let xid = gen_id()

        TXFA[0].link_array[0].push({
            id: xid,
            interface: [],
            loading: ['Blank', 0],
            name: ['Blank'],
            save: [],
            unknown: []
        })
        outer_html = document.getElementsByClassName("file_is_highlighted")[0].parentElement
        let html = ''

        for (let i = outer_html.children.length - 1; i > 2; i--) {

            outer_html.children[i].remove()
        }
        if (TXFA.length === 0) {
            alert('broke how TXFA.length load_x_d_link_demo')
        } else {
            outer_html.children[0].className = 'file_arrow'
            for (let i = 0; i < TXFA[0].link_array[0].length; i++) {
                html += dynamic__link_main_sub_group(TXFA[0].link_array[0][i], i, TXFA[0].link_array[0][i].id)
            }
            outer_html.innerHTML += html
            x_addEventListener_file_viewer(outer_html)

            outer_html.children[0].className = 'file_arrow'
            outer_html.children[0].click()
            if (outer_html.children[0].innerText === '→') {
                outer_html.children[0].click()
            }

        }
        file_viewer.focus()
    }

    function delete_demo() {
        TXFA[0] = null
        let position = document.getElementsByClassName("file_is_highlighted")[0]

        let temp = {
            key: 'ArrowUp'
        }
        file_move_with_key(temp, true)
        position.parentElement.remove()

        temp_xfa = Object.byString(XFA, outer_id);
        if (temp_xfa.section_main.length !== 0 || temp_xfa.section_intro.length !== 0 || temp_xfa.section_demo[0] !== null) {} else {
            position = document.getElementsByClassName("file_is_highlighted")[0].parentElement.children[0].className = 'no_arrow'
        }

        file_viewer.focus()

    }

}