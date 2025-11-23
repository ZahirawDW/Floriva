// Products section navigation buttons functionality
const allBtn = document.querySelector('.allBtn');
const bouquetsBtn = document.querySelector('.bouquetsBtn');
const arrangementsBtn = document.querySelector('.arrangementsBtn'); 
const giftSetsBtn = document.querySelector('.giftSetsBtn');

// Products container
const productsContainer = document.getElementById('productsContainer');

const Products = [
    {
        id:1,
        category: 'bouquets',
        name: 'Pastel Rose Bouquet',
        image: 'images/bouquet1.jpg',
        description:'A soft pastel bouquet made with handpicked roses. Elegant and gentle.',
        price: '$45.00',
    },{
        id:2,
        category: 'bouquets',
        name: 'Blushing Pink Wrap',
        image: 'images/bouquet2.jpg',
        description:'Beautiful pink roses wrapped in a delicate blush paper. Perfect for gifting.',
        price: '$50.00',
    },{
        id:3,
        category: 'bouquets',
        name: 'Sunset Garden Bouquet',
        image: 'images/bouquet3.jpg',
        description:'Warm sunset tones with fresh seasonal flowers. Soft and charming.',
        price: '$55.00',
    },{
        id:4,
        category: 'bouquets',
        name: 'Sweet Peony Mix',
        image: 'images/bouquet4.jpg',
        description:'A romantic mix of peonies and roses in sweet pastel shades.',
        price: '$30.00',
    },{
        id:5,
        category: 'bouquets',
        name: 'Lavender Breeze Bouquet',
        image: 'images/bouquet5.jpg',
        description:'Light lavender tones with a fresh floral aroma. Calm and elegant.',
        price: '$40.00',
    },{
        id:6,
        category: 'bouquets',
        name: 'Ruby Red Classic Roses',
        image: 'images/bouquet6.jpg',
        description:'Timeless red roses wrapped in a classy modern style.',
        price: '$48.21',
    },{
        id:7,
        category: 'bouquets',
        name: 'Spring Harmony Wrap',
        image: 'images/bouquet7.jpg',
        description:'Soft spring florals arranged with balanced colors. Simple and fresh.',
        price: '$52.00',
    },{
        id:8,
        category: 'bouquets',
        name: 'Cream & Peach Soft Bouquet',
        image: 'images/bouquet8.jpg',
        description:'Gentle cream and peach roses for a warm, delicate look.',
        price: '$37.50',
    },{
        id:9,
        category: 'arrangements',
        name: 'Luxury Bloom Box',
        image: 'images/arrangement1.jpg',
        description:'A premium round box filled with elegant roses. Perfect for special moments.',
        price: '$60.00',
    },{
        id:10,
        category: 'arrangements',
        name: 'Blossom Hatbox Arrangement',
        image: 'images/arrangement2.jpg',
        description:' A modern hatbox arrangement with soft pastel tones. Stylish and fresh.',
        price: '$55.00',
    },{
        id:11,
        category: 'arrangements',
        name: 'Pink Velvet Flower Box',
        image: 'images/arrangement3.jpg',
        description:'Velvet-style box filled with pink roses for a luxurious feel.',
        price: '$58.00',
    },{
        id:12,
        category: 'arrangements',
        name: 'White Elegance Round Box',
        image: 'images/arrangement4.jpg',
        description:'Pure white roses arranged in a minimalist floral box.',
        price: '$33.75',
    },{
        id:13,
        category: 'arrangements',
        name: 'Vintage Garden Arrangement',
        image: 'images/arrangement5.jpg',
        description:'Mixed rustic florals arranged in a vintage-inspired box.',
        price: '$47.00',
    },{
        id:14,
        category: 'arrangements',
        name: 'Petal Harmony Floral Box',
        image: 'images/arrangement6.jpg',
        description:'A soft harmony of pastel flowers arranged with care.',
        price: '$42.50',
    },{
        id:15,
        category: 'arrangements',
        name: 'Royal Rose Box',
        image: 'images/arrangement7.jpg',
        description:'Square floral box with deep, elegant roses. Royal and bold.',
        price: '$65.00',
    },{
        id:16,
        category: 'arrangements',
        name: 'Minimal Soft Pastel Box',
        image: 'images/arrangement8.jpg',
        description:'Clean and minimal arrangement with light pastel roses. Simple yet beautiful.',
        price: '$38.00',
    },{
        id:17,
        category: 'gift-sets',
        name: 'Sweet Love Gift Set',
        image: 'images/giftset1.jpg',
        description:'Soft roses paired with a sweet little gift. A lovely surprise.',
        price: '$45.00',
    },{
        id:18,
        category: 'gift-sets',
        name: 'Bloom & Teddy Combo',
        image: 'images/giftset2.jpg',
        description:'Cute teddy bear with fresh roses. Perfect for expressing care.',
        price: '$50.00',
    },{
        id:19,
        category: 'gift-sets',
        name: 'Rose & Chocolate Deluxe Set',
        image: 'images/giftset3.jpg',
        description:'Elegant roses combined with premium chocolate. Romantic and warm.',
        price: '$60.00',
    },{
        id:20,
        category: 'gift-sets',
        name: 'Pastel Flowers + Bear Box',
        image: 'images/giftset4.jpg',
        description:'Pastel roses arranged with a mini teddy. Soft and adorable.',
        price: '$45.00',
    },{
        id:21,
        category: 'gift-sets',
        name: 'Warm Hugs Floral Gift',
        image: 'images/giftset5.jpg',
        description:'Cozy floral arrangement paired with a small gift for comfort.',
        price: '$52.00',
    },{
        id:22,
        category: 'gift-sets',
        name: 'Luxury Romance Gift Bundle',
        image: 'images/giftset6.jpg',
        description:'A luxurious blend of roses with a romantic gift item.',
        price: '$75.00',
    },{
        id:23,
        category: 'gift-sets',
        name: 'Golden Treats Flower Set',
        image: 'images/giftset7.jpg',
        description:'A mix of flowers and golden-wrapped treats. Elegant gifting.',
        price: '$68.00',
    },{
        id:24,
        category: 'gift-sets',
        name: 'Heartfelt Surprise Combo',
        image: 'images/giftset8.jpg',
        description:'A heartfelt mix of florals and a cute gift for someone special.',
        price: '$70.00',
    }
];


// Function to create product cards
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'card mb-3';
    card.style.width = '18rem';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="card-img-top">
        <div class="card-body text-center">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text lead text-secondary">${product.description}</p>
            <p class="product-price fw-bold">Starting from: ${product.price}</p>
            <a href="#" class="btn">Add to Cart</a>
            <a href="#" class="btn">Add to Wishlist</a>
        </div>
    `;  
    return card;
}

// Function to display products in a given container
function displayProducts(container, products) {
    container.innerHTML = ''; 
    products.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

// Function to filter products by category
function filterProductsByCategory(category) {
    const filteredProducts = category === 'all' ? Products : Products.filter(product => product.category === category);
    displayProducts(productsContainer, filteredProducts);
    updateActiveButton(category);
} 

// Function to update active button styling
function updateActiveButton(category) {
    const buttons = [allBtn, bouquetsBtn, arrangementsBtn, giftSetsBtn];
    buttons.forEach(button => button.classList.remove('active'));
    const activeButton = buttons.find(button => button.dataset.category === category);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Event listeners for navigation buttons
allBtn.addEventListener('click', () => {
    filterProductsByCategory('all');
});

bouquetsBtn.addEventListener('click', () => {
    filterProductsByCategory('bouquets');
}); 

arrangementsBtn.addEventListener('click', () => {
    filterProductsByCategory('arrangements');
});

giftSetsBtn.addEventListener('click', () => {
    filterProductsByCategory('gift-sets');
});

// Initial display of all products
filterProductsByCategory('all');