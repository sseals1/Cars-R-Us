import { carsRus } from "./carsRus.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = carsRus()
}

renderAllHTML()