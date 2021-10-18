const database = [{
    
        
        colors: [
            {
            id: 1,
            paintColor: "silver",
            },
            {
            id: 2,
            paintColor: "Firebrick"
            },
            {
            id: 3,
            paintColor: "Spring Green"
            }

            
            "Firebrick",
            "Spring Green"
        ]
    },
    {
        interior: {
            id: 1,
            Fabric: [ 
                "Beige Fbric",
                "Charcoal Fabric",
                "White Leather",
                "Black Leather"
            ]
        },
        technology:{
            id: 1,
            packages: [
                "Basic Package", //(basic sound system)
                "Navigation Package", //(includes integrated navigation controls)
                "Visibility Package", //(includes side abd rear caneras)
                "Ultra Package" // (includes navigation and visibility packages)
            ]
    },
        wheels: {
            id: 1,
            rimType: [
                "17-inch Pair Radial",
                "17-inch Pair Radial Black",
                "18-inch Pair Spoke Silver",
                "18-inch Pair Spoke Black"
            ]

        },
        customOrder: {
            id: 1,
            paintColorsId: 1,
            interiorId: 1,
            technologyId: 1,
            wheelsId: 1 
        }

        
        
    }]
}]




export const getpaintColors = () => {
    return database.paintColors.map(paintColors => ({...paintColors}))
}

export const getInteriors= () => {
    return database.interiors.map(interiors => ({...interiors}))
}

export const getTechnology = () => {
    return database.technology.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheels => ({...wheels}))
}