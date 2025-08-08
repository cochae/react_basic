import React, { useEffect, useState } from "react";

const R060_FetchPost = () => {
  const [title, setTitle] = useState("title");
  const [author, setAuthor] = useState("body");
  const postFetch = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        author: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setTitle(json.title);
        setAuthor(json.author);
      });
  };
  useEffect(() => {
    postFetch();
  }, []);
  return (
    <div>
      <h3>{title}</h3>
      <h3>{author}</h3>
    </div>
  );
};

export default R060_FetchPost;
