import { useState } from "react";

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    gap: "20px",
    width: "600px", 
    marginLeft: "20px"
  },
  component: {
    width: "100px",
  },
};

interface props {
  InputChange : (value : string) =>void
}
const InputBox = ({ InputChange } : props) => {
  const [inputValue, setinputValue] = useState("");
  const [buttonClicked , setbuttonClicked] = useState(false)
  const onChangeValue = (e : any) => {
    setinputValue(e.target.value)
    
  };
  const onButtonClicked = () => (
    setbuttonClicked(true),
    InputChange(inputValue),
    setinputValue('')

  )
  return (
    <div style={styles.container}>
      <input
        className="form-control form-control-lg"
        type="text"
        placeholder="Add a Task"
        value={inputValue}
        onChange={onChangeValue}
      ></input>
      <button type="button" className="btn btn-primary" onClick={onButtonClicked}>
        Add
      </button>
    </div>
  );
};

export default InputBox;
