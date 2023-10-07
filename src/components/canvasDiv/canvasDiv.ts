import "../export"
import { addObserver } from "../../store/index"

export class canvasDiv extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        addObserver(this)
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ""

            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/components/canvasDiv/canvasDiv.css")
            this.shadowRoot?.appendChild(link)

            const canvas = this.ownerDocument.createElement("div")
            canvas.setAttribute("id", "canvas")
            this.shadowRoot?.appendChild(canvas)

            const imgFace = this.ownerDocument.createElement("img")
            imgFace.setAttribute("id", "imgFace")
            imgFace.setAttribute("src", "/src/resources/face.png")
            canvas.appendChild(imgFace)

            const part1 = this.ownerDocument.createElement("elements-div")
            part1.setAttribute("img", "/src/resources/eyes1.png")
            part1.setAttribute("id", "eyes1")
            canvas.appendChild(part1)

            const part2 = this.ownerDocument.createElement("elements-div")
            part2.setAttribute("img", "/src/resources/eyes2.png")
            part2.setAttribute("id", "eyes2")
            canvas.appendChild(part2)

            const part3 = this.ownerDocument.createElement("elements-div")
            part3.setAttribute("img", "/src/resources/eyes3.png")
            part3.setAttribute("id", "eyes3")
            canvas.appendChild(part3)

            const part4 = this.ownerDocument.createElement("elements-div")
            part4.setAttribute("img", "/src/resources/mouth1.png")
            part4.setAttribute("id", "mouth1")
            canvas.appendChild(part4)

            const part5 = this.ownerDocument.createElement("elements-div")
            part5.setAttribute("img", "/src/resources/mouth2.png")
            part5.setAttribute("id", "mouth2")
            canvas.appendChild(part5)

            const part6 = this.ownerDocument.createElement("elements-div")
            part6.setAttribute("img", "/src/resources/mouth3.png")
            part6.setAttribute("id", "mouth3")
            canvas.appendChild(part6)

            const part7 = this.ownerDocument.createElement("elements-div")
            part7.setAttribute("img", "/src/resources/nose1.png")
            part7.setAttribute("id", "nose1")
            canvas.appendChild(part7)

            const part8 = this.ownerDocument.createElement("elements-div")
            part8.setAttribute("img", "/src/resources/nose2.png")
            part8.setAttribute("id", "nose2")
            canvas.appendChild(part8)

            const part9 = this.ownerDocument.createElement("elements-div")
            part9.setAttribute("img", "/src/resources/nose3.png")
            part9.setAttribute("id", "nose3")
            canvas.appendChild(part9)
        }
    }
}

customElements.define("canvas-div", canvasDiv)