// Product data
const products = [
    {
        id: 1,
        name: "Designer Cotton Kurti",
        price: "₹1,999",
        discountPrice: "₹1,499",
        images: [
            "https://salaikadai.com/cdn/shop/files/A33A23AE-B567-4BC2-928A-544064B30021.jpg?v=1722414765&width=990",
            "https://salaikadai.com/cdn/shop/files/F96FD5B0-0584-42E8-AAF7-B53167774EE7.jpg?v=1722414765&width=990",
            "https://salaikadai.com/cdn/shop/files/B590CE19-D279-48C4-8A5B-DE7A2D282D1A.jpg?v=1722414765&width=990"
        ],
        description: "A stylish designer cotton kurti with embroidery, perfect for casual and festive wear.",
        sizes: ["S", "M", "L", "XL"],
        offer: "Limited Time Offer!"
    },
    {
        id: 2,
        name: "Printed Rayon Kurti",
        price: "₹1,499",
        discountPrice: "₹1,199",
        images: [
            "https://yashgallery.com/cdn/shop/products/1373YKPINK_1.jpg?v=1713010630&width=990",
            "https://yashgallery.com/cdn/shop/products/1373YKPINK_2.jpg?v=1713010630&width=990"
        ],
        description: "Elegant printed rayon kurti with modern patterns, ideal for daily wear.",
        sizes: ["S", "M", "L", "XL"],
        offer: "Hurry! Offer ends soon."
    },
    {
        id: 3,
        name: "Anarkali Kurti",
        price: "₹2,999",
        discountPrice: "₹2,499",
        images: [
            "https://ahika.in/cdn/shop/products/SMP01783.jpg?v=1663217954",
            "https://ahika.in/cdn/shop/products/SMP01784.jpg?v=1663217954",
            "https://ahika.in/cdn/shop/products/SMP01796.jpg?v=1665405466",
            "https://ahika.in/cdn/shop/products/SMP01794.jpg?v=1665405466"
        ],
        description: "A gorgeous Anarkali-style kurti with intricate designs, suitable for special occasions.",
        sizes: ["S", "M", "L", "XL"],
        offer: "Limited stock available!"
    }
];

// Wishlist state
let wishlist = [];

// Function to render product cards
function renderProductCards() {
    const mainElement = document.querySelector('.main');
    mainElement.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const imageControls = document.createElement('div');
        imageControls.classList.add('image-controls');

        const leftButton = document.createElement('button');
        leftButton.classList.add('left');
        leftButton.textContent = '◀';
        leftButton.onclick = () => {
            const currentImageIndex = parseInt(productCard.dataset.currentImage);
            const newImageIndex = (currentImageIndex - 1 + product.images.length) % product.images.length;
            productCard.dataset.currentImage = newImageIndex;
            const imageElement = productCard.querySelector('.product-image');
            imageElement.src = product.images[newImageIndex];
        };

        const rightButton = document.createElement('button');
        rightButton.classList.add('right');
        rightButton.textContent = '▶';
        rightButton.onclick = () => {
            const currentImageIndex = parseInt(productCard.dataset.currentImage);
            const newImageIndex = (currentImageIndex + 1) % product.images.length;
            productCard.dataset.currentImage = newImageIndex;
            const imageElement = productCard.querySelector('.product-image');
            imageElement.src = product.images[newImageIndex];
        };

        imageControls.appendChild(leftButton);
        imageControls.appendChild(rightButton);

        const imageElement = document.createElement('img');
        imageElement.classList.add('product-image');
        imageElement.src = product.images[0];
        productCard.dataset.currentImage = 0;

        const nameElement = document.createElement('h2');
        nameElement.classList.add('product-name');
        nameElement.textContent = product.name;

        const blinkingText = document.createElement('p');
        blinkingText.classList.add('blinking-text');
        blinkingText.textContent = product.offer;

        // Blinking effect
        setInterval(() => {
            blinkingText.style.opacity = blinkingText.style.opacity === '0' ? '1' : '0';
        }, 500);

        const descriptionElement = document.createElement('p');
        descriptionElement.classList.add('product-description');
        descriptionElement.textContent = product.description;

        const priceElement = document.createElement('p');
        priceElement.classList.add('product-price');
        priceElement.textContent = product.price;

        const discountPriceElement = document.createElement('p');
        discountPriceElement.classList.add('product-discount-price');
        discountPriceElement.textContent = product.discountPrice;

        const wishlistButton = document.createElement('button');
        wishlistButton.classList.add('wishlist-button');
        wishlistButton.textContent = wishlist.includes(product.id) ? '❤️ Added to Wishlist!' : '🤍 Add to Wishlist';
        wishlistButton.onclick = () => {
            if (wishlist.includes(product.id)) {
                wishlist = wishlist.filter(id => id !== product.id);
                wishlistButton.textContent = '🤍 Add to Wishlist';
                wishlistButton.classList.remove('pink');
            } else {
                wishlist.push(product.id);
                wishlistButton.textContent = '❤️ Added to Wishlist!';
                wishlistButton.classList.add('pink');
            }
        };

        if (wishlist.includes(product.id)) {
            wishlistButton.classList.add('pink');
        }

        const addToCartButton = document.createElement('button');
        addToCartButton.classList.add('add-to-cart-button');
        addToCartButton.textContent = 'Add to Cart';

        const buyNowButton = document.createElement('button');
        buyNowButton.classList.add('buy-now-button');
        buyNowButton.textContent = 'Buy Now';

        // Add buttons with some space between them
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        buttonContainer.appendChild(wishlistButton);
        buttonContainer.appendChild(addToCartButton);
        buttonContainer.appendChild(buyNowButton);

        imageControls.appendChild(imageElement);
        productCard.appendChild(imageControls);
        productCard.appendChild(nameElement);
        productCard.appendChild(blinkingText);
        productCard.appendChild(descriptionElement);
        productCard.appendChild(priceElement);
        productCard.appendChild(discountPriceElement);
        productCard.appendChild(buttonContainer);

        mainElement.appendChild(productCard);
    });
}

// Render product cards initially
renderProductCards();
