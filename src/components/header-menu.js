class Menu extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  async connectedCallback () {
    await this.loadData()
    await this.render()
  }

  async loadData () {
    this.data = {
      link: '/',
      title: 'Logo'
    }
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
      <style>
        .logo {
          align-items: left;
          cursor: pointer;
          flex-wrap: nowrap;
          gap: 2rem;
        }

        .logo svg {
          height: 50px;
        }
      
      </style>
      <div class="logo">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </div>
      `
  }
}

customElements.define('menu-component', Menu)
