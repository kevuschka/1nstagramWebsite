// ########## HEADER ##########
function preload_responsive_header() {
    let page = document.getElementById('page');
    page.innerHTML += `<div class="resp_headerTemplate fixed flex" id="resp_headerTemplate"></div>`;
    render_resp_header();
}


function render_resp_header() {
    let header = document.getElementById('resp_headerTemplate');
    header.innerHTML = '';
    return_for_respHeaderTemplate(header);
}


function return_for_respHeaderTemplate(container) {
    container.innerHTML += return_for_header_camera();
    container.innerHTML += return_for_header_logo();
    container.innerHTML += return_for_header_send();
}


function return_for_header_camera() {
    return `<img class="resp_header_cameraImage cursor-p" src="img/camera.png" onclick="open_Sorry_PopUp()">`;
}


function return_for_header_send() {
    return `<img class="resp_header_sendImage cursor-p" src="img/send.png" onclick="open_Sorry_PopUp()">`;
}


// ########## FOOTER ##########
function preload_responsive_footer() {
    let page = document.getElementById('page');
    page.innerHTML += `<div class="resp_footerTemplate fixed flex" id="resp_footerTemplate"></div>`;
    render_resp_footer();
}


function render_resp_footer() {
    let footer = document.getElementById('resp_footerTemplate');
    footer.innerHTML = '';
    return_for_respFooterTemplate(footer);
    unmarkAll_headerIcons_resp();
}

// ==>
function return_for_respFooterTemplate(container) {
    container.innerHTML += return_for_footerIcons_home();
    container.innerHTML += return_for_footerIcons_search();
    container.innerHTML += return_for_footerIcons_plus();
    container.innerHTML += return_for_footerIcons_heart();
    container.innerHTML += return_for_footerIcons_profil();
}


function return_for_footerIcons_home() {
    return `<a id="home-icon-black-resp" href="https://kevin-schumilo.developerakademie.net/instagram/index.html"><img class="icon-bar-img" src="img/home.png"></a>
            <a id="home-icon-pink-resp" href="https://kevin-schumilo.developerakademie.net/instagram/index.html"><img class="icon-bar-img" src="img/home_click.png"></a>`;
}


function return_for_footerIcons_search() {
    return `<img id="search-icon-black-resp" class="search-icon-black-resp" src="img/search_big.png" onclick="show_resp_searchbar_PopUp();mark_headerIcon_search()">
            <img id="search-icon-pink-resp" class="search-icon-pink-resp" src="img/search_big_click.png">`;
}


function return_for_footerIcons_plus() {
    return `<img id="plus-icon-black-resp" class="icon-bar-img cursor-p" src="img/plus.png" onclick="open_IconPlus_PopUp();mark_headerIcon_plus()">
            <img id="plus-icon-pink-resp" class="icon-bar-img cursor-p" src="img/plus_click.png">`;
}


function return_for_footerIcons_heart() {
    return `<img id="heart-icon-black-resp" class="icon-bar-img cursor-p" src="img/heart.png" onclick="show_IconHeart_PopUp();mark_headerIcon_heart()">
            <img id="heart-icon-pink-resp" class="icon-bar-img cursor-p" src="img/hearts_click.png">`;
}


function return_for_footerIcons_profil() {
    return `<img id="profil-icon-resp" class="icon-bar-img-profil cursor-p" src="img/profiles/kevin.jpg" onclick="open_IconProfil_PopUp();mark_headerIcon_profil()">`;
}
// <==

// ==>
function unmarkAll_headerIcons_resp() {
    unmark_homeIcon_resp()
    unmark_heartIcon_resp()
    unmark_plusIcon_resp()
    unmark_searchIcon_resp()
    unmark_profilIcon_resp()
}


function unmark_homeIcon_resp() {
    document.getElementById('home-icon-black-resp').classList.remove('d-none');
    document.getElementById('home-icon-pink-resp').classList.add('d-none');
}


function unmark_heartIcon_resp() {
    document.getElementById('heart-icon-black-resp').classList.remove('d-none');
    document.getElementById('heart-icon-pink-resp').classList.add('d-none');
}


function unmark_plusIcon_resp() {
    document.getElementById('plus-icon-black-resp').classList.remove('d-none');
    document.getElementById('plus-icon-pink-resp').classList.add('d-none');
}


function unmark_searchIcon_resp() {
    document.getElementById('search-icon-black-resp').classList.remove('d-none');
    document.getElementById('search-icon-pink-resp').classList.add('d-none');
}


function unmark_profilIcon_resp() {
    document.getElementById('profil-icon-resp').classList.remove('b-pink');
}
// <==

// ########## SEARCHBAR ##########
function preload_search_PopUp_resp() {
    let page = document.getElementById('page');
    page.innerHTML += `<div class="popUp-fullscreen fixed" id="resp-searchbar-PopUp-full" onclick="close_resp_searchbar_PopUp();hide_Searchbar_results();previous_marked_icon()">`;
    render_search_PopUp_resp();
    close_resp_searchbar_PopUp();
}


function render_search_PopUp_resp() {
    let absoluteContainer = document.getElementById('resp-searchbar-PopUp-full');
    absoluteContainer.innerHTML = return_resp_searchbar_input();
}


function close_resp_searchbar_PopUp() {
    document.getElementById('resp-searchbar-PopUp-full').classList.add('d-none');
}


function show_resp_searchbar_PopUp() {
    document.getElementById('resp-searchbar-PopUp-full').classList.remove('d-none');
    close_resp_Searchbar_results();
}


function return_resp_searchbar_input() {
    return `<div class="resp-searchbar-relative relative">
                <div class="resp-searchbar-absolute absolute flex centering" onclick="doNotClose(event)">
                        <input class="resp-searchbar-input" id="resp-searchbar-input" type="text" placeholder="Suchen" autofocus onKeyUp="resp_filter()">
                        <img class="cursor-p" src="img/cross.png" onclick="close_resp_searchbar_PopUp();close_resp_Searchbar_results();previous_marked_icon()">
                        <div class="resp-searchbar-results absolute flex column" id="resp-searchbar-results"></div>         
                </div>
            </div> `;
    
}