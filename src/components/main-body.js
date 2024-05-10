class MainBody extends HTMLElement {
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
        .main-body {
          display: flex;
          margin: 3rem 5rem;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          text-align: center;
        }

        .article {
          margin: 1rem 20rem;
        }

        .article-title {
          font-size: 3rem;
          font-weight: 600;
        }

        .article-title:hover {
          color: red;
          cursor: pointer;
        }

        .article-subtitle {
          font-size: 1.5rem;
          margin: 1rem 0rem;
        }
      </style>

      <div class="main-body">
        <div class="article">
          <img src="/public/imagen.webp" alt="noticia">
          <div class="article-title">
            Mallorca rebaja su tope de crecimiento turístico pero sin eliminar plazas existentes
          </div>
          <div class="article-subtitle">
            «Es el momento de poner límites», ha declarado Llorenç Galmés en una rueda de prensa donde ha anunciado que la isla pasará de tener un máximo de 430.000 a 412.000 plazas.
          </div>
        </div>
      </div>

      `
  }
}

customElements.define('main-body-component', MainBody)
