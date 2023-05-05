
// // App.js

// import React, { useState, useEffect } from 'react';

// const App = () => {
//   const [data, setdata] = useState([]);
//   const [value, setvalue] = useState(10);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos?_limit=${value}")
//       .then((response) => response.json())
//       // .then((content) => console.log("content", content))
//       .then((data) => setdata(data))
//       .then((data)=>console.log(data))
//   }, [])

//   function nextpage(){
//     if(value===100){
//  let final=value+10;
//  setvalue(final);
//  console.log("value",value)
//     }
//   }

//   return (
//     <div>
//       <h1>Api integration in React</h1>
//       <p>handson repeat mode</p>
//       <button onClick={nextpage()}>Add on</button>
//       <button style={{marginLeft:5}}>previous on</button>
//     <div>
//       {data?.map(item =>
//       <div> 
//       <li key={item.id}>{item.id}{item.title}</li>
//       <li key={item.id}>{item.title}</li>
//       </div>
//       )}
  
//       </div>
//     </div>
//   )
// }
// export default App
