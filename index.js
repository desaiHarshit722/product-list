// Api url
const API_URL = "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json";

let apiData;

// Container to show products
const container = document.getElementById('container');

// Filter the products
const menCategoryBtn = document.getElementById('btn1');
const womenCategoryBtn = document.getElementById('btn2');
const kidsCategoryBtn = document.getElementById('btn3');

// Fetch the api data
const initData = async () => {
    const response = await fetch(API_URL);
    return await response.json();
}

// Display the products on the body
const displayProducts = (productsArr) => {
    let htmlStr = "";
    for (let i = 0; i < productsArr.length; i++) {
        htmlStr += `
        <div class="card1-display">

        <div class="cards-items">

        <div>
            <img src="${productsArr[i].image}" alt="">
        </div>

            <div class="womens-dress">

            <div class="d-flex">
                <p>${productsArr[i].title}</p>
                <p class="font-md">.</p>
                <p>${productsArr[i].vendor}</p>
            </div>

            </div>

        <div class="price">

            <div>
                <p>${productsArr[i].price}</p>
                <p class="line-through">${productsArr[i].compare_at_price}</p>
                <p class="red">50% Off</p>
            </div>

            </div>
            <button class="add-btn">Add to Cart</button>
            </div>
            
        </div>
        `;
    }
    container.innerHTML = htmlStr;
}

menCategoryBtn.addEventListener("click", () => {
    menCategoryBtn.classList.add("active-tab");
    kidsCategoryBtn.classList.remove("active-tab");
    womenCategoryBtn.classList.remove("active-tab");
    const menCategoryProducts = apiData.categories[0].category_products;
    displayProducts(menCategoryProducts);
});

womenCategoryBtn.addEventListener("click", () => {
    womenCategoryBtn.classList.add("active-tab");
    menCategoryBtn.classList.remove("active-tab");
    kidsCategoryBtn.classList.remove("active-tab");
    const womenCategoryProducts = apiData.categories[1].category_products;
    displayProducts(womenCategoryProducts);
});

kidsCategoryBtn.addEventListener("click", () => {
    kidsCategoryBtn.classList.add("active-tab");
    menCategoryBtn.classList.remove("active-tab");
    womenCategoryBtn.classList.remove("active-tab");
    const kidsCategoryProducts = apiData.categories[2].category_products;
    displayProducts(kidsCategoryProducts);
});


initData()
    .then((data) => {
        apiData = data;
        const menCategoryProducts = apiData.categories[0].category_products;
        menCategoryBtn.classList.add("active-tab");
        console.log(menCategoryProducts)
        displayProducts(menCategoryProducts);
    })
    .catch((err) => console.log(err));




