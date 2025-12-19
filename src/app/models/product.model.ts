import { Category } from "./category.model"
export interface Product {
    id: number
    name: string
    description: string
    price: number
    imageUrl: string
    category: Category
    inStock: boolean
    rating?: number
}
export type SortOption = 'default' | 'price-low' | 'price-high' | 'name-asc' | 'name-desc'
