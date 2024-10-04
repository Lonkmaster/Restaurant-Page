

function contact(content) {

    const wrapper = (() => {
        const wrapper = document.createElement("div")
        wrapper.classList.add('wrapper3')    
        content.appendChild(wrapper)
        return wrapper
    })()

    const bodyDivContant = document.createElement('div');
    bodyDivContant.classList.add("bodyDivContant");
    wrapper.appendChild(bodyDivContant);

    const makeReservation = document.createElement('div');
    makeReservation.classList.add("makeReservation");
    makeReservation.textContent = "Make A Reservation"
    bodyDivContant.appendChild(makeReservation);

    const secondContantDiv = document.createElement("div");
    secondContantDiv.classList.add("secondContantDiv");
    bodyDivContant.appendChild(secondContantDiv);
    
    const contactText = document.createElement("div");
    contactText.textContent = "If you would love to try our real hood food, drop us a call!"
    secondContantDiv.appendChild(contactText);
    
    const phoneNumber = document.createElement("div");
    phoneNumber.classList.add("phoneNumber");
    phoneNumber.textContent = "Call Us: 612-123-454";
    secondContantDiv.appendChild(phoneNumber);

    const contactEmail = document.createElement("div");
    contactEmail.classList.add("contactEmail");
    contactEmail.textContent = "Contact us via Email: HungryGrubSpot@gmail.com";
    secondContantDiv.appendChild(contactEmail);
    



    


    
}

export default contact