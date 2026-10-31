import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}

addEventListener("click", (clickEvent) => {
    const celebId = parseInt(clickEvent.target.dataset.id)

    if (clickEvent.target.dataset.type === "celebrity") {
        for (const celebrity of celebrities) {
            if(celebId === celebrity.id){
                window.alert(`
                    ${celebrity.name} is a ${celebrity.sport} player.
                `)
            }
    }
    
}

})
    