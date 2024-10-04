import menu from "./menu"


function renderHomepage (content) {
    ///wrapper
    const wrapper = (() => {
        const wrapper = document.createElement("div")
        wrapper.classList.add('wrapper')    
        content.appendChild(wrapper)
        return wrapper
    })()
    
    
    ///container for text and pic
    const containerTextImage = document.createElement("div");
    containerTextImage.classList.add("containerTextImage");
    wrapper.appendChild(containerTextImage)

    // flex container
    const containerOne = document.createElement("div")
    containerOne.classList.add("containerOne")
    containerTextImage.appendChild(containerOne)
    
    // header
    const headerOne = document.createElement("h2")
    headerOne.classList.add("headerOne")
    headerOne.textContent = "Try our good food!"
    containerOne.appendChild(headerOne)
    
    // little section for a paragraph
    const shortSection = document.createElement('p')
    shortSection.classList.add("shortSection")
    shortSection.innerHTML = `<p>
    this is a good place to try food, you gotta give it a try
    if you dont i will chip tf out, check out the menu!
    </p>`
    containerOne.appendChild(shortSection)
    
    
    //button menu
    const contentcheck = document.getElementById("content");
    const menuButton = document.createElement("button");
    menuButton.classList.add("menuButton");
    menuButton.setAttribute("id", "menuButton");
    menuButton.textContent = "Menu";
    containerOne.appendChild(menuButton);
    menuButton.addEventListener("click", () => {
        function clearContents() {
            content.innerHTML = "";
        }
        clearContents();
        menu(contentcheck);
    });

    //picture
    const bodyPicture = document.createElement('img')
    bodyPicture.classList.add("centerPicture")
    containerTextImage.appendChild(bodyPicture)

    ///Hours 
    const hoursDiv = document.createElement("div");
    hoursDiv.classList.add("hoursDiv");
    wrapper.appendChild(hoursDiv);

    const hoursheader = document.createElement("div");
    hoursheader.classList.add("hoursHeader");
    hoursheader.textContent = "Store Hours"
    hoursDiv.appendChild(hoursheader)

    const hoursText = document.createElement("div");
    hoursText.classList.add("hoursText")
    hoursText.innerHTML = `
    <div> Monday - Friday 
        <div> 8:00 am - 10:30 pm </div>
    </div>
    <div> Saturday - Sunday 
        <div> 10:00 am - 9:00 pm </div>
    </div>`
    hoursDiv.appendChild(hoursText);


}

export default renderHomepage