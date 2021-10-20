import { getInteriors } from "./database.js"

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interiors") {
            window.alert(`You've chose ${interiors.name} for your primary color`)
        }
    }
)

export const interiorsFunction = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = interiors.map(interiorsObj => {
        return `<li>
            <input type="radio" name="interiors" value="${interiorsObj.id}" /> ${interiorsObj.fabric}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}
