
$(document).ready(() => {
    head_name_util()
    general_utils();
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

let print_rubberband_text = (text) => {
    let ret_val = '';
    
    _.map(text).forEach(c => {
        ret_val += `<span class="bounce-on-hover animated">${c}</span>`
    })

    return ret_val;
}

let general_utils = () => {
    // smooth scrolling for nav links
    $('.head-menu-wrap a').smoothScroll();

    let about_text = print_rubberband_text('About Me');
    $('#about-text').html(about_text);

    $('.bounce-on-hover').hover(function() {
        $(this).addClass('infinite rubberBand');
        window.setTimeout(() => {
            $(this).removeClass('infinite rubberBand')
        }, 1000)
    })
}