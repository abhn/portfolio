
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

        for(let i=0; i<6; i++) {
            post = posts[i];

            let tags;
            
            if(post.tags) {
                tags = post.tags.map(tag => {
                    return `<a href="https://www.nagekar.com/tags#${tag}">${tag}</a>`
                })
            }

            let post_template = `
            <div class="wrapper">
                <div class="card radius shadowDepth1">

                    <div class="card__content card__padding">
            
                        <article class="card__article">
                            <h2><a href="${post.url}">${post.title}</a></h2>
            
                            <p>${post.content_text.slice(0, 150)}</p>
                        </article>

                                    
                        <div class="card__meta">
                            ${tags ? tags.join(' ') : ''}
                            <time>${(new Date(post.date_published).toUTCString().slice(0,16))}</time>
                        </div>
                    </div>
            
                </div>
            </div>
            `;

            post_html.push(post_template);
        }

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