import { useState } from "react";
import styles from "./modal.module.scss";
import { AiFillCloseCircle } from "react-icons/ai";


interface IModalPage {
  open?: boolean;
  clickClose?: () => void;
}
const Modal: React.FC<IModalPage> = ({ open, clickClose, image, title, text }) => {
 
  return (
    <>
      {!!open && (
        <div className={styles.modal}>
          <div className={styles.header}>
            <AiFillCloseCircle
              className={styles.modal_close}
              onClick={clickClose}
            />
          </div>
          <div className={styles.content}>
            <img src={image}></img>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
