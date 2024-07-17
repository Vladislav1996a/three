import style from "./button.module.css";

export const Button = ({ children }) => {
  return <button className={style.button}>{children}</button>;
};
