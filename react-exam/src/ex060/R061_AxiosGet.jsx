import axios from "axios";
import React, { useState, useEffect } from "react";
import { useFormState } from "react-dom";

const R061_AxiosGet = () => {
  const [title, setTitle] = useState("");

  const getFetch = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        setTitle(response.data.title);
      });
  };
  useEffect(() => {
    getFetch();
  }, []);

  return <div>{title}</div>;
};

export default R061_AxiosGet;
