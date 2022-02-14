import * as React from "react";

const LoginForm = () => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userName, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User Name:
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
    </form>
  );
};

export default LoginForm;
