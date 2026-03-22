function addToCart(id) {
    console.log(id);
}

const container = document.getElementById('productCards');

products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
        <div class="card__image-wrap">
            <img src="${product.thumbnail}" alt="${product.title}">
            <span class="card__discount">${product.discountPercentage}%</span>
            <span class="card__category">${product.category}</span>
        </div>
        <div class="card__body">
            <div class="card__title">${product.title}</div>
            <div class="card__description">${product.description}</div>
            <div class="card__footer">
                <span class="card__price">${product.price} $</span>
                <div class="fa fa-shopping-cart card__cart" onclick="addToCart(${product.id})"></div>
            </div>
        </div>
    `;

    container.appendChild(card);
});
