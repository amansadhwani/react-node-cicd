import "./App.css";
import React, {  useState } from "react";
function App() {
  const name = "Aman";
  const [data, setData] = useState([
    { name: "Rafa", id: 0 },
    { name: "Nadal", id: 1 },
    { name: "Roger", id: 2 },
    { name: "Federer", id: 3 },
  ]);

  const onDelete = (key) => {
    const filterData = data.filter((item) => {
      return item.id !== key;
    });
    setData(filterData);
  };

  return (
    <div className="App">
      <h1>Hello Welcome to CICD Pipeline</h1>
      <h3>My Name is {name}</h3>
      {data.map((item) => {
        return (
          <h4 onClick={() => onDelete(item.id)} key={item.id}>
            {item.name}
          </h4>
        );
      })}
    </div>
  );
}

export default App;
