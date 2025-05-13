export interface CreateCategoryRequest {
 name: string;
 description: string;
 slug: string;
}

export interface UpdateCategoryRequest extends Partial<CreateCategoryRequest> {
 id: number;
}
