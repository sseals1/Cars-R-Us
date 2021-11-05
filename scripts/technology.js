import { getTechnology,setTechnology } from "./database.js"

const technology = getTechnology()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "technology") {
            setTechnology(parseInt(changeEvent.target.value))
        }
    }
)

export const technologyFunction = () => {
    let html = `<select id="technology">`
    html += `<option value="0">Select Technology...</option>`

    // Use .map() for converting objects to <li> elements
    const newTechArray = technology.map(technologyObj => {
        return `
            <option value="${technologyObj.id}"> ${technologyObj.packages}</option>
        `
    })

    html += newTechArray.join("")
    html += "</select>"

    return html
}
