import { getTechnology } from "./database.js"

const technology = getTechnology()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            window.alert(`You've chose ${technology.name} for your primary color`)
        }
    }
)

export const technologyFunction = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = technology.map(technologyObj => {
        return `<li>
            <input type="radio" name="tec" value="${technologyObj.id}" /> ${technologyObj.packages}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}
