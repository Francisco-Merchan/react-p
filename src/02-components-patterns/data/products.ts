import { Product } from "../interfaces/interfaces";

const product1 = {
  id: "1",
  title: "Coffe Mug - Card",
  img: "../../../public/coffee-mug.png",
};

const product2 = {
  id: "2",
  title: "Coffe Mug - Meme",
  img: "../../../public/coffeemug2-220517-184503.png",
};

export const products: Product[] = [product1, product2];