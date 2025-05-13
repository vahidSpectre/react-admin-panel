export interface ProductResponse {
 id: number;
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
 created_at: string;
 updated_at: string;
}

export interface PaginatedProductResponse {
 data: ProductResponse[];
 current_page: number;
 total: number;
 per_page: number;
 last_page: number;
}
