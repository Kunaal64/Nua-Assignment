# ShopMini - React E-commerce Application

A modern, responsive e-commerce application built with React, Redux Toolkit, and Tailwind CSS, consuming the Fake Store API.

## Features

- **Product Listing**: Browse products with grid view, search by title, and filter by category.
- **Product Details**: View full product information, rating, and add to cart with quantity selection.
- **Shopping Cart**: Manage cart items, update quantities, remove items, and view cost summary.
- **Checkout**: specific checkout form with validation (React Hook Form) and order confirmation.
- **State Management**: Global state managed with Redux Toolkit (Cart).
- **Data Caching**: API responses are cached in LocalStorage to improve performance and reduce network requests.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS.

## Tech Stack

- **Frontend**: React, Vite
- **State Management**: Redux Toolkit, React Redux
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS, Lucide React (Icons)
- **Data Fetching**: Axios
- **Form Validation**: React Hook Form

## Project Structure

```
src/
├── components/     # Reusable UI components (Navbar, ProductCard, etc.)
├── hooks/          # Custom React hooks
├── pages/          # Page components (Home, ProductDetail, Cart, Checkout)
├── services/       # API services and caching logic
├── store/          # Redux store and slices
├── utils/          # Utility functions
├── App.jsx         # Main application component with routing
└── main.jsx        # Entry point with Redux Provider
```

## Setup and Run

1.  **Clone the repository**
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run the development server**:
    ```bash
    npm run dev
    ```
4.  **Build for production**:
    ```bash
    npm run build
    ```

## API Configuration

This project uses the [Fake Store API](https://fakestoreapi.com/).
No API key is required for this API.

If you wish to use a different API that requires a key:

1.  Create a `.env` file in the root directory.
2.  Add your API key: `VITE_API_KEY=your_api_key_here`.
3.  Update `src/services/api.js` to use the key from `import.meta.env.VITE_API_KEY`.

## Design Decisions & Trade-offs

- **Caching**: Implemented a simple LocalStorage-based caching mechanism in `src/services/api.js` to meet the requirement. In a larger production app, a library like React Query (TanStack Query) would be preferred for more robust server state management and caching.
- **State Management**: Redux Toolkit is used for the Cart state as it provides a predictable way to manage global client state.
- **Styling**: Tailwind CSS allows for rapid UI development and easy responsiveness.
- **Validation**: React Hook Form is used for the checkout form for efficient and easy-to-manage form validation.

## Bonus Enhancements

- **Toast Notifications**: (Mentioned in code comments, can be added easily).
- **Cart Badge**: Real-time update of cart item count in the navbar.
- **Persisted Cart**: The cart state is currently in memory (Redux). For a real app, persisting the Redux state to LocalStorage would be a good enhancement so the cart survives page reloads (not implemented here to keep it simple, but easy to add).
