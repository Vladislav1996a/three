import style from "./product.module.css";
export const Product = ({ image, children }) => {
  return (
    <div className={style.container}>
      <img className={style.image} src={image} alt="product image" />
      <div className={style.title}>{children}</div>
    </div>
  );
};
