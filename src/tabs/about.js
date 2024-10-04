
function about (content) {

    const wrapper = (() => {
        const wrapper = document.createElement("div")
        wrapper.classList.add('wrapper2')    
        content.appendChild(wrapper)
        return wrapper
    })()

    const aboutUsContainer = document.createElement('div')
    aboutUsContainer.classList.add("aboutUsContainer");
    wrapper.appendChild(aboutUsContainer)

    const aboutUsTitle = document.createElement('div')
    aboutUsTitle.classList.add("aboutUsTitle")
    aboutUsTitle.textContent = "Our story - from the start"
    aboutUsContainer.appendChild(aboutUsTitle)

    const aboutUsText = document.createElement('div')
    aboutUsText.classList.add("aboutUsText")
    aboutUsText.innerHTML = `
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
   quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    `
    aboutUsContainer.appendChild(aboutUsText)

    /// new container
    const secondAboutUsContainer = document.createElement('div');
    secondAboutUsContainer.classList.add("secondAboutUsContainer");
    wrapper.appendChild(secondAboutUsContainer);

    /// header and image text container
    const imageAndTextContainer = document.createElement('div');
    imageAndTextContainer.classList.add("imageAndTextContainer");
    secondAboutUsContainer.appendChild(imageAndTextContainer);

    ///header Text and paragraph container
    const headerAndText = document.createElement("div");
    headerAndText.classList.add("headerAndText");
    imageAndTextContainer.appendChild(headerAndText);

    /// Header for the rest of the about text
    const aboutUsHeader = document.createElement('h2');
    aboutUsHeader.classList.add("aboutUsHeader")
    aboutUsHeader.textContent = "Nice food check this out";
    headerAndText.appendChild(aboutUsHeader);

    ///more text
    const aboutUsFirstParagraph = document.createElement("div");
    aboutUsFirstParagraph.textContent = `we make good food, for real for real, on gang. 
    You gotta try this stuff super gas, ngl im really trying out here.`;
    headerAndText.appendChild(aboutUsFirstParagraph);

    const aboutUsSecondParagraph = document.createElement("div")
    aboutUsSecondParagraph.textContent = `A lot of the time, i really lose myself when making 
    food and it really sucks. What also sucks is im going to have to change all this text 
    later to something that fits
    `
    headerAndText.appendChild(aboutUsSecondParagraph)
    
    ///image
    const aboutUsImage = document.createElement('img')
    aboutUsImage.classList.add("aboutUsImage")
    imageAndTextContainer.appendChild(aboutUsImage)
    
    const aboutOurTeam = document.createElement("div");
    aboutOurTeam.classList.add("aboutOurTeam");
    aboutOurTeam.textContent = "About our Team";
    secondAboutUsContainer.appendChild(aboutOurTeam);
    
    ///teamdiv
    const teamDiv = document.createElement('div');
    teamDiv.classList.add("teamDiv")
    secondAboutUsContainer.appendChild(teamDiv)

    /// team maker
    function createTeam(firstname, lastname, role) {
        const theName = `${firstname}, ${lastname}`
        return {firstname, lastname, theName, role}
    }


    const team = [
        createTeam("Breandan", "Omegle", "The Waffle"),
        createTeam("Jerry", "Nappa", "Head Chef"),
        createTeam("Avalon", "Carr", "Cooker Guy"),
        createTeam("Hai", "Elemed", "The Drink"),
        createTeam("Mario", "Pennsylvania", "The Fork")
    ]

    for(let i = 0; i < team.length; i++) {
        const teamMember = document.createElement("div")
        teamMember.setAttribute("class", "teamMember")
        teamDiv.appendChild(teamMember);

        const name = document.createElement('p')
        name.setAttribute("class", "memeberName")
        teamMember.appendChild(name)
        name.textContent = `${team[i].firstname}, ${team[i].lastname}`

        const role = document.createElement('p');
        role.setAttribute("class", "kitchenRole");
        teamMember.appendChild(role)
        role.textContent = `${team[i].role}`

    }

}

export default about