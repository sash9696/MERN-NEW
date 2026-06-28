import React, {useState} from "react";

function LoginForm() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            email,
            password
        })
    }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>

      <input type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} />

      <input type="password" placeholder="Enter password" value={password} onChange={(event) => setPassword(event.target.value)} />

      <button>
        Login
      </button>

      <p>Email: {email} </p>

      <p>Password: {password} </p>
    </form>
  );
}

export default LoginForm;
