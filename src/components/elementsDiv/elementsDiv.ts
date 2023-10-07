import "../export"
import { state } from "../../store/index";

const enum elementsDivProperties {
    img = "img",
    id = "id"
}


export class elementsDiv extends HTMLElement {
    properties: Record<elementsDivProperties, string> = {
        img: "",
        id: ""
    }

    static get observedAttributes() {
        const properties: Record<elementsDivProperties, null> = {
            img: null,
            id: null
        }
        return Object.keys(properties);
    }

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    attributeChangedCallback(propName: elementsDivProperties, oldValue: string, newValue: string) {
        switch (propName) {
            case elementsDivProperties.img:
                this.properties.img = newValue
                break;
            case elementsDivProperties.id:
                this.properties.id = newValue
            default:
                break;
        }
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const link = this.ownerDocument.createElement("link")
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("href", "/src/components/elementsDiv/elementsDiv.css")
        this.shadowRoot?.appendChild(link)

        const image = this.ownerDocument.createElement("img")
        image.setAttribute("src", `${this.properties.img}`)
        this.shadowRoot?.appendChild(image)

        console.log(this.properties.id)

        if (state.eyes === this.properties.id || state.mouth === this.properties.id || state.nose === this.properties.id) {
            if (image.classList.contains("hiddenPart")) {
                image.classList.remove("hiddenPart")
            }
            image.classList.add(`${this.properties.id}`)
        } else {
            if (image.classList.contains("hiddenPart")) {
                image.classList.remove(`${this.properties.id}`)
            }
            image.classList.add("hiddenPart")
        }


    }
}

customElements.define("elements-div", elementsDiv)