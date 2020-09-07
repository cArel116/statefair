const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export const FoodTicketHolders = () => {
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "foodTicket") {

            contentTarget.innerHTML += `
            <div class="person eater"></div>
            `
            const foodEvent = new CustomEvent("foodTicketPurchased", {
                detail: {
                    foodButtonClicked: true
                }
            })

            eventHub.dispatchEvent(foodEvent)
            // console.log("clicked");
        }
    })
}