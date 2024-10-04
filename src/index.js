import renderHomepage from "./tabs/homepage";
import header from "./tabs/header";
import footer from "./tabs/footer";
import about from "./tabs/about";
import menu from "./tabs/menu";
import contact from "./tabs/contact";
import "./style.css"


let elements = (function getDomElem() {
    const content = document.querySelector("#content");
    const header = document.querySelector(".header");
    const footer = document.querySelector(".footer");
    let firstTimeLoad = true;
    return {content, header, firstTimeLoad, footer,}
})()

function firstTimeDisplay() {
    elements.header = header(elements.header);
    renderHomepage(elements.content,);
    elements.footer = footer(elements.footer);
    elements.firstTimeLoad = false;
}


/// tab switching logic

function tabListener () {
    
    function clearContents() {
        elements.content.innerHTML = ""
    }

    elements.header.about.addEventListener('click', () => {
        clearContents()
        about(elements.content)
    })

    elements.header.home.addEventListener('click', () => {
        clearContents()
        renderHomepage(elements.content)
    })

    elements.header.menu.addEventListener('click', () => {
        clearContents()
        console.log(elements.content)
        menu(elements.content)
    })

    elements.header.contact.addEventListener('click', () => {
        clearContents()
        contact(elements.content)
    })
}


if (elements.firstTimeLoad == true ) {
    firstTimeDisplay()
    tabListener()
}

export default tabListener;