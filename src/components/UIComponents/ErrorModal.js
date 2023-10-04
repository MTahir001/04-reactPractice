import styles from "./ErrorModal.module.css";
const ErrorModal = (props) => {
  const errorHandler = (e) => {
    console.log(styles);
    if (
      e.target.className === styles.wrapper ||
      e.target.className === styles.btn
    )
      props.onCloseModal();
  };
  return (
    <div onClick={errorHandler} className={styles.wrapper}>
      <div className={styles.modal}>
        <h4>{props.data.msg}</h4>
        <div onClick={errorHandler} className={styles.btn}>
          OK
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
