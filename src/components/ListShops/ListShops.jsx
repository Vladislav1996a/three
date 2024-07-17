import { mockShops } from "../../mock/mockShops";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import style from "./listShops.module.css";
export const ListShops = () => {
  return (
    <div>
      <div className={style.row}>
        <Input />
        <button className={style.button}>
          <span>Saved</span>
          <svg
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4708 8.43542L8.80831 6.7875L9.63956 5.97083L10.4708 6.7875L12.5271 4.73125L13.3583 5.54792L10.4708 8.43542ZM6.41665 11.25L4.56456 9.5875C3.86456 8.95556 3.26422 8.39167 2.76352 7.89583C2.26283 7.4 1.84963 6.93333 1.52394 6.49583C1.19824 6.05833 0.960049 5.63542 0.809355 5.22708C0.65866 4.81875 0.583313 4.39097 0.583313 3.94375C0.583313 3.02986 0.889563 2.2691 1.50206 1.66146C2.11456 1.05382 2.87776 0.75 3.79165 0.75C4.2972 0.75 4.77845 0.856944 5.2354 1.07083C5.69234 1.28472 6.08609 1.58611 6.41665 1.975C6.7472 1.58611 7.14095 1.28472 7.5979 1.07083C8.05484 0.856944 8.53609 0.75 9.04165 0.75C9.82915 0.75 10.4903 0.971181 11.025 1.41354C11.5597 1.8559 11.9243 2.4125 12.1187 3.08333H10.8791C10.7041 2.69444 10.4465 2.40278 10.1062 2.20833C9.76595 2.01389 9.41109 1.91667 9.04165 1.91667C8.54581 1.91667 8.11803 2.05035 7.75831 2.31771C7.39859 2.58507 7.06317 2.9375 6.75206 3.375H6.08123C5.77984 2.9375 5.43713 2.58507 5.0531 2.31771C4.66908 2.05035 4.24859 1.91667 3.79165 1.91667C3.23748 1.91667 2.75866 2.10868 2.35519 2.49271C1.95172 2.87674 1.74998 3.36042 1.74998 3.94375C1.74998 4.26458 1.81804 4.59028 1.95415 4.92083C2.09026 5.25139 2.33331 5.63299 2.68331 6.06562C3.03331 6.49826 3.5097 7.00382 4.11248 7.58229C4.71526 8.16076 5.48331 8.85833 6.41665 9.675C6.66942 9.45139 6.96595 9.19375 7.30623 8.90208C7.64651 8.61042 7.91873 8.36736 8.1229 8.17292L8.95415 9.00417C8.74026 9.19861 8.46803 9.43924 8.13748 9.72604C7.80692 10.0128 7.51526 10.2681 7.26248 10.4917L6.41665 11.25Z"
              fill="#1C1C1C"
            />
          </svg>
        </button>
      </div>
      <div className={style.between}>
        <div className={style.count}>81 shops</div>
        <select className={style.select} name="value" id="1">
          <option value="sort by alphabet">sort by alphabet</option>
          <option value="sort by alphabet">sort by price</option>
          <option value="sort by alphabet">sort by date</option>
        </select>
      </div>
      <div className={style.list}>
        {mockShops.map((item) => (
          <div className={style.item} key={item.title}>
            {item.title} <span className={style.number}>({item.count})</span>
          </div>
        ))}
      </div>
      <Button>Use your own texture</Button>
    </div>
  );
};
