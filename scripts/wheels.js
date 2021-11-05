import { getWheels, setWheels } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheels") {
            setWheels(parseInt(changeEvent.target.value))
            
                }
        }
)

export const wheelsFunction = () => {
    let html = `<select id="wheels">`
    html += `<option value="0">Select Wheels...</option>`
    // Use .map() for converting objects to <li> elements
    // const listItems = wheels.map(wheelsObj => {
    //     return `<li>
    //         <input type="radio" name="wheels" value="${wheelsObj.rimType}" /> ${wheelsObj.rimType}
    //     </li>`
    // })
    
    for (const wheel of wheels) {
        html += `<option value=${wheel.id}>${wheel.rimType}</option>`
    
    }
    html += "</select>"

    return html
}
