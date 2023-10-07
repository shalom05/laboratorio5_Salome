import "./components/export"

class AppContainer extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            const stylesheetLink = this.ownerDocument.createElement("link")
            stylesheetLink.setAttribute("rel", "stylesheet")
            stylesheetLink.setAttribute("href", "/src/index.css")
            this.shadowRoot.appendChild(stylesheetLink)

            const bigContainer = this.ownerDocument.createElement("big-container")
            this.shadowRoot.appendChild(bigContainer)

            const canvas = this.ownerDocument.createElement("canvas-div")
            this.shadowRoot.appendChild(canvas)
        }
    }
}

customElements.define("app-container", AppContainer)