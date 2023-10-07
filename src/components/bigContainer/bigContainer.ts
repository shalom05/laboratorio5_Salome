import "../export"
import { addObserver } from "../../store/index"
import { buttonType } from "../../types/buttonTypes"
import { eyesTypes, mouthTypes, noseTypes } from "../../types/store"

export class BigContainer extends HTMLElement {
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
            link.setAttribute("href", "/src/components/bigContainer/bigContainer.css")
            this.shadowRoot?.appendChild(link)

            const bigContainer = this.ownerDocument.createElement("section")
            this.shadowRoot?.appendChild(bigContainer)

            const buttonRow1 = this.ownerDocument.createElement("div")
            buttonRow1.classList.add("buttonRow")
            bigContainer.appendChild(buttonRow1)

            const button1 = this.ownerDocument.createElement("change-button")
            button1.setAttribute("img", "/src/resources/eyes1.png")
            button1.setAttribute("id", `${eyesTypes.eyes1}`)
            button1.setAttribute("type", `${buttonType.eyes}`)
            buttonRow1.appendChild(button1)

            const button2 = this.ownerDocument.createElement("change-button")
            button2.setAttribute("img", "/src/resources/eyes2.png")
            button2.setAttribute("id", `${eyesTypes.eyes2}`)
            button2.setAttribute("type", `${buttonType.eyes}`)
            buttonRow1.appendChild(button2)

            const button3 = this.ownerDocument.createElement("change-button")
            button3.setAttribute("img", "/src/resources/eyes3.png")
            button3.setAttribute("id", `${eyesTypes.eyes3}`)
            button3.setAttribute("type", `${buttonType.eyes}`)
            buttonRow1.appendChild(button3)

            const buttonRow2 = this.ownerDocument.createElement("div")
            buttonRow2.classList.add("buttonRow")
            bigContainer.appendChild(buttonRow2)

            const button4 = this.ownerDocument.createElement("change-button")
            button4.setAttribute("img", "/src/resources/mouth1.png")
            button4.setAttribute("id", `${mouthTypes.mouth1}`)
            button4.setAttribute("type", `${buttonType.mouth}`)
            buttonRow2.appendChild(button4)

            const button5 = this.ownerDocument.createElement("change-button")
            button5.setAttribute("img", "/src/resources/mouth2.png")
            button5.setAttribute("id", `${mouthTypes.mouth2}`)
            button5.setAttribute("type", `${buttonType.mouth}`)
            buttonRow2.appendChild(button5)

            const button6 = this.ownerDocument.createElement("change-button")
            button6.setAttribute("img", "/src/resources/mouth3.png")
            button6.setAttribute("id", `${mouthTypes.mouth3}`)
            button6.setAttribute("type", `${buttonType.mouth}`)
            buttonRow2.appendChild(button6)

            const buttonRow3 = this.ownerDocument.createElement("div")
            buttonRow3.classList.add("buttonRow")
            bigContainer.appendChild(buttonRow3)

            const button7 = this.ownerDocument.createElement("change-button")
            button7.setAttribute("img", "/src/resources/nose1.png")
            button7.setAttribute("id", `${noseTypes.nose1}`)
            button7.setAttribute("type", `${buttonType.nose}`)
            buttonRow3.appendChild(button7)

            const button8 = this.ownerDocument.createElement("change-button")
            button8.setAttribute("img", "/src/resources/nose2.png")
            button8.setAttribute("id", `${noseTypes.nose2}`)
            button8.setAttribute("type", `${buttonType.nose}`)
            buttonRow3.appendChild(button8)

            const button9 = this.ownerDocument.createElement("change-button")
            button9.setAttribute("img", "/src/resources/nose3.png")
            button9.setAttribute("id", `${noseTypes.nose3}`)
            button9.setAttribute("type", `${buttonType.nose}`)
            buttonRow3.appendChild(button9)
        }

    }
}

customElements.define("big-container", BigContainer)