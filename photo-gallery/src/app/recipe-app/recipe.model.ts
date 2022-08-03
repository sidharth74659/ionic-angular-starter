export interface Recipe {
  id: number;
  title: string;
  imageUrl: string;
  ingredients: Ingredient[];
}

interface Ingredient {
  name: string;
  amount: number;
}
