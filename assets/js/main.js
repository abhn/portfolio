
$(document).ready(() => {
    general_utils();
    blog_posts();
})


let general_utils = () => {
    // smooth scrolling for nav links
    $('.head-menu-wrap a').smoothScroll();
    $('.extra-link a').smoothScroll();

    $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width: $(this).attr('data-percent')
		}, 3000);
	});
}

let blog_posts = () => {
    fetch('https://www.nagekar.com/feed.json')
    .then(data => data.json())
    .then(data => {
        let posts = data.items;
        let post_html = [];

        for(let i=0; i<4; i++) {
            post = posts[i];

            let tags;
            
            if(post.tags) {
                tags = post.tags.map(tag => {
                    return `<a href="https://www.nagekar.com/tags#${tag}">${tag}</a>`
                })
            }

            let post_template = `
            <div class="blog-post">

                <div class="blog-link">
        
                    <h3><a href="${post.url}">${post.title}</a></h3>            

                </div>
        
                <div class="blog-goto-link">
                    <img src="/assets/images/right-open-mini.svg"/>
                </div>
            </div>
            `;

            post_html.push(post_template);
        }

        let post_template = `
        <div class="blog-post more-blogs">

            <div class="blog-link">
    
                <h3><a href="https://www.nagekar.com">More Blog Posts At Nagekar.com</a></h3>            

            </div>
    
            <div class="blog-goto-link">
                <img src="/assets/images/right-open-mini.svg"/>
            </div>
        </div>
        `;

        post_html.push(post_template);

        $('#rss-feeds').html(post_html);

        let bg_imgs = [
            'death-star.svg',
            'dominos.svg',
            'hideout.svg',
            'jupiter.svg',
            'piano-man.svg'
        ];
    })
}