import { getWheels } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheels") {
            window.alert(`User chose ${event.target.value} wheels.`)
            
                }
        }
)

export const wheelsFunction = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = wheels.map(wheelsObj => {
        return `<li>
            <input type="radio" name="wheels" value="${wheelsObj.rimType}" /> ${wheelsObj.rimType}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}
