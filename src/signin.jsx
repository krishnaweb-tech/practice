import React, { useState , useEffect} from 'react'


function SignIn({ users, setPage, setUsers , page}) {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleSignup = () => {

    // Check if all fields are filled
    if (!firstName || !lastName || !email || !password) {
      setError('Please fill in all fields')
      return;
    }

    // Check if account already exists
    const existingUser = users.find((users) => users.email === email)

    if (existingUser) {
      setError('This email is already registered. Please use another email.');
      return;
    }

    // Create new user

    const newUser = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      password: password
    };



    // Save user
     const updatedUsers = [...users, newUser];

     setUsers(updatedUsers); 

      localStorage.setItem("users", JSON.stringify(updatedUsers)); 

    setError("");

    alert("Account created successfully!");


    // Go to login page
    setPage('login')

  }

 useEffect(() => {
  if (page === "signup") {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setError("");
  }
}, [page]);



  return (
    <div className="App">
      <div className='login-div'>

        <h3> Enter Your Sign Up Details</h3>

        <div className='input'>
          <input type='text' value={firstName} placeholder='Enter Your First Name' onChange={(e) => setFirstName(e.target.value)} />
          <input type='text' value={lastName} placeholder='Enter Your Last Name' onChange={(e) => setLastName(e.target.value)} />
          <input type='e-mail' value={email} placeholder='Enter Your E-mail' onChange={(e) => setEmail(e.target.value)} />
          <input type='password' value={password} placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} />
        </div>

        {error && (<p style={{ color: 'red', textAlign: "center" }}>{error}</p>)}

        <div class="button-container">
          <button class="submit-btn" onClick={handleSignup}>Sign Up</button>
        </div>
        <p>
          Already have an account?{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => setPage("login")}
          >
            Login
          </span>
        </p>

      </div>
    </div>
  )
}

export default SignIn