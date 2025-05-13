export interface CreateProductRequest {
 name: string;
 slug: string;
 is_active: boolean;
 sku: string;
 stock: number;
 original_price: number;
 description: string;
 detailed_description: string;
 embed_code?: string;
 product_accounting_code?: string;
 label_id: number;
 category_ids: number[];
 brand_id: number;
 meta_title?: string;
 unit_id: number;
}

export interface UpdateProductRequest extends Partial<CreateProductRequest> {
 id: number;
}

export interface ProductSearchFilters {
 name?: string;
 category_id?: number;
 is_active?: boolean;
 min_price?: number;
 max_price?: number;
 page?: number;
 per_page?: number;
}
