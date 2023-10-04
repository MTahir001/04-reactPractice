import styles from "./UsersList.module.css";
import Card from "../Card/Card";
const UsersList = (props) => {
  return (
    <Card>
      {props.data.map((ele, i) => (
        <div
          key={i}
          className={styles.item}
        >{`${ele["user-name"]} is ${ele["user-age"]} years old`}</div>
      ))}
    </Card>
  );
};
export default UsersList;
