const database = {
    
        
        colors: [
            {
            id: 1,
            name: "silver",
            price: 150
            },
            {
            id: 2,
            name: "Firebrick",
            price: 150
            },
            {
            id: 3,
            name: "Spring Green",
            price: 150
            },
            {
            id: 4,
            name: "Midnight Blue"
            }

        ],
        
    
    
        interior: [
            {
            id: 1,
            fabric: "Beige Fbric", 
            price: 150
            },
            {
            id: 2,
            fabric: "Charcoal fabric",
            price: 150
            },
            {
                id: 3,
                fabric: "White Leather",
                price: 150
            },   
            {
                id: 4,
                fabric: "Black Leather",
                price: 150
            }
                
            ],
        
        technology: [ 
        {
            id: 1,
            packages: "Basic Package", //(basic sound system)
            price: 150
        },
        {
            id: 2,
            packages: "Navigation Package", //(includes integrated navigation controls)
            price: 150
        },
        {
            id: 3,
            packages: "Visibility Package", //(includes side abd rear caneras)
            price: 150
        },
        {
            id: 4,
            packages: "Utility Package", // (includes navigation and visibility packages)
            price: 150
        }
            ],
    
        wheels: [
        {
            id: 1,
            rimType: "17-inch Pair Radial",
            price: 150
        },
        {
            id: 2,
            rimType: "17-inch Pair Radial Black",
            price: 150
        },
        {
            id: 3,
            rimType: "18-inch Pair Spoke Silver",
            price: 150
        },
        {
            id: 4,
            rimType: "18-inch Pair Spoke Black",
            price: 150
        }
            ],

       
        customOrders: [
        {
            id: 1,
            interiorId: 2,
            paintColorsId: 1,
            technologyId: 3,
            wheelsId: 4
        },
        {
            id: 2,
            interiorId: 2,
            paintColorsId: 1,
            technologyId: 3,
            wheelsId: 4
        },
        {
            id: 3,
            technologyId: 3,
            interiorId: 2,
            paintColorsId: 1,
            wheelsId: 4
        }, 
        {
            id: 4,
            wheelsId: 4,
            technologyId: 3,
            interiorId: 2,
            paintColorsId: 1,
        }
            ]
}




export const getPaintColors = () => {
    return database.colors.map(colors => ({...colors}))
}

export const getInteriors= () => {
    return database.interior.map(interiors => ({...interiors}))
}

export const getTechnology = () => {
    return database.technology.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheels => ({...wheels}))
}
export const customOrders = () => {
    return database.orders.map(wheels => ({...wheels}))
}