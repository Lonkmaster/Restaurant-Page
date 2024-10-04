
function header(header) {
    
    const titleTop = document.createElement("div")
    titleTop.classList.add("titleTop")
    titleTop.textContent = "Hungry Grub Spot"
    
    const options = document.createElement('nav')
    options.classList.add('options')

    const home = document.createElement('a')
    home.setAttribute('id', "home")
    home.setAttribute('href', "#home")
    home.textContent = "Home"
    options.appendChild(home)

    const menu = document.createElement("a")
    menu.setAttribute('id', "menu")
    menu.setAttribute('href', '#menu')
    menu.textContent = "Menu"
    options.appendChild(menu)

    const about = document.createElement("a")
    about.textContent = "About"
    about.setAttribute('id', 'about')
    about.setAttribute('href', '#about')
    options.appendChild(about)

    const contact = document.createElement("a")
    contact.textContent = "Contact"
    contact.setAttribute('id', 'contact')
    contact.setAttribute('href', '#contact')
    options.appendChild(contact)


    header.appendChild(options)
    header.appendChild(titleTop)
    return {header,home, menu, about, contact}
}

export default header