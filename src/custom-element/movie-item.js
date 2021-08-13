class MovieItem extends HTMLElement {
    connectedCallback() {
        this.src = this.getAttribute("src") || null;
        this.title = this.getAttribute("title") || null;
        this.vote = this.getAttribute("vote") || null;
        this.release = this.getAttribute("release") || null;

        this.innerHTML = `
        <div>
            <div class="card">
                <img src="${this.src}" class="card-img-top" alt="${this.title} Poster" />
                <div class="card-body">
                    <h5 class="card-title">${this.title}</h5>
                    <div class="card-text">
                        <p>Release Date: ${this.release}</p>
                        <p>Rating: <strong>${this.vote}</strong></p>
                    </div>
                </div>
            </div>
        </div>
    `;
    }
}

customElements.define("movie-item", MovieItem);
