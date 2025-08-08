import React, { useState } from "react";

const FormWrite = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    email: "",
  });
  const inputUpdate = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setProfile({
      ...profile,
      [name]: value,
    });
  };
  return (
    <div>
      <h2>프로파일 작성</h2>
      이름:{" "}
      <input
        type="text"
        name="name"
        value={profile.name}
        onChange={inputUpdate}
      />
      <br />
      나이:{" "}
      <input
        type="text"
        name="age"
        value={profile.age}
        onChange={inputUpdate}
      />
      <br />
      이메일:{" "}
      <input
        type="text"
        name="email"
        value={profile.email}
        onChange={inputUpdate}
      />
    </div>
  );
};

export default FormWrite;
