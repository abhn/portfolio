
$(document).ready(() => {
    head_name_util()
    general_utils();
    rss_feeds();
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
    $('.extra-link a').smoothScroll();

    let about_text = print_rubberband_text('About\xa0Me');
    $('#about-text').html(about_text);

    let professional_experience = print_rubberband_text('Professional\xa0Experience');
    $('#experience-text').html(professional_experience);

    let featured_projects = print_rubberband_text('Featured\xa0Projects');
    $('#featured-projects-text').html(featured_projects);

    let skills = print_rubberband_text('Skills');
    $('#skills-text').html(skills);

    let recent_blog_posts = print_rubberband_text('Recent\xa0Blog\xa0Posts');
    $('#recent-posts-text').html(recent_blog_posts);

    let chat = print_rubberband_text('Let\s\xa0Chat');
    $('#chat-text').html(chat);

    $('.bounce-on-hover').hover(function() {
        let class_name = 'infinite rubberBand';
        $(this).addClass(class_name);
        window.setTimeout(() => {
            $(this).removeClass(class_name)
        }, 1000)
    })

    $('.skill-grid-item').hover(function() {
        let class_name = 'animated infinite pulse'
        $(this).addClass(class_name);
        window.setTimeout(() => {
            $(this).removeClass(class_name)
        }, 1000)
    })

    $('.technologies-grid-item').hover(function() {
        let class_name = 'animated infinite flipInY';
        $(this).addClass(class_name);
        window.setTimeout(() => {
            $(this).removeClass(class_name);
        }, 1000)
    })
}

let rss_feeds = () => {
    $("#rss-feeds").rss("https://www.nagekar.com/feed.xml", {
        limit: 5,
        dateFormat: 'MMMM Do, YYYY',
        effect: 'slideFastSynced',
        error: feed_error,
        ssl: true,
        layoutTemplate: "<div class='blog-container'>{entries}</div>",
        entryTemplate:`
            <div class="blog-item">
                <div class="blog-item-title">
                <a class="blog-title" href="{url}">{title}</a> <small class="post-date">{date}</small>
                </div>
                <p class="paragraph-text slightly-smaller-text">
                    {shortBodyPlain}
                </p>
            </div>
        `
    })
}

let feed_error = () => {
    $('#blog-posts').remove();
}