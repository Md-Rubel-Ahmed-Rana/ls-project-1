const getInputValue = (id) => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = "";

    return inputValue;
}

const getSavedProductFromLS = () => {
    const savedCart = localStorage.getItem("cart");
    let cart = {};
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    return cart;

}

const setProductToLS = (productName, productAmount) => {
    const cart = getSavedProductFromLS();
    cart[productName] = productAmount;

    const cartStringified = JSON.stringify(cart);

    localStorage.setItem("cart", cartStringified);
    

}

const displayProductOnUI = (productName, productAmount) => {
    const productContainer = document.getElementById("product-container");
    const li = document.createElement("li");
    li.classList.add("border-bottom");
    li.classList.add("border-bottom");
    li.innerHTML = `<h4>${productName} : ${productAmount}</h4>`;
    productContainer.appendChild(li);
}



const addProduct = () => {
    const productName = getInputValue("name-field")
    const productAmount = getInputValue("quantity-field");
    displayProductOnUI(productName, productAmount)
    setProductToLS(productName, productAmount)
};

const displaySavedproductUI = () => {
    const cart = getSavedProductFromLS();
    for(const product in cart) {
        const amount = cart[product];
        displayProductOnUI(product, amount);
    }
}
displaySavedproductUI()
