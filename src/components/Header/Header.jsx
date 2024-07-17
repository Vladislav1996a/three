import { Box } from "../Box/Box";
import { NavigationGroup } from "../NavigationGroup/NavigationGroup";
import { DrowSvgIcon } from "../Svg/DrowSvgIcon";
import { InfoSvgIcon } from "../Svg/InfoSvgIcon";
import { IridescentSvgIcon } from "../Svg/IridescentSvgIcon";
import style from "./header.module.css";

export const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.row}>
        <Box link="#">
          <div className={style.logo}>LOGO ICON</div>
        </Box>
        <a href="#" className={style.box}>
          <div className={style.description}>About project</div>
          <InfoSvgIcon />
        </a>
      </div>
      <div className={style.row}>
        <Box link="#">
          <div>
            <DrowSvgIcon />
          </div>
        </Box>
        <Box link="#">
          <IridescentSvgIcon />
          <div className={style.light}>Lighting</div>
        </Box>
        <NavigationGroup />
        <Box link="#">
          <svg
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.05348 21.2588L0.61817 19.6163L8.77783 11.2925L0 2.14016L1.48702 0.741012L10.2674 9.72915L18.9019 0.741186L20.5348 2.14016L11.8377 11.2925L20.1485 19.6163L18.4814 21.2588L10.2674 12.7616L2.05348 21.2588Z"
              fill="black"
              fillOpacity="0.7"
            />
          </svg>
        </Box>
      </div>
    </div>
  );
};
