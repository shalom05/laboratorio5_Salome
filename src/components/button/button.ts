import { buttonType } from "../../types/buttonTypes";
import { dispatch } from "../../store/index";
import { changeEyes, changeNose, changeMouth } from "../../store/actions";

const enum changeButtonProperties {
    img = "img",
    id = "id",
    type = "type"
}

export class changeButton extends HTMLElement {
    properties: Record<changeButtonProperties, string> = {
        img: "",
        id: "",
        type: ""
    }
    
    static get observedAttributes() {
        const properties: Record<changeButtonProperties, null> = {
            img: null,
            id: null,
            type: null
        }
        return Object.keys(properties); 
    }
    
    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }

    attributeChangedCallback(propName: changeButtonProperties, oldValue: string, newValue: string) {
        switch (propName) {
            case changeButtonProperties.img:
                this.properties.img = newValue
                break;
            case changeButtonProperties.id:
                this.properties.id = newValue
                break;
            case changeButtonProperties.type:
                this.properties.type = newValue
                break;
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
        link.setAttribute("href", "/src/components/button/button.css")
        this.shadowRoot?.appendChild(link)

        const button = this.ownerDocument.createElement("div")
        button.classList.add("changeButton")
        this.shadowRoot?.appendChild(button)

        const img = this.ownerDocument.createElement("img")
        img.setAttribute("src", `${this.properties.img}`)
        button.appendChild(img)
        
        button.addEventListener("click", () => {
            if (this.properties.type === buttonType.eyes) {
                dispatch(
                    changeEyes(this.properties.id)
                )
            }

            if (this.properties.type === buttonType.mouth) {
                dispatch(
                    changeMouth(this.properties.id)
                )
            }

            if (this.properties.type === buttonType.nose) {
                dispatch(
                    changeNose(this.properties.id)
                )
            }
        })
    }
}

customElements.define("change-button", changeButton)