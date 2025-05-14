export interface CreateCategoryRequest {
 name: string;
 slug: string;
 description: string;
 parents: number[];
 is_active: boolean;
 unit: number;
 display_order: number;
}

export interface UpdateCategoryRequest extends Partial<CreateCategoryRequest> {
 id: number;
}
