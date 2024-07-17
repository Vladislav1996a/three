import { useState } from "react";
import { MenuPopup } from "../MenuPopup/MenuPopup";
import { PopupProduct } from "../PopupProduct/PopupProduct";
import { ChairSvgIcon } from "../Svg/ChairSvgIcon";
import { DoorSvgicon } from "../Svg/DoorSvgIcon";
import { LightSvgIcon } from "../Svg/LightSvgIcon";
import { StrokeScgIcon } from "../Svg/StrokeSvgIcon";
import style from "./menu.module.css";

export const Menu = ({ menu, setMenu }) => {
  const [product, setProduct] = useState(null);
  return (
    <>
      <div className={style.menu}>
        <div
          onClick={() => setMenu("textures")}
          className={`${style.item} ${menu === "textures" && style.active}`}
        >
          <StrokeScgIcon active={menu === "textures"} />
          <div className={style.title}>textures</div>
        </div>
        <div
          onClick={() => setMenu("lighting")}
          className={`${style.item} ${menu === "lighting" && style.active}`}
        >
          <LightSvgIcon active={menu === "lighting"} />
          <div className={style.title}>lighting</div>
        </div>
        <div
          onClick={() => setMenu("furniture")}
          className={`${style.item} ${menu === "furniture" && style.active}`}
        >
          <ChairSvgIcon active={menu === "furniture"} />
          <div className={style.title}>furniture</div>
        </div>
        <div
          onClick={() => setMenu("building")}
          className={`${style.item} ${menu === "building" && style.active}`}
        >
          <DoorSvgicon active={menu === "building"} />
          <div className={style.title}>building</div>
        </div>
      </div>
      {!product && <MenuPopup setProduct={setProduct} />}
      {product && <PopupProduct setProduct={setProduct} product={product} />}
    </>
  );
};
