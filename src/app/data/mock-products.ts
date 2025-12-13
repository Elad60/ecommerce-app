import { Category, Product } from '../models';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'Premium noise-cancelling wireless headphones with 30-hour battery life',
    price: 299.99,
    imageUrl: 'https://via.placeholder.com/300/667eea/ffffff?text=Headphones',
    category: Category.Electronics,
    inStock: true,
    rating: 4.5
  },
  {
    id: 2,
    name: 'Running Shoes',
    description: 'Lightweight running shoes with advanced cushioning technology',
    price: 129.99,
    imageUrl: 'https://via.placeholder.com/300/764ba2/ffffff?text=Shoes',
    category: Category.Sports,
    inStock: true,
    rating: 4.7
  },
  {
    id: 3,
    name: 'Smart Watch',
    description: 'Feature-rich smartwatch with fitness tracking and heart rate monitor',
    price: 399.99,
    imageUrl: 'https://via.placeholder.com/300/f093fb/ffffff?text=Watch',
    category: Category.Electronics,
    inStock: false,
    rating: 4.3
  },
  {
    id: 4,
    name: 'Cotton T-Shirt',
    description: '100% organic cotton t-shirt, available in multiple colors',
    price: 29.99,
    imageUrl: 'https://via.placeholder.com/300/f5576c/ffffff?text=T-Shirt',
    category: Category.Clothing,
    inStock: true,
    rating: 4.2
  },
  {
    id: 5,
    name: 'The Art of Programming',
    description: 'Comprehensive guide to modern software development practices',
    price: 49.99,
    imageUrl: 'https://via.placeholder.com/300/fa709a/ffffff?text=Book',
    category: Category.Books,
    inStock: true,
    rating: 4.8
  },
  {
    id: 6,
    name: 'Coffee Maker',
    description: 'Programmable coffee maker with thermal carafe',
    price: 89.99,
    imageUrl: 'https://via.placeholder.com/300/fee140/333333?text=Coffee',
    category: Category.Home,
    inStock: true,
    rating: 4.4
  },
  {
    id: 7,
    name: 'Yoga Mat',
    description: 'Non-slip eco-friendly yoga mat with carrying strap',
    price: 39.99,
    imageUrl: 'https://via.placeholder.com/300/48c9b0/ffffff?text=Yoga+Mat',
    category: Category.Sports,
    inStock: true,
    rating: 4.6
  },
  {
    id: 8,
    name: 'Denim Jeans',
    description: 'Classic fit denim jeans with stretch comfort',
    price: 79.99,
    imageUrl: 'https://via.placeholder.com/300/3498db/ffffff?text=Jeans',
    category: Category.Clothing,
    inStock: true,
    rating: 4.1
  },
  {
    id: 9,
    name: 'Desk Lamp',
    description: 'LED desk lamp with adjustable brightness and color temperature',
    price: 45.99,
    imageUrl: 'https://via.placeholder.com/300/e67e22/ffffff?text=Lamp',
    category: Category.Home,
    inStock: true,
    rating: 4.5
  },
  {
    id: 10,
    name: 'JavaScript: The Definitive Guide',
    description: 'Master the world\'s most-used programming language',
    price: 59.99,
    imageUrl: 'https://via.placeholder.com/300/9b59b6/ffffff?text=JS+Book',
    category: Category.Books,
    inStock: false,
    rating: 4.9
  }
];
