import React from "react";
import UserInput from "./components/UIComponents/UserInput";
import UsersList from "./components/UIComponents/UsersList";
import { useState } from "react";
import ErrorModal from "./components/UIComponents/ErrorModal";

function App() {
  const initialCondition = { flag: true, msg: "" };
  const [isValid, setIsvalid] = useState(initialCondition);
  const [userInput, setUserInput] = useState([]);
  const userDataHanler = (userInput) => {
    console.log(userInput);
    setUserInput((prev) => {
      if (userInput["user-name"] === "" || userInput["user-age"] === "") {
        setIsvalid({
          flag: false,
          msg: "Please, fill all the data (no value should be empty)",
        });
        console.log(isValid);
        return prev;
      }
      if (userInput["user-age"] <= 0) {
        setIsvalid({ flag: false, msg: "Entered age is not valid" });
        return prev;
      }

      console.log("outer");
      const updated = [userInput, ...prev];
      return updated;
    });
  };

  const modalHandler = () => {
    setIsvalid(initialCondition);
  };
  return (
    <div>
      <UserInput onSave={userDataHanler} />
      <UsersList data={userInput} />
      {!isValid.flag && (
        <ErrorModal data={isValid} onCloseModal={modalHandler} />
      )}
    </div>
  );
}

export default App;
