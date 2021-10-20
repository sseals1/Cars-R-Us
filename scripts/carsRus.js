import { customOrders } from "./database.js"
import { colorsFunction } from "./colors.js"
import { wheelsFunction } from "./wheels.js"
import { technologyFunction } from "./technology.js"
import { interiorsFunction } from "./interior.js"



export const carsRus = () => {
    return `
        <h1>Cars-r-Us</h1>

        <article class="choices">
            <section class="choices__colors options">
                <h2>colors</h2>
                ${colorsFunction()}
            </section>
            <section class="choices__interiors options">
                <h2>interiors</h2>
                ${interiorsFunction()}
            </section>
            <section class="choices__technology options">
                <h2>technology</h2>
                ${technologyFunction()}
            </section>
            <section class="choices__wheels options">
                <h2>wheels</h2>
                ${wheelsFunction()}
            </section>
        </article>
        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
        </article>
    `
}
