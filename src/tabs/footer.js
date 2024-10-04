
function footer(footer) {
    
    const footerBottomDiv = document.createElement("div");
    footerBottomDiv.classList.add("footerBottomDiv");
    footer.appendChild(footerBottomDiv)

    const footerTitleName = document.createElement("div");
    footerTitleName.textContent = "Hungry Grub Spot";
    footerBottomDiv.appendChild(footerTitleName);

    const madeByDiv = document.createElement("div");
    madeByDiv.classList.add("madeByDiv");
    footer.appendChild(madeByDiv);

    const madeByName = document.createElement("div");
    madeByName.textContent = "Made By Lonkmaster";
    madeByDiv.appendChild(madeByName);

    const imgIcon = document.createElement("div");

    return {footer, footerBottomDiv, madeByDiv}

}


export default footer