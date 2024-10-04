import header from "./header"

function menu(content) {
    /// the page wrapper
    const wrapper = (() => {
        const wrapper = document.createElement("div")
        wrapper.classList.add('wrapperContainer')    
        content.appendChild(wrapper)
        return wrapper
    })()

    /// center header div
    const centerHeader =  document.createElement('div')
    centerHeader.classList.add("centerHeader")
    centerHeader.textContent = 'Food Menu'
    wrapper.appendChild(centerHeader)

    /// create item factory
    function createContainerItem(name, description, price) {
        
        const boxItems = document.createElement('div')
        boxItems.classList.add('menuItem')

        const headerItem = document.createElement('div')
        boxItems.appendChild(headerItem)

        const titleItem = document.createElement('div')
        titleItem.classList.add("titleItem")
        titleItem.textContent = name
        headerItem.appendChild(titleItem)

        const priceItem = document.createElement('div')
        priceItem.textContent = price
        headerItem.appendChild(priceItem)

        const itemDescription = document.createElement("div")
        itemDescription.textContent = description
        boxItems.appendChild(itemDescription)

        return boxItems
    }

    ///second wrapperContainer
    const menuWrapperContainer = document.createElement("div");
    menuWrapperContainer.classList.add("menuWrapperContainer");
    wrapper.appendChild(menuWrapperContainer)

    /// breakfast container div
    const breakFastDiv = document.createElement('div')
    breakFastDiv.classList.add('breakFastDiv')
    menuWrapperContainer.appendChild(breakFastDiv)


    let breakfastArray = [
        "Pancakes-Combo", 
        "Waffles", 
        "Cheesy Omelette", 
        "BreakFast Burritos with Sausage, Egg",
        "the breakfast Taco",
    ]

    let breakfastDescrptions = [
        "the pancake-combo contains, bacon, egg (your choice), and a side of hash browns",
        "The waffles are just waffles",
        "The Cheesy Omelette is a pretty good",
        "Breakfast burritos are super tasty",
        "the breakfast taco is like the breakfast burrito but it's in a crunchy shell",

    ]

    /// first menu item
    breakFastDiv.appendChild(createContainerItem(breakfastArray[0], "13$", breakfastDescrptions[0]))
    ///second menu item
    breakFastDiv.appendChild(createContainerItem(breakfastArray[1], "6.50$", breakfastDescrptions[1]))
    ///third menu item
    breakFastDiv.appendChild(createContainerItem(breakfastArray[2], "8.65$", breakfastDescrptions[2]))
    ///fourth menu item
    breakFastDiv.appendChild(createContainerItem(breakfastArray[3], "6.45$", breakfastDescrptions[3]))
    ///fifth menu item
    breakFastDiv.appendChild(createContainerItem(breakfastArray[4], "6$", breakfastDescrptions[4]))
    /// breakfast is now down

    ///Lunch time

    let lunchTimeFoodnames = [
        "BLT",
        "The Classic Vegan salid",
    ]

    let lunchTimeDescriptions = [
        "Classic meal",
        "The veagan health salid",
    ]

    const lunchTimeDiv = document.createElement('div')
    lunchTimeDiv.classList.add('lunchTimeDiv')
    menuWrapperContainer.appendChild(lunchTimeDiv)

    lunchTimeDiv.appendChild(createContainerItem(lunchTimeFoodnames[0], "7$", lunchTimeDescriptions[0]))
    lunchTimeDiv.appendChild(createContainerItem(lunchTimeFoodnames[1], "32$", lunchTimeDescriptions[1]))

    ///dinner time
    const dinnerTimeDiv = document.createElement('div')
    dinnerTimeDiv.classList.add("dinnerTimeDiv")
    menuWrapperContainer.appendChild(dinnerTimeDiv)

    let dinnerFoodNames = [
        "Hamburger with cheese",
        "The vapid nothing Stake",
    ]

    let dinnerDescriptions = [
        'just the normal stuff',
        "The stake is nothing special",
    ]

    let dinnerData = [
        {
            name: "Hamburger with cheese",
            price: "$7",
            description: "just the normal stuff"
        }
    ]

    dinnerTimeDiv.appendChild(createContainerItem(dinnerFoodNames[0], "7$", dinnerDescriptions[0]))
    dinnerTimeDiv.appendChild(createContainerItem(dinnerFoodNames[1], "13$", dinnerDescriptions[1]))

}

export default menu