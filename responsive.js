function resp_filter() {
    clean_resp_Searchbar_results();
    if(document.getElementById('resp-searchbar-input').value) {
        let searchInput = document.getElementById('resp-searchbar-input').value;
        searchInput = searchInput.toLowerCase();
        resp_filer_loop(searchInput);
        show_resp_Searchbar_results();
    } else {
        close_resp_Searchbar_results();
    }
}


function resp_filer_loop(word) {
    for (let i = 0; i < posts.length; i++) {
        if(posts[i]['author'].toLowerCase().includes(word)) {
            document.getElementById('resp-searchbar-results').innerHTML += `<a class="resp-searchbar-results-item" href="#${posts[i]['author']}">${posts[i]['author']}</a>`;
        }
    }
}


function close_resp_Searchbar_results() {
    document.getElementById('resp-searchbar-results').classList.add('d-none');
}


function show_resp_Searchbar_results() {
    document.getElementById('resp-searchbar-results').classList.remove('d-none');
}


function clean_resp_Searchbar_results() {
    document.getElementById('resp-searchbar-results').innerHTML = '';
}