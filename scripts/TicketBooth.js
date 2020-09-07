const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

// eventHub.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id === "rideTicket") {
//         const rideEvent = new CustomEvent("rideTicketPurchased", {
//             detail: {
//                 rideButtonClicked: true
//             }
//         })

//         eventHub.dispatchEvent(rideEvent)
//         // console.log("clicked");
//     }
// })

// eventHub.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id === "foodTicket") {
//         const foodEvent = new CustomEvent("foodTicketPurchased", {
//             detail: {
//                 foodButtonClicked: true
//             }
//         })

//         eventHub.dispatchEvent(foodEvent)
//         // console.log("clicked");
//     }
// })

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
        </div>
    `
}