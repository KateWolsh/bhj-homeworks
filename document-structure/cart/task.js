const addToCartButtons = Array.from(document.querySelectorAll('.product__add'));
const allProducts = document.querySelector('.cart__products');
const products = Array.from(document.querySelectorAll('.product'));
const cards = Array.from(document.querySelectorAll('.cart__product'));

products.forEach(product => {
    let productQuantity = product.querySelector('.product__quantity-value');
    let productQuantityValue = Number(productQuantity.textContent);
    product.dataset.quantity = productQuantityValue;

    const productDecrement = product.querySelector('.product__quantity-control_dec');
    productDecrement.addEventListener('click', () => {
        if (productQuantityValue > 1) {
            productQuantityValue--;
            productQuantity.textContent = productQuantityValue;
            product.dataset.quantity = productQuantityValue;
        }
    });

    const productIncrement = product.querySelector('.product__quantity-control_inc');
    productIncrement.addEventListener('click', () => {
        productQuantityValue++;
        productQuantity.textContent = productQuantityValue;
        product.dataset.quantity = productQuantityValue;
    });
});

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productCard = button.closest('.product');
        const productId = productCard.dataset.id;
        const productQuantityValue = Number(productCard.dataset.quantity);
        const productImage = productCard.querySelector('.product__image');
        
        const productInCart = cards.find(card => card.dataset.id === productId);
        if (productInCart) {
            const existingQuantity = productInCart.querySelector('.cart__product-count');
            const newQuantity = Number(existingQuantity.textContent) + productQuantityValue;
            existingQuantity.textContent = newQuantity;
            productInCart.dataset.quantity = newQuantity; // добавляем обновленное значение количества в data-атрибут
        } else {
            allProducts.innerHTML += `
                <div class="cart__product" data-id="${productId}" data-quantity="${productQuantityValue}">
                    <img class="cart__product-image" src="${productImage.src}">
                    <div class="cart__product-count">${productQuantityValue}</div>
                </div>
            `;
        } 
    });
});



