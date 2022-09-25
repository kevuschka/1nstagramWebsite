let headerIconMarking = [];

function doNotClose(event) {
    event.stopPropagation();
}

function close_allPopUp() {
    close_Logo_PopUp();
}

// ########## HEADER ##########
// ==>
function render_Header() {
    let headerTemplate = document.getElementById('headerTemplate');
    headerTemplate.innerHTML = '';
    headerTemplate.innerHTML = `<div class="header flex centering" id="header"></div>`;
    return_for_header();
    renderSearchbar_noEdit();
    unmarkAll_headerIcons();
    // render-responsive-header and footer
    if(onlandingpage()) {
        mark_headerIcon_home();
    }
}

// ==> |==>
function return_for_header() {
    let header = document.getElementById('header');
    header.innerHTML = '';
    header.innerHTML += return_for_header_logo();
    header.innerHTML += return_for_header_searchbarContainer();
    header.innerHTML += return_for_header_iconBarContainer();
    return_for_iconBar();
}


function return_for_header_logo() {
    return `<div class="page-logo-container flex">
                <div class="page-logo cursor-p">
                    <a class="page-logo-a" href="https://kevin-schumilo.developerakademie.net/instagram/index.html">1nstagram</a>
                    <img src="img/arrow_down.png" onclick="open_Logo_PopUp()">
                </div>
            </div>`;
}


function return_for_header_searchbarContainer() {
    return `<div class="searchbar-container flex centering" id="searchbar"></div>`;
}


function return_for_header_iconBarContainer() {
    return `<div class="icon-bar-container">
                <div class="icon-bar flex" id="icon-bar"></div>
            </div>`;
}

// ==> |==> ||==>
function return_for_iconBar() {
    let iconBar = document.getElementById('icon-bar');
    iconBar.innerHTML += return_iconBar_home();
    iconBar.innerHTML += return_iconBar_plus();
    iconBar.innerHTML += return_iconBar_compass();
    iconBar.innerHTML += return_iconBar_heart();
    iconBar.innerHTML += return_iconBar_profil();
}


function return_iconBar_home() {
    return `<a id="home-icon-black" href="https://kevin-schumilo.developerakademie.net/instagram/index.html"><img class="icon-bar-img cursor-p" src="img/home.png"></a>
            <a id="home-icon-pink" href="https://kevin-schumilo.developerakademie.net/instagram/index.html"><img class="icon-bar-img cursor-p" src="img/home_click.png"></a>`;
}


function return_iconBar_plus() {
    return `<img id="plus-icon-black" class="icon-bar-img cursor-p" src="img/plus.png" onclick="open_IconPlus_PopUp();mark_headerIcon_plus()">
            <img id="plus-icon-pink" class="icon-bar-img cursor-p" src="img/plus_click.png">`;
}


function return_iconBar_compass() {
    return `<img id="compass-icon-black" class="icon-bar-img cursor-p" src="img/compass.png" onclick="redirect()">
            <img id="compass-icon-pink" class="icon-bar-img cursor-p" src="img/compass_click.png">`;
}


function return_iconBar_heart() {
    return `<img id="heart-icon-black" class="icon-bar-img cursor-p" src="img/heart.png" onclick="show_IconHeart_PopUp();mark_headerIcon_heart()">
            <img id="heart-icon-pink" class="icon-bar-img cursor-p" src="img/hearts_click.png">`;
}


function return_iconBar_profil() {
    return `<img id="profil-icon" class="icon-bar-img-profil cursor-p" src="img/profiles/kevin.jpg" onclick="open_IconProfil_PopUp();mark_headerIcon_profil()">`;
}
// <==|| <==| <==


function onlandingpage() {
    let path = window.location.pathname;
    if(path == '/instagram/index.html') {return true} else {false}
}


function redirect() {
    window.location.assign('/instagram/explore.html');
}

function redirectToHome() {
    window.location.assign('/instagram/index.html');
}

// ##########  HEADER ICON marking  ##########
// ==>
function mark_headerIcon_home() {
    unmarkAll_headerIcons();
    unmarkAll_headerIcons_resp();
    document.getElementById('home-icon-black').classList.add('d-none');
    document.getElementById('home-icon-pink').classList.remove('d-none');
    document.getElementById('home-icon-black-resp').classList.add('d-none');
    document.getElementById('home-icon-pink-resp').classList.remove('d-none');
    headerIconMarking = [];
    headerIconMarking.push('home');
}


function mark_headerIcon_plus() {
    unmarkAll_headerIcons();
    unmarkAll_headerIcons_resp();
    document.getElementById('plus-icon-black').classList.add('d-none');
    document.getElementById('plus-icon-pink').classList.remove('d-none');
    document.getElementById('plus-icon-black-resp').classList.add('d-none');
    document.getElementById('plus-icon-pink-resp').classList.remove('d-none');
    headerIconMarking.push('plus');
}


function mark_headerIcon_compass() {
    unmarkAll_headerIcons();
    unmarkAll_headerIcons_resp();
    document.getElementById('compass-icon-black').classList.add('d-none');
    document.getElementById('compass-icon-pink').classList.remove('d-none');
    headerIconMarking = [];
    headerIconMarking.push('compass');
}


function mark_headerIcon_heart() {
    unmarkAll_headerIcons();
    unmarkAll_headerIcons_resp();
    document.getElementById('heart-icon-black').classList.add('d-none');
    document.getElementById('heart-icon-pink').classList.remove('d-none');
    document.getElementById('heart-icon-black-resp').classList.add('d-none');
    document.getElementById('heart-icon-pink-resp').classList.remove('d-none');
    headerIconMarking.push('heart');
}


function mark_headerIcon_profil() {
    unmarkAll_headerIcons();
    unmarkAll_headerIcons_resp();
    document.getElementById('profil-icon').classList.add('b-pink');
    document.getElementById('profil-icon-resp').classList.add('b-pink');
    headerIconMarking.push('profil');
}


function mark_headerIcon_search() {
    unmarkAll_headerIcons_resp();
    document.getElementById('search-icon-black-resp').classList.add('d-none');
    document.getElementById('search-icon-pink-resp').classList.remove('d-none');
    headerIconMarking.push('search');
}


/** It's only porpose is to mark the previous marked header-icon. I'll do it with an array called "headerIconMarking", which gets 
 * a max lenght of 2. So the previous icon will always be on index 0 (only "compass" and "home" clean the "headerIconMarking" and will be pushed on index one)
 */
function previous_marked_icon() {
    headerIconMarking.splice(1,1);
    if(headerIconMarking[0] == 'home') {
        mark_headerIcon_home();
    } else if(headerIconMarking[0] == 'compass') {
        mark_headerIcon_compass();
    }
}


function unmarkAll_headerIcons() {
    unmark_home_icon();
    unmark_plus_icon();
    unmark_compass_icon();
    unmark_heart_icon();
    unmark_profil_icon();
}


function unmark_home_icon() {
    document.getElementById('home-icon-black').classList.remove('d-none');
    document.getElementById('home-icon-pink').classList.add('d-none');
}


function unmark_plus_icon() {
    document.getElementById('plus-icon-black').classList.remove('d-none');
    document.getElementById('plus-icon-pink').classList.add('d-none');
}


function unmark_compass_icon() {
    document.getElementById('compass-icon-black').classList.remove('d-none');
    document.getElementById('compass-icon-pink').classList.add('d-none');
}


function unmark_heart_icon() {
    document.getElementById('heart-icon-black').classList.remove('d-none');
    document.getElementById('heart-icon-pink').classList.add('d-none');
}


function unmark_profil_icon() {
    document.getElementById('profil-icon').classList.remove('b-pink');
}
// <==


// ########## SEARCHBAR ##########
// ==>
function renderSearchbar_noEdit() {
    let searchBar = document.getElementById('searchbar');
    searchBar.innerHTML ='';
    searchBar.innerHTML += `
        <div class="searchbar-noEdit flex" onclick="open_searchbar_edit()">
            <img src="img/search.png">
            <p>Suchen</p>
        </div>`;
}


function clear_Searchbar_input() {
    document.getElementById('searchbar-input').value = '';
}

// ==> |==>
function filter() {
    clean_Searchbar_results();
    if(document.getElementById('searchbar-input').value) {
        let searchInput = document.getElementById('searchbar-input').value;
        searchInput = searchInput.toLowerCase();
        filer_loop(searchInput);
    } else {
        hide_Searchbar_results();
    }
}

// ==> |==> ||==>
function filer_loop(word) {
    for (let i = 0; i < posts.length; i++) {
        if(posts[i]['author'].toLowerCase().includes(word)) {
            document.getElementById('searchbar-results').innerHTML += `<a class="searchbar-results-item" href="#${posts[i]['author']}">${posts[i]['author']}</a>`;
            show_Searchbar_results();
        }
    }
}


function hide_Searchbar_results() {
    document.getElementById('searchbar-results').classList.add('d-none');
}


function show_Searchbar_results() {
    document.getElementById('searchbar-results').classList.remove('d-none');
}
// <==| <==||

function clean_Searchbar_results() {
    document.getElementById('searchbar-results').innerHTML = '';
}

/** It opens an popUp screen on top of the previes (no edit) searchbar */
function close_searchbar_edit() {
    let input = document.getElementById('searchbar-input');
    input.innerText = '';
    document.getElementById('searchbar-input-PopUp').classList.add('d-none');
    clear_Searchbar_input();
    hide_Searchbar_results();
}


function open_searchbar_edit() {
    document.getElementById('searchbar-input-PopUp').classList.remove('d-none');
}
// <==
