import React, { useState, useEffect } from "react";

const R059_FetchFunc = () => {
  const [title, setTitle] = useState("");

  //   useEffect(() => {
  //     const getFetch = async () => {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/todos/3"
  //       );
  //       const body = await response.json();
  //       setTitle(body.title);
  //     };
  //     getFetch();
  //   }, []);

  useEffect(() => {
    const getFetch = () => {
      const response = fetch("https://jsonplaceholder.typicode.com/todos/3")
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          setTitle(json.title);
        });
    };
    getFetch();
  }, []);
};

export default R059_FetchFunc;
