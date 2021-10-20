import { getPaintColors } from "./database.js"

const colors = getPaintColors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "colors") {
            const chosenOption = chamgeEvent.target.value
            console.log (chosenOption)
            window.alert(`Yoou've chose for your primary color`)
        }
    }
)

export const colorsFunction = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = colors.map(colors => {
        return `<li>
            <input type="radio" name="colors" value="${colors.id}" /> ${colors.name}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}
