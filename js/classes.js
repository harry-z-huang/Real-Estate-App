function createListing(price, bedRmNum, bathRmNum, sqft, address){
    return {
        price,
        bedRmNum,
        bathRmNum,
        sqft,
        address,

        render: function(){
            let home = document.createElement("li");
            let infoLine = document.createElement("p");
            let addressLine = document.createElement("p");

            infoLine.textContent = `$${price} | ${bedRmNum}bds | ${bathRmNum}ba | ${sqft}sqft`;

            addressLine.textContent = address;

            home.appendChild(infoLine, addressLine);

            return home
        }
    }
}

function createView(houses = []){
    return {
        houses,

        addListing: function(listing){
            this.houses.push(listing);
        },

        removeListing: function(listing){
            houses = this.houses.filter(screened_listing => screened_listing != listing);
        },

        render: function(){
            viewing = document.createElement("ul");

            this.houses.map(house => viewing.appendChild(house.render()));

            return viewing
        }
    }
}