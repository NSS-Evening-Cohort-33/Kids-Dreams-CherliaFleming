import { getChildren, getCelebrities } from "./database.js"

const children = getChildren()
const celebrities = getCelebrities()

export const Kids = (children) => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

addEventListener("click", (clickEvent) => {
    const childId = parseInt(clickEvent.target.dataset.id)

    if (clickEvent.target.dataset.type === "child") {
        for (const child of children) {
            if(childId === child.id){
                window.alert(`
                    ${child.name} wish is ${child.wish}
                `)
            }
    }
    
}

})
    

