import React from "react";

const TodoList = ({todos,deleteHandler,deleteall}) => {
  return (
    <div>
      {todos?.map((todo, index) => (
        <div key={index} style={{flexDirection:'row',alignContent:'space-around'}}>
          <h5>{todo}</h5>
          <button onClick={()=>deleteHandler(index)}>delete</button>
        </div>
      ))}
 <button onClick={()=>deleteall()}>delete All</button>
    </div>
  );
};
export default TodoList;
