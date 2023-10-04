import { useState } from "react";
import Card from "../Card/Card";
import styles from "./UserInput.module.css";
const UserInput = (props) => {
  const initialData = {
    "user-name": "",
    "user-age": "",
  };
  const [userInput, setUserInput] = useState(initialData);
  const inputChangeHandler = (identifier, value) => {
    if (/\d/.test(value) && identifier === "user-name") {
      return;
    }
    setUserInput((prev) => ({ ...prev, [identifier]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userInput);
    props.onSave(userInput);
    setUserInput(initialData);
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <label for="user-name">
          User Name <br />
          <input
            value={userInput["user-name"]}
            type="text"
            id="user-name"
            onChange={(e) => inputChangeHandler("user-name", e.target.value)}
          ></input>
          <br />
        </label>

        <label for="user-age">
          Age (in Years) <br />
          <input
            value={userInput["user-age"]}
            type="number"
            id="user-age"
            onChange={(e) => inputChangeHandler("user-age", +e.target.value)}
          ></input>
        </label>
        <button>Add</button>
      </form>
    </Card>
  );
};

export default UserInput;
