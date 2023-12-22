import { ProductButtons } from "../components/ProductButtons";
import { ProductCard } from "../components/ProductCard";
import { ProductImage } from "../components/ProductImage";
import { ProductTitle } from "../components/ProductTitle";

const product = {
  id: "1",
  title: "Coffe Mug - Card",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      ></div>
      {/* <ProductCard product={product}>
        <ProductCard.Image />
        <ProductCard.Title title={"Cafe"} />
        <ProductCard.Buttons />
      </ProductCard> */}
      <ProductCard product={product}>
        <ProductImage />
        <ProductTitle title={"Cafe"} />
        <ProductButtons />
      </ProductCard>
    </div>
  );
};
