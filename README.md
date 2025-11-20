# ShopMini - E-commerce React App

A modern e-commerce website built with React, Redux Toolkit, and Tailwind CSS using the Fake Store API.

## Features

- **Product Listing** - Grid view with search and category filtering
- **Product Details** - Full product info with add to cart functionality
- **Shopping Cart** - Item management with quantity updates and removal
- **Checkout** - Form validation and order confirmation
- **Data Caching** - LocalStorage caching for improved performance
- **Persistent Cart** - Cart survives page reloads
- **Responsive Design** - Works on all screen sizes

## Tech Stack

- React 19 + Vite
- Redux Toolkit for state management
- React Router for navigation
- Tailwind CSS for styling
- React Hook Form for validation
- Axios for API calls
- Lucide React for icons

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Route components
├── store/          # Redux store and slices
├── services/       # API calls with caching
├── hooks/          # Custom React hooks
└── utils/          # Helper functions
```

## API

Uses the free [Fake Store API](https://fakestoreapi.com/) - no API key required.

To use a different API:

1. Create `.env` file with `VITE_API_KEY=your_key`
2. Update `src/services/api.js` to use the key
