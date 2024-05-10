class Header extends HTMLElement {
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
      header{
        align-items: center;
        display: flex;
        justify-content: space-between;
        padding: 0.25rem 20rem;
        background-color: red;
      }
      </style>

      <header>
        <slot>
      </header>
      `
  }
}

customElements.define('header-component', Header)
