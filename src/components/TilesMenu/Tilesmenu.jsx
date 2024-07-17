import { mockColors } from "../../mock/mockColors";
import { mockProduct } from "../../mock/mockProduct";
import { Product } from "../Product/Product";
import style from "./tiles.module.css";
export const TilesMenu = ({ setProduct }) => {
  return (
    <div>
      <div className={style.list}>
        {mockProduct.map((item) => (
          <div key={item.image} onClick={() => setProduct(item)}>
            <Product image={item.image}>{item.title}</Product>
          </div>
        ))}
      </div>
      <div className={style.sectionFilter}>
        <div className={style.filterTitle}>
          Colors <span>20</span>
        </div>
        <div className={style.colorList}>
          {mockColors.map((item) => (
            <div
              key={item}
              style={{ backgroundColor: item }}
              className={style.box}
            ></div>
          ))}
        </div>
      </div>

      <div className={style.sectionFilter}>
        <div className={style.filterTitle}>
          Size <span>20</span>
        </div>
        <div className={style.checkboxList}>
          <div className={style.checkbox}>
            <input type="checkbox" />
            <div className={style.filterTitle}>
              3 x 6 <span>(4)</span>
            </div>
          </div>
          <div className={style.checkbox}>
            <input type="checkbox" />
            <div className={style.filterTitle}>
              4 x 12 <span>(20) </span>
            </div>
          </div>
          <div className={style.checkbox}>
            <input type="checkbox" />
            <div className={style.filterTitle}>
              12 x 12 <span>(12)</span>
            </div>
          </div>
          <div className={style.checkbox}>
            <input type="checkbox" />
            <div className={style.filterTitle}>
              12 x 24 <span>(42)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
