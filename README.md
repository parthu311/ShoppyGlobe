# Netify :  https://shoppyglobe1.netlify.app/
# Github : https://github.com/parthu311/ShoppyGlobe

---

# E-Commerce Web Application

This project is a dynamic **E-Commerce Web Application** built using **React**, **Redux**, and **Vite** for fast and optimized development. It is designed to provide users with a smooth and interactive shopping experience, featuring product listings, a cart system, and detailed product information.

## Project Structure

The project is structured into several directories for modularity and scalability:

```
src/
├── assets/
├── components/
│   ├── Cart/
│   │   ├── cart.css
│   │   ├── Cart.jsx
│   │   └── CartItem.jsx
│   ├── Header/
│   │   ├── AllProducts.jsx
│   │   ├── Header.css
│   │   └── Header.jsx
│   ├── Products/
│   │   ├── product.css
│   │   ├── ProductDetail.jsx
│   │   └── ProductList.jsx
├── utils/
│   ├── Store/
│   │   ├── cartSlice.js
│   │   └── store.js
│   ├── Error.css
│   ├── Error.jsx
│   ├── Loading.jsx
│   └── useFetchHook.js
├── App.css
├── App.jsx
```

### Key Components

#### 1. **Cart**
   - **Cart.jsx**: The main cart interface allowing users to view and manage the products in their cart.
   - **CartItem.jsx**: A reusable component for displaying individual cart items.
   - **cart.css**: Styles for the cart components.

#### 2. **Header**
   - **Header.jsx**: The top navigation bar of the application.
   - **AllProducts.jsx**: Displays all products in a categorized manner.
   - **Header.css**: Styles for the header components.

#### 3. **Products**
   - **ProductList.jsx**: Displays the list of available products.
   - **ProductDetail.jsx**: Shows detailed information about a selected product.
   - **product.css**: Styles for product-related components.

### Utilities

#### 1. **Store**
   - **store.js**: Configures the Redux store.
   - **cartSlice.js**: Manages the state and actions related to the shopping cart.

#### 2. **Custom Hooks**
   - **useFetchHook.js**: A reusable hook for fetching data from APIs.

#### 3. **Error Handling**
   - **Error.jsx**: A fallback component for handling errors.
   - **Error.css**: Styles for the error components.

#### 4. **Loading**
   - **Loading.jsx**: A component for displaying a loading spinner during API requests.

### Root Components
   - **App.jsx**: The main entry point for the application.
   - **App.css**: Global styles for the application.

---

## Features

- **Product Management**: Browse and view product details.
- **Cart Functionality**: Add, update, and remove products from the cart.
- **Responsive Design**: User-friendly interface adaptable to various devices.
- **Error Handling**: Graceful error messages and fallback UI.
- **Optimized State Management**: Leveraging Redux Toolkit for seamless state updates.

---

## Installation

#

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/e-commerce-app.git
   cd e-commerce-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application using Vite:
   ```bash
   npm run dev
   ```

   Vite will start a development server and open your application in the browser.

---

## Usage

1. Start the application.
2. Browse through the product catalog.
3. Add items to your cart.
4. Proceed to checkout.

---

## Technologies Used

- **Frontend**: React, Redux Toolkit
- **Bundler**: Vite (for fast development and optimized builds)
- **Styling**: CSS , Tailwind
- **API Calls**: Custom React Hooks (`useFetchHook`)

---

---

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

---
