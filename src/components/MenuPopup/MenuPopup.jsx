import { useState } from "react";
import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";
import style from "./menuPopup.module.css";
import { ListShops } from "../ListShops/ListShops";
import { TilesMenu } from "../TilesMenu/Tilesmenu";
export const MenuPopup = ({ setProduct }) => {
  const [subMenu, setSubMenu] = useState("tiles");
  return (
    <div className={style.container}>
      <Breadcrumbs setProduct={setProduct} />
      <div className={style.row}>
        <div className={style.leftSide}>
          <div className={style.subMenu}>
            <div
              onClick={() => setSubMenu("tiles")}
              className={`${style.item} ${subMenu === "tiles" && style.active}`}
            >
              Tiles
            </div>
            <div
              onClick={() => setSubMenu("paint")}
              className={`${style.item}  ${
                subMenu === "paint" && style.active
              }`}
            >
              Paint
            </div>
            <div
              onClick={() => setSubMenu("wallpaper")}
              className={`${style.item}  ${
                subMenu === "wallpaper" && style.active
              }`}
            >
              Wallpaper
            </div>
          </div>
          <ListShops />
        </div>
        <div className={style.rightSide}>
          <div className={style.flex}>
            <div className={style.count}>124.214 items</div>
            <div className={style.filter}>
              <span>Filter</span>
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                <mask
                  id="mask0_1_1410"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="17"
                  height="17"
                >
                  <rect width="17" height="17" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1_1410)">
                  <path
                    d="M7.08333 12.75V11.3333H9.91667V12.75H7.08333ZM4.25 9.20833V7.79167H12.75V9.20833H4.25ZM2.125 5.66667V4.25H14.875V5.66667H2.125Z"
                    fill="#1C1C1C"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className={style.overflow}>
            <TilesMenu setProduct={setProduct} />
          </div>
        </div>
      </div>
    </div>
  );
};
