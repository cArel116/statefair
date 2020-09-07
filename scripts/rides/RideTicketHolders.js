const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolders = () => {
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "rideTicket") {
            const rideEvent = new CustomEvent("rideTicketPurchased", {
                detail: {
                    ticketButtonClicked: true
                }
            })
            eventHub.dispatchEvent(rideEvent)
            // console.log("clicked");
        }
        contentTarget.innerHTML += `
            <div class="person rider"></div>
        `
    })
}

