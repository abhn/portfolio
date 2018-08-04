
$(document).ready(() => {
    head_name_util()
})

let head_name_util = () => {
    const F_NAME = "Abhishek"
    const L_NAME = "\xa0Nagekar"

    f_name_html = ''
    l_name_html = ''
    
    _.map(F_NAME).forEach(c => {
        f_name_html += `<span class="head-title animated">${c}</span>`
    })
    
    _.map(L_NAME).forEach(c => {
        l_name_html += `<span class="head-title animated">${c}</span>`
    })

    $('#head-name').html(`
        <div class="head-title-split fname">${f_name_html}</div><div class="head-title-split lname">${l_name_html}</div>
    `);
    
    $('.head-title').hover(function() {
        $(this).addClass('infinite rubberBand');
        window.setTimeout(() => {
            $(this).removeClass('infinite rubberBand')
        }, 1000)
    })
}

