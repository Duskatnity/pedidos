class ArticleRows extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
      <style>
      .article-list {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5rem;
      }

      .article {
          margin-right: 20px;
      }

      .article img {
          width: 300px;
          height: 200px;
          object-fit: cover;
      }

      .article p {
          margin-top: 5px;
      }
      </style>

      <div class="article-list">
        <div class="article">
          <img src="imagen1.jpg" alt="Imagen 1">
          <p>Descripción de la imagen 1.</p>
        </div>
        <div class="article">
          <img src="imagen2.jpg" alt="Imagen 2">
          <p>Descripción de la imagen 2.</p>
        </div>
        <div class="article">
          <img src="imagen3.jpg" alt="Imagen 3">
          <p>Descripción de la imagen 3.</p>
        </div>
      </div>
      `
  }
}

customElements.define('article-rows-component', ArticleRows)
