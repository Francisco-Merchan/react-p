import { ProductButtons } from "../components/ProductButtons";
import { ProductCard } from "../components/ProductCard";
import { ProductImage } from "../components/ProductImage";
import { ProductTitle } from "../components/ProductTitle";
import "../styles/custon-styles.css";

const product = {
  id: "1",
  title: "Coffe Mug - Card",
  img: "../../../public/coffee-mug.png",
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

      <ProductCard product={product} className="bg-dark text-white">
        <ProductImage className="custom-image" />
        <ProductTitle title={"Cafe"} className="text-bold" />
        <ProductButtons className="custom-buttons" />
      </ProductCard>

      <ProductCard
        product={product}
        style={{
          backgroundColor: "#70D1F8",
        }}
      >
        <ProductImage
          style={{
            boxShadow: "10px 10px 10px rgba(0,0,0,0.5)",
          }}
        />
        <ProductTitle style={{ fontWeight: "bold" }} />
        <ProductButtons
          style={{
            display: "flex",
            justifyContent: "end",
          }}
        />
      </ProductCard>
    </div>
  );
};
