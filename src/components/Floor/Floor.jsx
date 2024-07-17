import style from "./floor.module.css";
export const Floor = () => {
  return (
    <div className={style.container}>
      <div>
        <svg
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 18V6L8 0L16 6V18H0ZM2 16H9V13H2V16ZM11 16H14V13H11V16ZM2 11H5V8.025H2V11ZM7 11H14V8.025H7V11ZM3.3 6.025H12.7L8 2.5L3.3 6.025Z"
            fill="black"
            fillOpacity="0.8"
          />
        </svg>
      </div>
      <div className={style.text}>Floor 2 / Bedroom</div>
    </div>
  );
};
