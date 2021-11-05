import { getInteriors, setInteriors } from "./database.js"

const interiors = getInteriors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interiors") {
            setInteriors(parseInt(changeEvent.target.value))
            // window.alert(`You've chose ${interiors.name} for your primary color`)
        }
    }
)

export const interiorsFunction = () => {
    let html = `<select id="interiors">`
    html += `<option value="0">Select Interior...</option>`
    
    // Use .map() for converting objects to <li> elements
    const listItems = interiors.map(interiorsObj => {
        return `
       <option value=${interiorsObj.id}> ${interiorsObj.fabric}</option>
             `
        
        
        
        
        
    })
    
    html += listItems.join("")
    html += `</select>`

    return html
}
