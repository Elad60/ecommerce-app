import { Category, Product } from '../models';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'Premium noise-cancelling wireless headphones with 30-hour battery life',
    price: 299.99,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
    category: Category.Electronics,
    inStock: true,
    rating: 4.5
  },
  {
    id: 2,
    name: 'Running Shoes',
    description: 'Lightweight running shoes with advanced cushioning technology',
    price: 129.99,
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
    category: Category.Sports,
    inStock: true,
    rating: 4.7
  },
  {
    id: 3,
    name: 'Smart Watch',
    description: 'Feature-rich smartwatch with fitness tracking and heart rate monitor',
    price: 399.99,
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
    category: Category.Electronics,
    inStock: false,
    rating: 4.3
  },
  {
    id: 4,
    name: 'Cotton T-Shirt',
    description: '100% organic cotton t-shirt, available in multiple colors',
    price: 29.99,
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop',
    category: Category.Clothing,
    inStock: true,
    rating: 4.2
  },
  {
    id: 5,
    name: 'The Art of Programming',
    description: 'Comprehensive guide to modern software development practices',
    price: 49.99,
    imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=300&fit=crop',
    category: Category.Books,
    inStock: true,
    rating: 4.8
  },
  {
    id: 6,
    name: 'Coffee Maker',
    description: 'Programmable coffee maker with thermal carafe',
    price: 89.99,
    imageUrl: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=300&h=300&fit=crop',
    category: Category.Home,
    inStock: true,
    rating: 4.4
  },
  {
    id: 7,
    name: 'Yoga Mat',
    description: 'Non-slip eco-friendly yoga mat with carrying strap',
    price: 39.99,
    imageUrl: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=300&h=300&fit=crop',
    category: Category.Sports,
    inStock: true,
    rating: 4.6
  },
  {
    id: 8,
    name: 'Denim Jeans',
    description: 'Classic fit denim jeans with stretch comfort',
    price: 79.99,
    imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300&h=300&fit=crop',
    category: Category.Clothing,
    inStock: true,
    rating: 4.1
  },
  {
    id: 9,
    name: 'Desk Lamp',
    description: 'LED desk lamp with adjustable brightness and color temperature',
    price: 45.99,
    imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=300&fit=crop',
    category: Category.Home,
    inStock: true,
    rating: 4.5
  },
  {
    id: 10,
    name: 'JavaScript: The Definitive Guide',
    description: 'Master the world\'s most-used programming language',
    price: 59.99,
    imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop',
    category: Category.Books,
    inStock: false,
    rating: 4.9
  }
];
