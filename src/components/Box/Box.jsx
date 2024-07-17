import style from "./box.module.css";

export const Box = ({ children, link }) => {
  return (
    <a href={link}>
      <div className={style.container}>{children}</div>
    </a>
  );
};
