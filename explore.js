function render_explore() {
    let page = document.getElementById('page');
    page.innerHTML= '';
    page.innerHTML += return_explore_page();
}


function return_explore_page() {
    return `<div class="headerTemplate flex centering" id="headerTemplate"></div>
                <div class="contentTemplate flex explore-padding mt-60" id="contentTemplate">
                    <div class="contentAndSuggestions flex">
                        <div class="explore-icon-page flex" id="explore-icon-page"></div>  
                    </div>
            </div>`;
}


function hide_suggestions() {
    document.getElementById('suggestions-container').classList.add('d-none');
}


function open_explore_header_icon() {
    let content = document.getElementById('explore-icon-page');
    render_explore_images(content);
}


function render_explore_images(container) {
    let post;
    for (let i = 0; i < posts.length; i++) {
        post = posts[i];
        container.innerHTML += `<img class="explore-image" src="${post['post-img']}">`;
    }
}