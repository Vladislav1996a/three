import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";
import style from "./popup.module.css";
export const PopupProduct = ({ product, setProduct }) => {
  if (!product) return;
  return (
    <div className={style.container}>
      <Breadcrumbs setProduct={setProduct} />
      <div className={style.row}>
        <img className={style.image} src={product.image} alt="product icon" />
        <div className={style.list}>
          {product.description.map((item) => (
            <div key={item.text} className={style.text}>
              <span>{item.title}</span> {item.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
