function render_page() {
    let page = document.getElementById('page');
    page.innerHTML= '';
    page.innerHTML += return_pageContent();
}


function return_pageContent() {
    return `<div class="headerTemplate flex centering" id="headerTemplate"></div>
            <div class="contentTemplate flex" id="contentTemplate">
                <div class="contentAndSuggestions flex">
                    <div class="content-container">
                        <div class="content flex column" id="content"></div>
                    </div>
                    <div class="suggestions-container" id="suggestions-container"></div>
                </div>
            </div>`;
}


function render_Content() {
    render_ContentStories();
    render_ContentItems();
    render_Suggestions();
}


function render_ContentStories() {
    let content = document.getElementById('content');
    content.innerHTML = '';
    content.innerHTML += return_ContentStories();
    render_ContentStory();
    show_ArrowRight_For_Stories();
}


function return_ContentStories() {
    return `<div class="stories-container flex">
                <div class="stories flex" id="stories"></div>
                <img class="stories-arrow-right cursor-p" id="stories-arrow-right" src="img/arrow_right.png" onclick="next_Stories()">
                <img class="stories-arrow-left cursor-p" id="stories-arrow-left" src="img/arrow_left.png" onclick="previous_Stories()">
            </div>`;
}


function render_ContentStory() {
    let story_container = document.getElementById('stories');
    story_container.innerHTML = '';
    let post;
    for (let i = 0; i < (posts.length-2); i++) {
        post = posts[i];
        story_container.innerHTML += `<div class="story-item flex column" onclick="open_Sorry_PopUp()">
                                        <img class="cursor-p" src="${post['profil-img']}">
                                        <p class="cursor-p">${post['author']}</p>
                                    </div>`;
    } 
}


function next_Stories() {
    document.getElementById('stories').classList.add('show-next-stories');
    show_ArrowLeft_For_Stories();
}


function previous_Stories() {
    document.getElementById('stories').classList.remove('show-next-stories');
    show_ArrowRight_For_Stories();
}


function show_ArrowRight_For_Stories() {
    document.getElementById('stories-arrow-right').classList.remove('d-none');
    document.getElementById('stories-arrow-left').classList.add('d-none');
}


function show_ArrowLeft_For_Stories() {
    document.getElementById('stories-arrow-right').classList.add('d-none');
    document.getElementById('stories-arrow-left').classList.remove('d-none');
}


function render_ContentItems() {
    let content = document.getElementById('content');
    content.innerHTML += return_ContentItems();
    render_ContentItem();
}


function return_ContentItems() {
    return `<div class="content-items flex column" id="content-items"></div>`;
}

// ==>
function render_ContentItem() {
    let contentItems = document.getElementById('content-items');
    contentItems.innerHTML = '';
    loop_for_content_item(contentItems);
}


function loop_for_content_item(container) {
    let container_1 = container;
    let post;
    for (let i = 0; i < posts.length; i++) {
        post = posts[i];
        if(post['followed'] == 'yes') {
            render_contentItem(post, i, container);
            checkHeart(i);
            // commentAvailable(i);
            descriptionAvailable(i);
            entryAvailable(i);
        }
    }  
}
// <==
// ==> 
function render_contentItem(post, i, container) {
    let container_2 = container;
    container.innerHTML += return_for_renderContentItem(post, i, container);
    render_for_contentItemHeader(post, i);
    render_for_contentItemFooterContainer(post, i)
}

// |==>
function return_for_renderContentItem(post, i, container) {
    return `<div class="content-item flex column">
                <div class="content-item-header-container flex centering"> <!-- Content-Header -->
                    <div class="content-item-header flex" id="content-item-header${i}"></div>
                </div>
                <img class="content-item-media" src="${post['post-img']}">    <!-- Content Media -->
                <div class="content-item-footer-container" id="content-item-footer-container${i}"></div>
            </div>`;
}
// <==|
// |==>
function render_for_contentItemHeader(post, i) {
    let content = document.getElementById(`content-item-header${i}`);
    content.innerHTML += return_for_contentItemHeader_part1(post);
    content.innerHTML += return_for_contentItemHeader_part2(i);
}


function return_for_contentItemHeader_part1(post) {
    return `<div class="content-item-header-left-container flex">
                <div class="content-item-header-left flex">
                    <img class="cursor-p" src="${post['profil-img']}">
                    <div class="c-i-h-l-authorANDlocation flex column">
                        <p class="cursor-p" id="${post['author']}">${post['author']}</p>
                        <p class="cursor-p">${post['location']}</p>
                    </div>
                </div>
            </div>`;
}


function return_for_contentItemHeader_part2(i) {
    return `<div class="content-item-header-right-container flex centering">
                <div class="c-i-h-r-threeDots cursor-p" onclick="show_item_info_PopUp(${i})">...</div>
            </div>`;
}
// <==|
// |==>
function render_for_contentItemFooterContainer(post, i) {
let content = document.getElementById(`content-item-footer-container${i}`);
content.innerHTML += return_for_contentItemFooterContainer_part1(post,i);
render_comments(i);
content.innerHTML += return_for_contentItemFooterContainer_part2(i);
}


function return_for_contentItemFooterContainer_part1(post,i) {
    return `<div class="content-item-footer flex column">
                <div id="item-noheart${i}" class="c-i-f-heart-container"><img class="cursor-p" src="img/hearts.png" onclick="hearted(${i})"></div>
                <div id="item-heart${i}" class="c-i-f-heart-container"><img class="cursor-p" src="img/hearts_click.png" onclick="hearted(${i})"></div>
                <div class="c-i-f-likes-container">Gefällt ${post['likes']} Mal</div>
                <div class="c-i-f-description-container flex" id="description-container${i}"><p><span>${post['author']}</span>${post['description']}</p></div>
                <p class="c-i-f-comments-placeholder cursor-p" id="c-i-f-comments-placeholder_showComments${i}" onclick="show_comments(${i})">${posts[i].comment.length} Kommentare ansehen</p>
                <p class="c-i-f-comments-placeholder cursor-p" id="c-i-f-comments-placeholder_hideComments${i}" onclick="hide_comments(${i});show_comments_label(${i})">Kommentare schließen</p>
                <div class="c-i-f-comment-view-section flex column" id="comment-view-section${i}"></div>
                
                <div class="c-i-f-posting-time">VOR ${post['time']} STUNDEN</div>
            </div>`;
}

// |==> ||==>
function render_comments(i) {
    let section = document.getElementById(`comment-view-section${i}`);
    section.innerHTML = '';
    if(posts[i].comment.length > 1) {
        show_moreComments_available_option(i);
    } else if(posts[i].comment.length == 1) {
        show_only_that_one_comment(i, section);
    }
    else {
        else_there_is_no_comment(i);
    }
}


function show_moreComments_available_option(i) {
    renderComments(i);
    hide_comments(i);
    show_comments_label(i);
}


function show_only_that_one_comment(i, container) {
    container.innerHTML += return_oneComment(i);
    hide_comment_labels(i);
}

function return_oneComment(i) {
    return  `<div class="c-i-f-comment-view-container flex" id="comment-view-container${i}">
                <div class="c-i-f-comment-view-content flex"><p class="kevusch">kevusch</p>${posts[i].comment[0]}</div>
                <div class="c-i-f-comment-delete-button cursor-p" onclick="deleteComment(${i},0)">Löschen</div>
            </div>`;
}


function else_there_is_no_comment(i) {
    hide_comment_labels(i);
    hide_comment_labels(i);
}


function renderComments(i) {
    let container = document.getElementById(`comment-view-section${i}`);
    container.innerHTML = '';
    for (let j = 0; j < posts[i]['comment'].length; j++) {
        container.innerHTML += `<div class="c-i-f-comment-view-container flex" id="comment-view-container${i}${j}">
                                    <div class="c-i-f-comment-view-content flex"><p class="kevusch">kevusch</p>${posts[i].comment[j]}</div>
                                    <div class="c-i-f-comment-delete-button cursor-p" onclick="deleteComment(${i},${j})">Löschen</div>
                                </div>`;
    }
}


function show_comments(i) {
    hide_comments_label(i);
    let container = document.getElementById(`comment-view-section${i}`).classList.remove('d-none');
}


function hide_comments(i) {
    let container = document.getElementById(`comment-view-section${i}`).classList.add('d-none');
}


function show_comments_label(i) {
    document.getElementById(`c-i-f-comments-placeholder_showComments${i}`).classList.remove('d-none');
    document.getElementById(`c-i-f-comments-placeholder_hideComments${i}`).classList.add('d-none');
}


function hide_comments_label(i) {
    document.getElementById(`c-i-f-comments-placeholder_showComments${i}`).classList.add('d-none');
    document.getElementById(`c-i-f-comments-placeholder_hideComments${i}`).classList.remove('d-none');
}


function hide_comment_labels(i) {
    document.getElementById(`c-i-f-comments-placeholder_showComments${i}`).classList.add('d-none');
    document.getElementById(`c-i-f-comments-placeholder_hideComments${i}`).classList.add('d-none');
}
// <==||

function return_for_contentItemFooterContainer_part2(i) {
    return `<div class="c-i-f-comment-input-container flex">
                <input class="c-i-f-comment-input" id="comment-input${i}" type="text" placeholder="Kommentieren ..." onKeyUp="entryAvailable(${i})">
                <input id="comment-button${i}" type="button" value="Posten" onclick="comment(${i})">
            </div>`;
}
// <==|

function setObject() {
    let postsAsText = JSON.stringify(posts);
    localStorage.setItem('posts', postsAsText);
}


function getObject() {
    let postsAsText = localStorage.getItem('posts');
    if (postsAsText) {
        posts = JSON.parse(postsAsText);
    }
}


// ########## HEART , LIKES ##########

function addLike(index) {
    posts[index]['likes'] += 1;
}


function removeLike(index) {
    posts[index]['likes'] -= 1;
}


function checkHeart(index) {
    if (posts[index]['heart'] == 'no') {
        document.getElementById(`item-heart${index}`).classList.add('d-none');
        document.getElementById(`item-noheart${index}`).classList.remove('d-none');
    } else {
        document.getElementById(`item-heart${index}`).classList.remove('d-none');
        document.getElementById(`item-noheart${index}`).classList.add('d-none');
    }
}


function hearted(index) {
    if (posts[index]['heart'] == 'no') {
        addLike(index);
        posts[index]['heart'] = 'yes';
    } else {
        removeLike(index);
        posts[index]['heart'] = 'no';
    }
    setObject();
    checkHeart(index);
    render();
}


// ########## DESCRIPTION ##########

function descriptionAvailable(index) {
    if(!posts[index]['description']) {
        document.getElementById(`description-container${index}`).classList.add('d-none');
    } else {
        document.getElementById(`description-container${index}`).classList.remove('d-none');
    }
}


// ########## COMMMENT ###########
function comment(a) {
    let mycomment = document.getElementById(`comment-input${a}`).value;
    posts[a].comment.push(mycomment);
    setObject();
    render();
}


function entryAvailable(index) {
    if(document.getElementById(`comment-input${index}`).value) {
        document.getElementById(`comment-button${index}`).classList.remove('white-button');
        document.getElementById(`comment-button${index}`).classList.add('blue-button');
    } else {
        document.getElementById(`comment-button${index}`).classList.remove('blue-button');
        document.getElementById(`comment-button${index}`).classList.add('white-button');
    }
}


// function commentAvailable(index) {
//     if(!posts[index]['comment']) {
//         document.getElementById(`comment-view-container${index}`).classList.add('d-none');
//     } else {
//         document.getElementById(`comment-view-container${index}`).classList.remove('d-none');
//     }
// }


// ########## SUGGESTIONS ##########
function render_Suggestions() {
    if(window.location.pathname == '/instagram/index.html' ) {
        let suggestions = document.getElementById('suggestions-container')
        suggestions.innerHTML = '';
        suggestions.innerHTML += return_Suggestions();
        render_for_returnSuggestions();
        render_SuggestionsItem();
    }
}

// ==>
function return_Suggestions() {
    return `<div class="suggestions">
                <div class="suggestions-myprofil flex" id="suggestions-myprofil"></div>
                <div class="suggestions-others" id="suggestions-others"></div>
                <div class="page-footer flex" id="page-footer"></div>
            </div>`;
}


function render_for_returnSuggestions() {
    render_for_suggestionsMyprofil();
    render_for_suggestionsOthers();
    render_for_pageFooter();
}

// |==>
function render_for_suggestionsMyprofil() {
    let container = document.getElementById('suggestions-myprofil');
    container.innerHTML += return_for_suggestionsMyprofil();
}

function return_for_suggestionsMyprofil() {
    return `<div class="suggestions-myprofil-left flex">
                <img class="cursor-p" src="img/profiles/kevin.jpg">
                <div class="suggestions-myprofil-name flex column">
                    <p>kevusch</p>
                    <p>Kevin Schumi</p>
                </div>
            </div>
            <p class="suggestions-myprofil-right suggestions-right-element flex cursor-p">Wechseln</p>`;
}
// <==|
// |==>
function render_for_suggestionsOthers() {
    let container = document.getElementById('suggestions-others');
    container.innerHTML += return_for_suggestionsOthers();
}


function return_for_suggestionsOthers() {
    return `<div class="suggestions-others-header flex">
                <div>Vorschläge für dich</div>
                <div class="suggestions-right-element cursor-p">Alle ansehen</div>
            </div>
            <div class="suggestions-others-items flex column" id="suggestions-others-items"></div>`;
}
// <==|
// |==>
function render_for_pageFooter() {
    let container = document.getElementById('page-footer');
    container.innerHTML += return_for_pageFooter();
}


function return_for_pageFooter() {
    return `<p class="cursor-p">Info ·&nbsp;</p>
            <p class="cursor-p">Hilfe ·&nbsp;</p>
            <p class="cursor-p">Presse ·&nbsp;</p>
            <p class="cursor-p">API · &nbsp;</p>
            <p class="cursor-p">Jobs ·&nbsp;</p>
            <p class="cursor-p">Datenrichtlinien ·&nbsp;</p>
            <p class="cursor-p">Impressum ·&nbsp;</p>
            <p class="cursor-p">Standorte ·&nbsp;</p>
            <p class="cursor-p">Sprache</p>`;
}
// <==| <==

// ==>
function render_SuggestionsItem() {
    let suggestionsItems = document.getElementById('suggestions-others-items');
    loop_suggestion_items(suggestionsItems);
    loop_main_items(suggestionsItems);

}


function loop_suggestion_items(container) {
    let post;
    for (let i = (posts.length-2); i < posts.length; i++) {
        post = posts[i];
        container.innerHTML += return_SuggestionsItem(i);
        return_suggestions_others_item_left(i, post);
        return_suggestions_others_item_right(i);
        alreadyFollowed(i);
    }
}


function loop_main_items(container) {
    for (let i = 0; i < (posts.length-2); i++) {
        post = posts[i];
        if(post['followed'] == 'no') {
            container.innerHTML += return_SuggestionsItem(i);
            return_suggestions_others_item_left(i, post);
            return_suggestions_others_item_right(i);
            alreadyFollowed(i);
        }
    }
}
// <==

function return_SuggestionsItem(i) {
    return `<div class="suggestions-others-item flex" id="suggestions-others-item${i}"></div>`;
}


function return_suggestions_others_item_left(i, post) {
    let container = document.getElementById(`suggestions-others-item${i}`);
    container.innerHTML += `<div class="suggestions-others-item-left flex">
                                <img class="cursor-p" src="${post['profil-img']}">
                                <div class="s-o-i-authorANDInfo flex column">
                                    <p>${post['author']}</p>
                                    <p class="s-o-i-youFollow">Folgt dir</p>
                                </div>
                            </div>`;
}


function return_suggestions_others_item_right(i) {
    let container = document.getElementById(`suggestions-others-item${i}`);
    container.innerHTML += ` 
        <p class="suggestions-others-item-right suggestions-right-element cursor-p" id="s-o-i-right-notFollowed${i}" onclick="follow(${i});render()">Folgen</p>
        <div class="suggestions-others-item-right-followed flex suggestions-right-element relative" id="s-o-i-right-Followed${i}">
        <p class="s-o-i-right-youFollow">Folgst du</p>
        <p class="s-o-i-right-unFollow absolute cursor-p" onclick="unFollow(${i});render()">Nicht mehr folgen</p>
        </div>`;
}


function alreadyFollowed(index) {
    if(posts[index]['followed'] == 'yes') {
        document.getElementById(`s-o-i-right-notFollowed${index}`).classList.add('d-none');
        document.getElementById(`s-o-i-right-Followed${index}`).classList.remove('d-none');
    } else {
        document.getElementById(`s-o-i-right-notFollowed${index}`).classList.remove('d-none');
        document.getElementById(`s-o-i-right-Followed${index}`).classList.add('d-none');
    }
}


function deleteComment(postIndex, commentIndex) {
    posts[postIndex]['comment'].splice(commentIndex, 1);
    setObject();
    render();
}
