// Get all products from the API
fetch("http://localhost:3000/api/products")
// Then: Convert the result to JSON format and return it
    .then(resultFromAPI => resultFromAPI.json())
// Then: Use the result as JSON, and pass it as a parameter to the showInItems function
/*
Data might look like:
{
    [
        {
            _id: 68272,
            name: "comfy couch"
            price: 3444
        },
        {
            _id: 32323,
            name: "big couch",
            price: 88783
        }
    ]
}
*/
    .then(dataAsJSON => showInItems(dataAsJSON))

    // Function: Operation on the data
    // function functionName(dataToTakeIn, moreData, evenMoreData)
function showInItems(allProducts) {
    console.log(allProducts)
    // Does operation on the data
    // Then exit (return or not)

    // for (starting value, ending condition, increase value)
    for (let i = 0; i < allProducts.length; i++) { 

        let currentProduct = allProducts[i]
        console.log(currentProduct)
        /* Example current product:
        {
            _id: 561563,
            name: "Kaper Couch",
            price: 8339,
            description: "nlah blagh",
            imageUrl: "src/images"
        }
        */

        // currentProduct._id => 561563
        // currentProduct.name => "Kaper Couch"
        // currentProduct.price
        // currentProduct.description
        // currentProduct.imageUrl

        let productHTML = `
        <a href="./product.html?id=${currentProduct._id}">
            <article>
              <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1">
              <h3 class="productName">${currentProduct.name}</h3>
              <p class="productDescription">${currentProduct.description}</p>
            </article>
          </a>
        `

        // let x = 5;
        // x += 10;
        // x => 15

        // Get the element with id "items" from the current HTML file, which is index.html
        // And then add the product HTML after it
        document.getElementById('items').innerHTML += productHTML;

    }
}