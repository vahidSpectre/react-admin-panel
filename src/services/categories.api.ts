import { Category } from '../types/category/category.interface';
import {
 CreateCategoryRequest,
 UpdateCategoryRequest,
} from '../types/category/category.request';
import {
 CategoryResponse,
 PaginatedCategoryResponse,
} from '../types/category/category.response';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL || 'https://api.example.com';

async function handleResponse<T>(res: Response): Promise<T> {
 if (!res.ok) {
  const err = await res.json();
  return await Promise.reject(err); 
 }
 return res.json();
}

// Create Category
export async function createCategory(data: CreateCategoryRequest) {
 const res = await fetch(`${BASE_URL}/categories`, {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json',
   Accept: 'application/json',
  },
  body: JSON.stringify(data),
 });
 return handleResponse(res);
}

// Get Paginated Categories
export async function getCategories(
 page = 1,
): Promise<PaginatedCategoryResponse> {
 const res = await fetch(`${BASE_URL}/categories`);
 return handleResponse(res);
}

// Get Single Category
export async function getCategory(id: number): Promise<CategoryResponse> {
 const res = await fetch(`${BASE_URL}/categories/${id}`);
 return handleResponse(res);
}

// Update Category
export async function updateCategory(data: UpdateCategoryRequest) {
 const res = await fetch(`${BASE_URL}/categories/${data.id}`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
 });
 return handleResponse(res);
}

// Delete Category
export async function deleteCategory(id: number) {
 const res = await fetch(`${BASE_URL}/categories/${id}`, {
  method: 'DELETE',
 });
 if (!res.ok) throw new Error('Failed to delete');
}
