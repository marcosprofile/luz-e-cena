import { Categoria } from "./categoria.types";
import { Censura } from "./censura.types";

export interface Movie {
  id?: number;
  src: string;
  alt: string;
  titulo: string;
  categoria: Categoria;
  censura: Censura;
  genero: string;
  duracao: number;
}