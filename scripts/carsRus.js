
import { colorsFunction } from "./colors.js"
import { wheelsFunction } from "./wheels.js"
import { technologyFunction } from "./technology.js"
import { interiorsFunction } from "./interior.js"
import { ordersFunction } from "./Orders.js"



export const carsRus = () => {
    return `
        <h1>Cars-r-Us</h1>

        <article class="choices">
            <section class="choices__colors options">
                <h2>Colors</h2>
                ${colorsFunction()}
            </section>
            <section class="choices__interiors options">
                <h2>Interiors</h2>
                ${interiorsFunction()}
            </section>
            <section class="choices__technology options">
                <h2>Technology</h2>
                ${technologyFunction()}
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${wheelsFunction()}
            </section>
        </article>
        <br></br>
        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>
        
            
        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${ordersFunction()}
        </article>
        
    `
}
