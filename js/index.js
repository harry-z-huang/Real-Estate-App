// Link inputs and buttons from HTML 
const priceInput = document.querySelector("#price");
const bedroomInput = document.querySelector("#bedrooms")
const bathroomInput = document.querySelector("#bathrooms")
const addressInput = document.querySelector("#address")
const addHouseButton = document. querySelector("#addHouse")

//Create a view so you can start adding listings to it
let view = createView();

addHouseButton.addEventListener("mousedown", function(){
    let newHouse = createListing(priceInput.value, bedroomInput.value, bathroomInput.value, addressInput.value);

    view.addListing(newHouse)
    console.log("oh yeah")
})