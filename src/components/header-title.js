class Title extends HTMLElement {
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
        .title {
          font-size: 3rem;
          font-weight: 600;
          color: white;
        }
      </style>

      <div class="title">
        Ultima Hora
      </div>
      `
  }
}

customElements.define('header-title-component', Title)
