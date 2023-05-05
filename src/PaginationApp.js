import React from "react";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import axios from "axios";

const App = () => {
  const [data, setdata] = useState([]);
  const [perpage, setPerpage] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setdata(response.data);
      setPerpage(response.data.slice(0, 10));
    });
  }, []);

  const pagehandler = (pageNumber) => {
    setPerpage(data.slice(pageNumber * 10 - 10
      , pageNumber * 10));
  };

  return (
    <div className="App">
      <h1>hello world</h1>

      {perpage ? (
        <div>
          {perpage.map((post) => (
            <div key={post.id}>
              {post.id}
              {post.title}
            </div>
          ))}{" "}
          <br />
          <Pagination data={data} pagehandler={pagehandler} />
        </div>
      ) : (
        <p>data not loaded</p>
      )}
    </div>
  );
};
export default App;
