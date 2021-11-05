import { getPaintColors, setColors } from "./database.js"


const colors = getPaintColors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "colors") {
            setColors(parseInt(changeEvent.target.value))
            // const chosenOption = chamgeEvent.target.value
            // window.alert(`Yoou've chose for your primary color`)
            // console.log (chosenOption)
        }
    }
)








export const colorsFunction = () => {
    let html = `<select id=colors>`
    html += `<option value="0">Select Colors...</option>`

    // Use .map() for converting objects to <li> elements
    const colorItems = colors.map(colorsObj => {
        return `<li>
            <option value="${colorsObj.id}"> ${colorsObj.name}</option>
        </li>`
    })

    html += colorItems.join("")
    html += "</select>"

    return html
}
