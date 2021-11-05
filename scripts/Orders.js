import { getPaintColors, getInteriors, getTechnology, getWheels, getOrders, addCustomOrder } from "./database.js"





document.addEventListener(
    "click",
    (changeEvent) => {
        if (changeEvent.target.id === "orderButton") {
            addCustomOrder()
            
        }
    }
)







const buildNewOrder = (Order) => {
    
    
    
    const technologies = getTechnology()
    const findTechnologies = technologies.find(
        (technology) => {
            return technology.id === Order.technologyId
        }
    )
    const colors = getPaintColors()
    const findColors = colors.find(
        (color) => {
            return color.id === Order.paintColorsId
        }
    )
    const interiors = getInteriors()
    const findInteriors = interiors.find(
        (interior) => {
            return interior.id === Order.interiorId
        }
    )
    const wheels = getWheels()
    const findWheels = wheels.find(
        (wheel) => {
            return wheel.id === Order.wheelsId
        }
    )

    
        let totalCost = 0
        totalCost += findTechnologies.price
        totalCost += findColors.price
        totalCost += findInteriors.price
        totalCost += findWheels.price
        
    // let totalCost = findWheels.price + findTechnologies.price + findInteriors.price + findColors.price
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
    Order #${Order.id} placed on ${Order.timestamp} costs ${costString}
    </li>`
}

/*
    Can you explain why the state variable has to be inside
    the component function for Orders, but not the others?
    */
   
   export const ordersFunction = () => {
       const orders = getOrders()
       let html = "<ul>"
       
       const listItems = orders.map(buildNewOrder)
       
       html += listItems.join("")
       html += "</ul>"
       
    return html
}

