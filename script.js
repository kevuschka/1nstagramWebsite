function render() {
    render_page();
    getObject();
    preload();
    preload_responsive(); 
    render_Header();
    render_Content();
}


function renderExplore() {
    render_explore();
    getObject();
    preload();
    preload_responsive(); 
    render_Header();
    open_explore_header_icon();
    mark_headerIcon_compass();
}


function preload_responsive() {
    preload_responsive_header();
    preload_responsive_footer();
    preload_search_PopUp_resp();
}


function preload() {
    preload_Logo_PopUp();
    preload_Sorry_PopUp();
    preload_Searchbar_input();
    preload_IconPlus_PopUp();
    preload_IconHeart_PopUp();
    preload_IconProfil_PopUp();
    preload_item_info_PopUp_container();
    preload_IconHeart_PopUp2();
}


let posts = [
    {
        'author': 'mia_Ngy',
        'profil-img': 'img/profiles/mia_profil.jpg',
        'post-img': 'img/profiles/mia_post.jpg',
        'description': 'Danke an den Fotographen William Tedos!',
        'location': 'Tokyo',
        'likes': 134,
        'comment': [],
        'heart': 'no',
        'time': 5,
        'followed':'yes',
    },
    {
        'author': 'chicken.alive',
        'profil-img': 'img/profiles/chicken_profil.jpg',
        'post-img': 'img/profiles/chicken_post.jpg',
        'description': 'Just me and myself',
        'location': 'Botanischer Garten Osnabrück',
        'likes': 12,
        'comment': [],
        'heart': 'no',
        'time': 7,
        'followed':'yes',
    },
    {
        'author': 'eric_cire',
        'profil-img': 'img/profiles/eric_profil.jpg',
        'post-img': 'img/profiles/eric_post.jpg',
        'description': '',
        'location': 'Hamburg',
        'likes': 53,
        'comment': [],
        'heart': 'no',
        'time': 7,
        'followed':'yes',
    },
    {
        'author': 'the_ken',
        'profil-img': 'img/profiles/ken_profil.jpg',
        'post-img': 'img/profiles/ken_post.jpg',
        'description': 'Home Sweet Home',
        'location': 'Philadelphia',
        'likes': 37,
        'comment': [],
        'heart': 'no',
        'time': 10,
        'followed':'yes',
    },
    {
        'author': 'la.musica',
        'profil-img': 'img/profiles/music_profil.jpg',
        'post-img': 'img/profiles/music_post.jpg',
        'description': 'Me in a green shirt! It was a fun evening :)',
        'location': 'New York',
        'likes': 368,
        'comment': [],
        'heart': 'no',
        'time': 12,
        'followed':'yes',
    },
    {
        'author': 'sportmania',
        'profil-img': 'img/profiles/sport_profil.jpg',
        'post-img': 'img/profiles/sport_post.jpg',
        'description': 'Danke gehen raus an meinen Fotographen Eric für diesen Schnappschuss. See u soon',
        'location': 'Schwarzwald',
        'likes': 700,
        'comment': [],
        'heart': 'no',
        'time': 17,
        'followed':'yes',
    },
    {
        'author': 'dominik_dorris',
        'profil-img': 'img/profiles/dominik_profil.jpg',
        'post-img': 'img/profiles/dominik_post.jpg',
        'description': '',
        'location': 'Everywhere',
        'likes': 125,
        'comment': [],
        'heart': 'no',
        'time': 20,
        'followed':'yes',
    },
    {
        'author': 'best.practices',
        'profil-img': 'img/profiles/practices_profil.jpg',
        'post-img': 'img/profiles/practices_post.jpg',
        'description': 'The morning is the most important time of my day ;)',
        'location': 'Norwegen',
        'likes': 33,
        'comment': [],
        'heart': 'no',
        'time': 24,
        'followed':'yes',
    },
    {
        'author': 'lunatic',
        'profil-img': 'img/profiles/lunatic_profil.jpg',
        'post-img': 'img/profiles/lunatic_post.jpg',
        'description': 'Making Cockteils. Spaß beiseite, so sieht mein Alltag aus :D',
        'location': 'Institut für Lebensmittelforschung Rhein',
        'likes': 18,
        'comment': [],
        'heart': 'no',
        'time': 25,
        'followed':'no',
    },
    {
        'author': 'best_quotes4ever',
        'profil-img': 'img/profiles/quotes_profil.jpg',
        'post-img': 'img/profiles/quotes_post.jpg',
        'description': 'SUZY KASSEM you are so right!',
        'location': '',
        'likes': '30',
        'comment': [],
        'heart': 'no',
        'time': 30,
        'followed':'no',
    }
    
];


