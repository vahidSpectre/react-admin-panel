export interface CategoryResponse {
 id: number;
 name: string;
 description: string;
 slug: string;
 parent: number[];
 created_at: string;
 updated_at: string;
}

export interface PaginatedCategoryResponse {
 data: CategoryResponse[];
 current_page: number;
 total: number;
 per_page: number;
 last_page: number;
}
