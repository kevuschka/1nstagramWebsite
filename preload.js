// ########## SEARCHBAR ##########
function preload_Searchbar_input() {
    let page = document.getElementById('page');
    page.innerHTML += `
        <div class="popUp-fullscreen fixed" id="searchbar-input-PopUp" onclick="close_searchbar_edit();hide_Searchbar_results()">
            <div class="searchbar-absolute-mini flex centering absolute" id="searchbar-absolute-mini"></div>
        </div>`;
    return_for_preloadSearchbarInput();
    close_searchbar_edit();
}

// ==> |==> ||==>
function return_for_preloadSearchbarInput() {
    let searchbarAbsolute = document.getElementById('searchbar-absolute-mini');
    searchbarAbsolute.innerHTML += return_searchbar_relative();
}


function return_searchbar_relative() {
    return `<div class="searchbar-relative flex">
                <div class="searchbar-spacer-left"></div>
                <div class="searchbar-spacer-middle flex centering" onclick="doNotClose(event)">
                    <div class="searchbar-edit flex" onclick="doNotClose(event)">
                        <input class="searchbar-input" id="searchbar-input" type="text" placeholder="Suchen" autofocus onKeyUp="filter()">
                        <img class="cursor-p" src="img/cross.png" onclick="close_searchbar_edit();hide_Searchbar_results()">
                        <div class="searchbar-results absolute flex column" id="searchbar-results"></div>
                    </div>
                </div>
                <div class="searchbar-spacer-right"></div>
            </div> `;
}


// ########## LOGO POPUP ##########
// ==> |==>
function preload_Logo_PopUp() {
    let page = document.getElementById('page');
    page.innerHTML += return_logoPopUp_fullscreen();
    return_logoPopUp()
    close_Logo_PopUp();
}


function return_logoPopUp_fullscreen() {
    return `<div class="popUp-fullscreen fixed" id="logo-PopUp" onclick="close_Logo_PopUp()">
                <div class="logoPopUp-absolute-mini absolute centering flex" >
                    <div class="logoPopUp-relative flex">
                        <div class="logoPopUp-container flex" id="logoPopUp-container"></div>
                        <div class="spacer-logo"></div>
                    </div>    
                </div>
            </div>`;
}
// <==|

function return_logoPopUp() {
    let logoPopUpContainer = document.getElementById('logoPopUp-container');
    logoPopUpContainer.innerHTML += `<div class="logoPopUp flex column" onclick="open_Sorry_PopUp()">
                                        <span class="logoPopUp-item flex centering cursor-p" onclick="open_Sorry_PopUp()">
                                            <img src="img/user_followed.png">
                                            <p>Gefolgt</p>
                                        </span>
                                        <span class="logoPopUp-item flex centering cursor-p" onclick="open_Sorry_PopUp()">
                                            <img src="img/star.png">
                                            <p>Favoriten</p>
                                        </span>
                                    </div>`;
}


function close_Logo_PopUp() {
    document.getElementById('logo-PopUp').classList.add('d-none');
}


function open_Logo_PopUp() {
    document.getElementById('logo-PopUp').classList.remove('d-none');
}
// <==


// ########## SORRY POPUP ##########
// ==> |==>
function preload_Sorry_PopUp() {
    let page = document.getElementById('page');
    page.innerHTML += `
        <div class="popUp-fullscreen fixed" id="sorry-PopUp" onclick="close_Sorry_PopUp();previous_marked_icon()"></div>`;
    return_for_sorry_PopUp_container();
    close_Sorry_PopUp();
}


function return_for_sorry_PopUp_container() {
    let sorryPopUpFullsreen = document.getElementById('sorry-PopUp');
    sorryPopUpFullsreen.innerHTML += return_sorry_PopUp_container(); 
}


function return_sorry_PopUp_container() {
    return `<div class="sorry-PopUp-container flex centering" onclick="close_Sorry_PopUp();previous_marked_icon()">
                <div class="sorry-PopUp flex centering column"> 
                    <div class="title-sorry">Sorry</div>
                    <div class="title-nofunction">Leider ohne Funktion</div>
                </div> 
            </div>`;
}


function close_Sorry_PopUp() {
    document.getElementById('sorry-PopUp').classList.add('d-none');
}
// <==|

function open_Sorry_PopUp() {
    document.getElementById('sorry-PopUp').classList.remove('d-none');
}
// <==

// ########## ICONPLUS POPUP ##########
function preload_IconPlus_PopUp() {
    let page = document.getElementById('page');
    page.innerHTML += `<div class="popUp-fullscreen fixed" id="iconPlus-PopUp" onclick="close_IconPlus_PopUp();previous_marked_icon()"></div>`;
    render_IconPlus_PopUp();
}   


function render_IconPlus_PopUp() {
    let container = document.getElementById('iconPlus-PopUp');
    container.innerHTML = '';
    container.innerHTML += return_IconPlus_PopUp();
    let relativeContainer = document.getElementById('iconPlus-PopPup-relative');
    relativeContainer.innerHTML = '';
    relativeContainer.innerHTML += return_iconPlus_PopUp_inner();
    close_IconPlus_PopUp();
}


function return_IconPlus_PopUp() {
    return `<div class="iconPlus-PopPup-relative relative flex centering" id="iconPlus-PopPup-relative" onclick="close_IconPlus_PopUp();previous_marked_icon()">
                <img class="close_window_cross" src="img/close_window.png" onclick="close_IconPlus_PopUp();previous_marked_icon()">
            </div>`;
}


function return_iconPlus_PopUp_inner() {
    return `<div class="iconPlus-PopUp" onclick="doNotClose(event)">
                <div class="iconPlus-PopUp-title">Neuen Beitrag erstellen</div>
                <div class="iconPlus-PopUp-content flex column">
                    <img class="iconPlus-PopUp-content-image" src="img/iconPlus_PopUp_image.PNG">
                    <div class="iconPlus-PopUp-content-title flex">Ziehe Fotos und Videos hierher</div>
                    <div class="iconPlus-PopUp-content-button flex cursor-p relative">
                        <button class="chooseFileButton cursor-p">Vom Computer auswählen</button>
                        <input class="chooseFile absolute cursor-p" id="file" accept="image/jpeg,image/gif,image/png,image/x-eps" name="chooseFile" type="file" />
                    </div>
                </div>
            </div>`;
}


function open_IconPlus_PopUp() {
    document.getElementById('iconPlus-PopUp').classList.remove('d-none');
}


function close_IconPlus_PopUp() {
    document.getElementById('iconPlus-PopUp').classList.add('d-none');
}


// ########## ICONPROFIL POPUP ##########
// ==>
function preload_IconProfil_PopUp() {
    let page = document.getElementById('page');
    page.innerHTML += `<div class="popUp-fullscreen fixed" id="iconProfil-PopUp" onclick="close_IconProfil_PopUp();previous_marked_icon()"></div>`;
    render_IconProfil_PopUp();
    close_IconProfil_PopUp();
}

// ==> |==>
function render_IconProfil_PopUp() {
    let container = document.getElementById('iconProfil-PopUp');
    container.innerHTML = '';
    container.innerHTML += return_IconProfil_PopUp();
    return_for_iconProfilPopUp();
}


function return_IconProfil_PopUp() {
    return `
        <div class="iconProfil-PopUp-absolute absolute flex centering">
            <div class="iconProfil-PopUp-container flex centering">
                <div class="iconProfil-PopUp-spacer"></div>
                <div class="iconProfil-PopUp flex column" id="iconProfil-PopUp-Elements" onclick="doNotClose()"></div>
            </div>
        </div>
        `;
}

// ==> |==> ||==>
function return_for_iconProfilPopUp() {
    let iconProfilPopUp = document.getElementById('iconProfil-PopUp-Elements');
    iconProfilPopUp.innerHTML += return_iconProfilPopUpitem_profil();
    iconProfilPopUp.innerHTML += return_iconProfilPopUpitem_bookmark();
    iconProfilPopUp.innerHTML += return_iconProfilPopUpitem_settings();
    iconProfilPopUp.innerHTML += return_iconProfilPopUpitem_changeAccount();
    iconProfilPopUp.innerHTML += return_iconProfilPopUpitem_logout();
}


function return_iconProfilPopUpitem_profil() {
    return `<div class="iconProfil-PopUp-item flex cursor-p" onclick="open_Sorry_PopUp()">
                <img src="img/profil.png">
                <p>Profil</p>
            </div> `;
}


function return_iconProfilPopUpitem_bookmark() {
    return `<div class="iconProfil-PopUp-item flex cursor-p" onclick="open_Sorry_PopUp()">
                <img src="img/bookmark.png">
                <p>Gespeichert</p>
            </div>`;
}


function return_iconProfilPopUpitem_settings() {
    return `<div class="iconProfil-PopUp-item flex cursor-p" onclick="open_Sorry_PopUp()">
                <img src="img/settings.png">
                <p>Einstellungen</p>
            </div>`;
}


function return_iconProfilPopUpitem_changeAccount() {
    return `<div class="iconProfil-PopUp-item flex cursor-p" onclick="open_Sorry_PopUp()">
                <img src="img/change_account.png">
                <p>Konto wechseln</p>
            </div>`;
}


function return_iconProfilPopUpitem_logout() {
    return `<div class="iconProfil-PopUp-item flex cursor-p" onclick="open_Sorry_PopUp()">Abmelden</div>`;
}
// <==||

function open_IconProfil_PopUp() {
    document.getElementById('iconProfil-PopUp').classList.remove('d-none');
}


function close_IconProfil_PopUp() {
    document.getElementById('iconProfil-PopUp').classList.add('d-none');
}
// <==| <==


// ########## ICONHEART POPUP ##########
// ==>
function preload_IconHeart_PopUp() {
    let page = document.getElementById('page');
    page.innerHTML += `<div class="popUp-fullscreen fixed" id="iconHeart-PopUp" onclick="close_IconHeart_PopUp();previous_marked_icon()"></div>`;
    render_IconHeart_PopUp();
    close_IconHeart_PopUp();
}

// ==> |==>
function render_IconHeart_PopUp() {
    let container = document.getElementById('iconHeart-PopUp');
    container.innerHTML += return_IconHeart_PopUp();
    let iconHeartContainer = document.getElementById('iconHeart-PopUp-container');
    iconHeartContainer.innerHTML += return_iconHeartPopUp_container();
    return_iconHeart_content();
    iconHeart_alreadyFollowed(2);
}


function close_IconHeart_PopUp() {
    document.getElementById('iconHeart-PopUp').classList.add('d-none');
}


function show_IconHeart_PopUp() {
    document.getElementById('iconHeart-PopUp').classList.remove('d-none');
}


function return_IconHeart_PopUp() {
    return `<div class="iconHeart-PopUp-absolute absolute flex">
                    <div class="iconHeart-PopUp-container flex" id="iconHeart-PopUp-container">
                        <div class="iconHeart-spacer"></div>
                    </div>
            </div>`;
}


function return_iconHeartPopUp_container() {
    return `<div class="iconHeart-PopUp" id="iconHeart-PopUp-content">
                <p>Diesen Monat</p>
            </div>`;
}


function return_iconHeart_content() {
    let container = document.getElementById('iconHeart-PopUp-content');
    container.innerHTML += `<div class="iconHeart-items flex cursor-p" id="iconHeart-items" onclick="doNotClose(event)">
                                <div class="iconHeart-item-left flex">
                                    <img src="${posts[2]['profil-img']}"> 
                                    <p><span class="iconHeart-author">${posts[2]['author']}</span>folgt dir jetzt. <span>2 Wo.</span></p>
                                </div>
                                <p class="iconHeart-item-right-followed text-center" id="iconHeart-item-PopUp-followed" onclick="show_IconHeart_PopUp2()">Gefolgt</p>
                                <p class="iconHeart-item-right-unfollowed text-center" id="iconHeart-item-PopUp-unfollowed" onclick="follow(2);iconHeart_alreadyFollowed(2);render_Suggestions()">Folgen</p>
                            </div> `;
}


function iconHeart_alreadyFollowed(index) {
    if(posts[index]['followed'] == 'yes') {
        document.getElementById(`iconHeart-item-PopUp-followed`).classList.remove('d-none');
        document.getElementById(`iconHeart-item-PopUp-unfollowed`).classList.add('d-none');
    } else {
        document.getElementById(`iconHeart-item-PopUp-followed`).classList.add('d-none');
        document.getElementById(`iconHeart-item-PopUp-unfollowed`).classList.remove('d-none');
    }
}
// <==| <==


// ########## ICONHEART POPUP 2 ##########
// ==> 
function preload_IconHeart_PopUp2() {
    let page = document.getElementById('page');
    page.innerHTML += `<div class="popUp-fullscreen fixed" id="iconHeart-PopUp2" onclick="close_IconHeart_PopUp2();previous_marked_icon()"></div>`;
    render_IconHeart_PopUp2();
    close_IconHeart_PopUp2();
}

// ==> |==>
function render_IconHeart_PopUp2() {
    let container = document.getElementById('iconHeart-PopUp2');
    container.innerHTML = '';
    container.innerHTML += return_IconHeart_PopUp2_relative();
    let relativeContainer = document.getElementById('iconHeart-PopUp2-relative');
    relativeContainer.innerHTML += return_iconHeart_PopUp2();
}


function close_IconHeart_PopUp2() {
    document.getElementById('iconHeart-PopUp2').classList.add('d-none');
}


function show_IconHeart_PopUp2() {
    document.getElementById('iconHeart-PopUp2').classList.remove('d-none');
}


function return_IconHeart_PopUp2_relative() {
    return `<div class="iconHeart-PopUp2-relative flex centering" id="iconHeart-PopUp2-relative"></div>`;
}


function return_iconHeart_PopUp2() {
    return `<div class="iconHeart-PopUp2 flex column onclick="doNotClose(event)">
                <div class="iconHeart-PopUp2-top flex">
                    <img src="img/profiles/eric_profil.jpg">
                    <p>Solltest du deine Meinung ändern, musst du erneut eine Beitrittsanfrage für @eric_cire stellen.</p>
                </div>    
                <p class="cursor-p" onclick="unFollow(2);iconHeart_alreadyFollowed(2);close_IconHeart_PopUp2();render_Suggestions()">Nicht mehr folgen</p>
                <p class="cursor-p" onclick="close_IconHeart_PopUp2();doNotClose(event)">Abbrechen</p>
            </div>`;
}
// <==| <==

// ########## CONTENT ITEM INFO ##########
function preload_item_info_PopUp_container() {
    let page = document.getElementById('page');
    page.innerHTML += `<div class="popUp-fullscreen fixed" id="item-info-PopUp" onclick="close_item_info_PopUp()"></div>`;
    close_item_info_PopUp();
}


function render_item_info_PopUp(index) {
    let popupContainer = document.getElementById('item-info-PopUp');
    popupContainer.innerHTML += return_item_info_PopUp(index);
}


function return_item_info_PopUp(index) {
    return `<div class="item-info-PopUp-container flex centering">
                <div class="item-info-PopUp flex column">
                    <p onclick="open_Sorry_PopUp()">Melden</p>
                    <p onclick="unFollow(${index});render()">Nicht mehr folgen</p>
                    <p onclick="open_Sorry_PopUp()">Zu Favoriten hinzufügen</p>
                    <p onclick="open_Sorry_PopUp()">Beitrag ansehen</p>
                    <p onclick="open_Sorry_PopUp()">Teilen in ...</p>
                    <p onclick="open_Sorry_PopUp()">Link kopieren</p>
                    <p onclick="open_Sorry_PopUp()">Einbetten</p>
                    <p onclick="close_item_info_PopUp()">Abbrechen</p>
                </div>
            </div>`;
}


function close_item_info_PopUp() {
    document.getElementById('item-info-PopUp').classList.add('d-none');
}


function show_item_info_PopUp(index) {
    document.getElementById('item-info-PopUp').innerHTML = '';
    render_item_info_PopUp(index);
    document.getElementById('item-info-PopUp').classList.remove('d-none');
}


function unFollow(index) {
    posts[index]['followed'] = 'no';
    setObject();
}


function follow(index) {
    posts[index]['followed'] = 'yes';
    setObject();
}