const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

export const GameTicketHolders = () => {
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "gameTicket") {

            contentTarget.innerHTML += `
            <div class="person rider"></div>
            `
            const gameEvent = new CustomEvent("gameTicketPurchased", {
                detail: {
                    gameButtonClicked: true
                }
            })

            eventHub.dispatchEvent(gameEvent)
            // console.log("clicked");
        }
    })
}