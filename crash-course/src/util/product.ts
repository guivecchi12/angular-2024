import { RatingRepresentation } from './rating';

export interface ProductInterface {
  id?: number;
  title?: string;
  description?: string;
  category?: string;
  image?: string;
  price?: number;
  rating?: RatingRepresentation;
}
