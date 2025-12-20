import { Product } from "./product.model";

export interface CartType {
    product: Product;
    quantity: number;
}