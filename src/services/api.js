import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

const api = axios.create({
  baseURL: BASE_URL,
});

const CACHE_KEY_PREFIX = 'ecommerce_cache_';
const CACHE_EXPIRY = 1000 * 60 * 5; // 5 minutes

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

const setCachedData = (key, data) => {
  localStorage.setItem(
    CACHE_KEY_PREFIX + key,
    JSON.stringify({ data, timestamp: Date.now() })
  );
};

export const fetchProducts = async () => {
  const cacheKey = 'products';
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  const response = await api.get('/products');
  setCachedData(cacheKey, response.data);
  return response.data;
};

export const fetchProductById = async (id) => {
  const cacheKey = `product_${id}`;
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  const response = await api.get(`/products/${id}`);
  setCachedData(cacheKey, response.data);
  return response.data;
};

export const fetchCategories = async () => {
  const cacheKey = 'categories';
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  const response = await api.get('/products/categories');
  setCachedData(cacheKey, response.data);
  return response.data;
};

export const fetchProductsByCategory = async (category) => {
  const cacheKey = `products_category_${category}`;
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  const response = await api.get(`/products/category/${category}`);
  setCachedData(cacheKey, response.data);
  return response.data;
};
