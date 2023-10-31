import { useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState(false);
  const [editInput, setEditInput] = useState("");
  const [status, setStatus] = useState(false);
  const handleSubmit = () => {
    const payload = {
      title: input
    };

    setData([...data, input]);
    console.log(data);
  };

  const handleDelete = (id) => {
    const ds = data.filter((item, index) => {
      return index != id;
    });
    setData(ds);
    console.log(id);
  };

  const handleEdit = (item, index) => {
    setEdit(true);
    setInput(item);
    const dup = [...data];
    dup[index] = input;

    setEditInput(index);
  };

  const saveSubmit = () => {
    console.log(data[editInput]);
    setInput("");
    setEdit(false);
    data[editInput] = input;
    console.log(editInput);
  };

  const handleToggle = () => {
    setStatus(!status);
  };

  return (
    <div className="App">
      <h1>
        <input
          type="text"
          name="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </h1>
      {edit ? (
        <button onClick={saveSubmit}>save</button>
      ) : (
        <button onClick={handleSubmit}>submit</button>
      )}
      {data.map((item, index) => {
        return (
          <div key={index}>
            <h1 className={status ? "text_decoration" : "text"}>
              {item}:{status ? "completed" : "notcompleted"}
            </h1>
            <button onClick={() => handleDelete(index)}>delete</button>
            <button onClick={() => handleEdit(item, index)}>edit</button>
            <button onClick={handleToggle}>toggle</button>
          </div>
        );
      })}
    </div>
  );
}
