import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const base_url = "https://api.themoviedb.org/3";
const img_path = "https://image.tmdb.org/t/p";
const api_key = "bdabec01b9caa770a123b1f624142696";

const getMovie = () => {
    axios
        .get(`${base_url}/trending/movie/week?api_key=${api_key}`)
        .then((res) => {
            if (res.status == 200) {
                renderAllMovies(res.data.results);
            }
        })
        .catch((err) => {
            showResponseMessage(err);
        });
};

const findMovie = (input) => {
    if (input == "") {
        getMovie();
    } else {
        axios
            .get(`${base_url}/search/movie?query="${input}"&api_key=${api_key}`)
            .then((res) => {
                if (res.status == 200) {
                    renderAllMovies(res.data.results);
                }
            })
            .catch((err) => {
                showResponseMessage(err);
            });
    }
};

const showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
};

const renderAllMovies = (movies) => {
    const listMovie = document.querySelector("#mv-list");
    listMovie.innerHTML = "";

    movies.forEach((movie) => {
        listMovie.innerHTML += `
            <movie-item
                src="${img_path}/w500${movie.poster_path}"
                title="${movie.original_title}"
                release="${movie.release_date}"
                vote="${movie.vote_average}"
                class="col-md-4 col-lg-3 col-sm-6 mb-2"
            >
            </movie-item>
        `;
    });
};
const keyword = document.getElementById("search-keyword");
document.getElementById("btn-search").addEventListener("click", (e) => {
    e.preventDefault();
    findMovie(keyword.value);
});
getMovie();
