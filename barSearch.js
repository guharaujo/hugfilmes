const TMDB_ENDPOINT_BASE_SEARCH = 'https://api.themoviedb.org/3';
const API_KEY_SEARCH = '867304b3aa01eb018ca96fc57f0e53e5'

async function RealizarPesquisa() {
    let nomeFilme = $('#search').val();

    sessionStorage.setItem('busca', nomeFilme)

    return await $.ajax({
        url: TMDB_ENDPOINT_BASE_SEARCH + "/search/movie",
        data: {
            api_key: API_KEY_SEARCH,
            query: nomeFilme
        }
    }).done(function(data) {
        return data;
    });
}

$(document).ready(function() {
    $('#btn_search').click(function(){
        let search = RealizarPesquisa().then(function(data) {
            console.log(data)
            return data;
        });
    });
});
