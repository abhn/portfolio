
$(document).ready(() => {
    head_name_util()
})

let head_name_util = () => {
    const NAME = "Abhishek Nagekar"
    name_html = ''
    _.map(NAME).forEach(c => {
        if(c == ' ') c = '&nbsp;' 
        name_html += `<span class="head-title animated">${c}</span>`
    })
    
    $('#head-name').html(name_html)
    
    $('.head-title').hover(function() {
        $(this).addClass('infinite rubberBand');
        window.setTimeout(() => {
            $(this).removeClass('infinite rubberBand')
        }, 1000)
    })
}

