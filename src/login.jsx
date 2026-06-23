import React, { useState, useEffect } from 'react'

export default function LoginIn({ users, setPage, setPlayerName, page }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')


  const handleLogin = () => {
    const validUser = users.find((user) => user.email === email && user.password === password
    );

    if (validUser) {
      setError("");
      setPlayerName(validUser.firstName);

      // Clear inputs
      setEmail("");
      setPassword("");

      if (validUser.role === 'admin') {
        setPage('admin')
      } else {
        setPage('exam')
      }
    }
    else {
      setError("Email or password is incorrect");
    }

  }

  useEffect(() => {
    if (page === "login") {
      setEmail("");
      setPassword("");
      setError("");
    }
  }, [page]);

  return (

    <div className="App">
      <div className='login-div'>

        <h3> Enter Your Log in Details</h3>

        <div className='input'>
          <input
            type="email"
            value={email}
            placeholder="Enter Your E-mail"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            value={password}
            placeholder="Enter Your Password"
            autoComplete="new-password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && (
          <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
        )}

        <div className="button-container">
          <button class="submit-btn" onClick={handleLogin}>Log in</button>
        </div>
        <p>
          You want to create account?{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => setPage("signup")}
          >
            Signup
          </span>
        </p>

      </div>
    </div>
  )
}
