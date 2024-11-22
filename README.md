# Netify :  https://shoppyglobe1.netlify.app/
# Github : https://github.com/parthu311/ShoppyGlobe

---


# ShoppyGlobe - E-Commerce Web Application

Welcome to **ShoppyGlobe**, a dynamic e-commerce application built with **React**, **Redux Toolkit**, and **Vite**. This project offers an interactive shopping experience featuring product listings, detailed product views, cart management, and seamless navigation.

---

## 🌟 Features

### 1. **Core Functionalities**
- **Product Browsing**: Explore a wide range of products.
- **Product Details**: View detailed information for each product.
- **Cart Management**: Add, remove, and modify product quantities in the cart.
- **Search Functionality**: Filter products by name or category.
- **Error Handling**: Graceful fallback for failed API requests.

### 2. **Performance Enhancements**
- **Lazy Loading**: Components are loaded dynamically for better performance.
- **Custom Hooks**: Simplified API interactions using a reusable `useFetchHook`.

### 3. **Styling**
- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.
- **Styling Tools**: Combination of CSS and Tailwind for a clean and modern UI.

---

## 🚀 Tech Stack

- **Frontend**: React, Redux Toolkit
- **Bundler**: Vite (for fast builds and optimized performance)
- **Styling**: CSS, Tailwind CSS
- **Data Fetching**: Custom React Hook (`useFetchHook`)

---

## 📂 Project Structure

```plaintext
src/
├── assets/              # Static assets like images
├── components/          # UI Components
│   ├── Cart/            # Cart-related components
│   ├── Header/          # Header and Navigation components
│   ├── Products/        # Product-related components
├── utils/               # Reusable utilities and hooks
│   ├── Store/           # Redux store and slices
│   ├── Error.jsx        # Error fallback component
│   ├── Loading.jsx      # Loading spinner component
│   └── useFetchHook.js  # Custom hook for API interactions
├── App.css              # Global styles
├── App.jsx              # Root application component
```

---

## 🛠️ Installation

### Prerequisites
- Node.js
- npm or yarn

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/parthu311/ShoppyGlobe.git
   cd ShoppyGlobe
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm run dev
   ```
   Your application will be accessible at `http://localhost:5173`.

---

## 📜 Usage

1. Open the application.
2. Browse through the product catalog.
3. Add items to your cart and manage quantities.
4. Proceed to checkout.

---

## 🔧 Key Components

### 1. **App.jsx**
The root component that integrates routing, global state, and layout.

### 2. **Header**
- **Header.jsx**: Displays navigation and a cart icon.
- **AllProducts.jsx**: Handles the display of categorized products.

### 3. **Products**
- **ProductList.jsx**: Fetches and displays a grid of products.
- **ProductDetail.jsx**: Shows detailed information about a selected product.

### 4. **Cart**
- **Cart.jsx**: Displays cart items and allows modifications.
- **CartItem.jsx**: Reusable component to display individual cart items.

---

## 🎨 Styling

- **CSS Modules**: Component-specific styles for modularity.
- **Tailwind CSS**: Utility-first approach for rapid UI development.

---

## 📈 Performance

- **React.lazy**: Code-splitting and lazy loading for better performance.
- **Error Boundaries**: Handles errors gracefully for better user experience.

---

## 🌐 Deployment

### Live Demo
Access the application live on **Netlify**: [ShoppyGlobe](https://shoppyglobe1.netlify.app/)

---

## 🤝 Contributing

We welcome contributions to improve ShoppyGlobe! Here's how you can contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add a meaningful commit message"
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request on GitHub.

---

## 📜 License

This project is licensed under the MIT License. Feel free to use and modify it as per your needs.

---

## 📧 Contact

For any queries or suggestions, feel free to contact us through [GitHub](https://github.com/parthu311/ShoppyGlobe).

---

### Thank you for exploring **ShoppyGlobe**! Happy shopping! 🛒
