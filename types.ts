export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  rating?: number;
  tags?: string[];
  description?: string;
  rentalPrice?: number;
}

export interface ReviewStats {
  totalProducts: string;
  satisfaction: string;
  customers: string;
}

export interface GeminiSearchResponse {
  recommendedProductIds: string[];
  reasoning: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}