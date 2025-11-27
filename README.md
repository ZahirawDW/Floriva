# 🌸 Floriva - Beautiful Flower Shop Website

<div align="center">

![Floriva Banner](https://via.placeholder.com/800x400/ffeef1/5d0c23?text=Floriva+Flower+Shop)

**A modern, responsive flower shop website built with pure frontend technologies**

[Live Demo](https://floriva-shop.netlify.app) • [Report Bug](https://github.com/ZahirawDW/floriva/issues) • [Request Feature](https://github.com/ZahirawDW/floriva/issues)

</div>

## 🚀 About The Project

Floriva is a beautifully crafted flower shop website that showcases an exquisite collection of floral arrangements, bouquets, and gift sets. Built as a portfolio project, it demonstrates modern frontend development skills with a focus on user experience and e-commerce functionality.

### 🎯 Key Features

- **🛍️ Product Catalog** - Filter bouquets, arrangements, and gift sets
- **❤️ Wishlist System** - Save favorite products for later
- **🛒 Shopping Cart** - Add items with quantity management
- **📱 Responsive Design** - Perfect on all devices
- **📝 Contact Form** - Integrated order system with validation
- **💾 Local Storage** - Persistent cart and wishlist data

## 🛠️ Built With

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Framework**: Bootstrap 5.3.8
- **Icons**: Bootstrap Icons
- **Storage**: Browser LocalStorage
- **Design**: Custom CSS with CSS Variables

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ZahirawDW/floriva.git
   cd floriva
   ```

2. **Open in browser**
   ```bash
   # No build process required - open index.html directly
   open index.html
   ```

   Or use a local server:
   ```bash
   python -m http.server 8000
   # Visit http://localhost:8000
   ```

## 🎨 Project Structure

```
floriva/
├── index.html          # Main HTML file
├── style.css           # Custom styles and animations
├── script.js           # All JavaScript functionality
├── images/             # Product images and assets
│   ├── logo.png
│   ├── home.png
│   ├── aboutimg1-8.jpg
│   ├── bouquet1-8.jpg
│   ├── arrangement1-8.jpg
│   └── giftset1-8.jpg
└── README.md           # Project documentation
```

## 💡 Features Overview

### Product Management
- Dynamic product filtering by category
- Real-time cart calculations
- Wishlist with duplicate prevention
- Product cards with hover effects

### Shopping Experience
- Add to cart/wishlist functionality
- Quantity controls with +/- buttons
- Persistent storage across sessions
- Order summary with total pricing

### User Interface
- Smooth animations and transitions
- Mobile-first responsive design
- Bootstrap modals for cart/wishlist
- Form validation with error handling

## 🚀 Usage

1. **Browse Products**: Use category filters to explore floral arrangements
2. **Add to Cart**: Click "Add to Cart" on any product
3. **Manage Quantities**: Use +/- buttons in cart modal
4. **Save Favorites**: Add items to wishlist for later
5. **Place Order**: Fill out contact form with delivery details

## 🌟 Technical Highlights

- **Pure JavaScript** - No external dependencies beyond Bootstrap
- **CSS Custom Properties** - Consistent theming with variables
- **Event Delegation** - Efficient DOM event handling
- **Local Storage API** - Data persistence without backend
- **Responsive Grid** - Bootstrap layout system
- **Form Validation** - Client-side validation with regex

## 🎯 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Brave  
- ✅ Opera 
- ✅ Edge

## 📱 Responsive Design

- **Mobile**: Optimized for 320px+ screens
- **Tablet**: Adaptive layout for 768px+ screens
- **Desktop**: Full experience for 1024px+ screens

## 🔧 Customization

### Colors
Modify CSS variables in `:root`:
```css
:root {
    --bs-body-color: #5d0c23;     /* Primary dark pink */
    --light-pink: #d41f68;        /* Accent pink */
}
```

### Products
Add new products in `script.js`:
```javascript
const newProduct = {
    id: 25,
    category: 'bouquets',
    name: 'New Bouquet',
    image: 'images/new-bouquet.jpg',
    description: 'Beautiful new arrangement',
    price: '$55.00'
};
```

## 🚀 Future Enhancements

- [ ] Payment gateway integration
- [ ] User authentication system
- [ ] Product search functionality
- [ ] Image zoom capabilities
- [ ] Newsletter subscription
- [ ] Admin dashboard

## 👨‍💻 Developer

**Zahira DW** - [@ZahirawDW](https://github.com/ZahirawDW)

- LinkedIn: [https://www.linkedin.com/in/zahira-el-mahjour]
- Email: [zahiraelmahjour06@gmail.com]

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- Bootstrap team for the excellent framework
- Bootstrap Icons for beautiful icons
- LocalStorage API for data persistence
- Modern CSS features for animations

---

<div align="center">

### ⭐ If you like this project, give it a star on GitHub!

**Built with ❤️ for floral enthusiasts and modern web development**

</div>

---

## 📞 Contact

For questions about this project or potential collaborations:
- **Email**: [zahiraelmahjour@gmail.com]
- **LinkedIn**: [https://www.linkedin.com/in/zahira-el-mahjour]
- **GitHub**: [https://github.com/ZahirawDW](https://github.com/ZahirawDW)

---

**Note**: This is a frontend demonstration project. For a production environment, consider adding backend integration, payment processing, and user authentication.

---

<div align="center">

**Happy Coding! 🌸**

</div>

---

*Last updated: November 2025*