import React from "react";

const MapTest = () => {
  const fruits = ["Tomato", "Apple", "Peach"];
  return (
    <div>
      <h1> 과일 </h1>
      <ul>
        {fruits.map((fruit, index) => (
          // <li>{fruits[index]}</li>
          <li key={index}>{fruit}</li>
        ))}
        {/* <li>{todos[0].text}</li>
          <li>{todos[1].text}</li>
          <li>{todos[2].text}</li> */}
      </ul>
    </div>
  );
};

export default MapTest;
