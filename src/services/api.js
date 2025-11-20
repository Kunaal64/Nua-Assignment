import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

const api = axios.create({
  baseURL: BASE_URL,
});

const CACHE_KEY_PREFIX = 'ecommerce_cache_';
const CACHE_EXPIRY = 1000 * 60 * 5;

// Get cached data from localStorage
const getCachedData = (key) => {
  const cached = localStorage.getItem(CACHE_KEY_PREFIX + key);
  if (cached) {
    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp < CACHE_EXPIRY) {
      return data;
    }
  }
  return null;
};

// Save data to localStorage cache
const setCachedData = (key, data) => {
  localStorage.setItem(
    CACHE_KEY_PREFIX + key,
    JSON.stringify({ data, timestamp: Date.now() })
  );
};

// Fetch all products with caching
export const fetchProducts = async () => {
  const cacheKey = 'products';
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  const response = await api.get('/products');
  setCachedData(cacheKey, response.data);
  return response.data;
};

// Fetch single product by ID with caching
export const fetchProductById = async (id) => {
  const cacheKey = `product_${id}`;
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  const response = await api.get(`/products/${id}`);
  setCachedData(cacheKey, response.data);
  return response.data;
};

// Fetch product categories with caching
export const fetchCategories = async () => {
  const cacheKey = 'categories';
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  const response = await api.get('/products/categories');
  setCachedData(cacheKey, response.data);
  return response.data;
};

// Fetch products by category with caching
export const fetchProductsByCategory = async (category) => {
  const cacheKey = `products_category_${category}`;
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  const response = await api.get(`/products/category/${category}`);
  setCachedData(cacheKey, response.data);
  return response.data;
};
