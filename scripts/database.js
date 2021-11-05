const database = {


    colors: [
        
        { id: 1, name: "Midnight Blue", price: 150 },
        { id: 2, name: "silver",price: 150 },
        { id: 3, name: "Firebrick", price: 150 },
        { id: 4, name: "Spring Green", price: 150 }

    ],



    interior: [
        { id: 1, fabric: "Beige Fbric", price: 150 },
        { id: 2, fabric: "Charcoal fabric", price: 150 },
        { id: 3, fabric: "White Leather", price: 150 },
        { id: 4, fabric: "Black Leather", price: 150 }

    ],

    technology: [
        { id: 1, packages: "Basic Package", price: 150 }, //(basic sound system)
        { id: 2, packages: "Navigation Package", price: 150 }, //(includes integrated navigation controls)
        { id: 3, packages: "Visibility Package", price: 150 }, //(includes side abd rear caneras)
        { id: 4, packages: "Utility Package", price: 150 } // (includes navigation and visibility packages)
        
    ],

    wheels: [
        { id: 1, rimType: "17-inch Pair Radial", price: 450 },
        { id: 2, rimType: "17-inch Pair Radial Black",price: 475 },
        { id: 3, rimType: "18-inch Pair Spoke Silver", price: 550 },
        { id: 4, rimType: "18-inch Pair Spoke Black", price: 575 }
    ],


    customOrders: [
        {   
            id: 1, 
            interiorId: 1, 
            paintColorsId: 1, 
            technologyId: 1, 
            wheelsId: 1, 
            timestamp: 1614659931693
        }
        
        
    ],
    
    orderBuilder: 
    {
        
    },
    
}



export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    // const index = lastIndexOf(database.customOrders)
    // newOrder.id = index.id + 1
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1
    

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

// export const addCustomOrder = () => {
//     const date = new Date()
//     database.orderBuilder.timestamp = date.toLocaleString()
//     if (database.orders.length === 0) {
//         database.orderBuilder.id = 1
//     } else {
//         const lastIndex = database.customOrders.length - 1
//         const newId = database.customOrders[lastIndex].id + 1
//         database.orderBuilder = newId
//     }
// }
// database.customOrders.push(database.orderBuilder)
// database.orderBuilder = {}
// document.dispatchEvent(new CustomEvent("orderStateChanged"))


export const getPaintColors = () => {
    return database.colors.map(colors => ({ ...colors }))
}

export const getInteriors = () => {
    return database.interior.map(interior => ({ ...interior }))
}

export const getTechnology = () => {
    return database.technology.map(technology => ({ ...technology }))
}

export const getWheels = () => {
    return database.wheels.map(wheels => ({ ...wheels }))
}

export const getOrders = () => {
    return database.customOrders.map(customOrders => ({...customOrders}))
}



export const setColors = (id) => {
    database.orderBuilder.paintColorsId = id
}
export const setInteriors = (id) => {
    database.orderBuilder.interiorId = id
}
export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}
export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id
}





