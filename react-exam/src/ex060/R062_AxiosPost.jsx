import React, { useState, useEffect } from "react";
import axios from "axios";

const R062_AxiosPost = () => {
  const [title, setTitle] = useState("title");
  const [author, setAuthor] = useState("body");
  const postAxios = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: "foo",
        author: "bar",
        userId: 1,
      })
      .then((response) => {
        setTitle(response.data.title);
        setAuthor(response.data.author);
      });
  };
  useEffect(() => {
    postAxios();
  }, []);

  return (
    <div>
      <h3>{title}</h3>
      <h3>{author}</h3>
    </div>
  );
};

export default R062_AxiosPost;
