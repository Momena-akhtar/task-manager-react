import React, { useState } from 'react';
import TaskInput from './components/TaskInput/TaskInput';
import TaskList from './components/TaskList/TaskList';
import Weather from './components/Weather/Weather';  // Import the Weather component
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './components/Auth/authSlice';


const App = () => {
  const [tasks, setTasks] = useState([]);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [city, setCity] = useState("Chicago"); // Default city for weather
  const [darkMode, setDarkMode] = useState(false); // State for dark mode toggle
  const [showDialog, setShowDialog] = useState(true); // Control for showing the dialog
  const [isLogin, setIsLogin] = useState(true); // Switch between login and signup
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [loggedInUser, setLoggedInUser] = useState("");
  
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || []; // Get the users from localStorage
    const userExists = users.find(
      (user) =>
        user.username === credentials.username &&
        user.password === credentials.password
    );
  
    if (!userExists) {
      alert("Account doesn't exist!");
    } else {
      alert("Login successful!");
      setLoggedInUser(credentials.username);
      setShowDialog(false); // Close the dialog on successful login
    }
  };
  
  const handleSignup = () => {
    const users = JSON.parse(localStorage.getItem("users")) || []; // Get the users from localStorage
    const userExists = users.find((user) => user.username === credentials.username);
  
    if (userExists) {
      alert("User already exists!");
    } else {
      users.push({ username: credentials.username, password: credentials.password });
      localStorage.setItem("users", JSON.stringify(users)); // Save updated users to localStorage
      alert("Signup successful! You can now log in.");
      setIsLogin(true); // Switch to login after signing up
    }
  };
  

  // Styles for dark and light mode
  const appStyles = {
    backgroundColor: darkMode ? "#121212" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    height: "100vh", // Full height to cover the screen
    flexDirection: "column",
  };

  const weatherStyles = {
    position: "absolute",
    fontSize: "14px",
    fontFamily: "'Helvetica', sans-serif",
    top: "10px",
    right: "20px",
    backgroundColor: darkMode ? "rgba(6, 37, 63, 0.77)" : "rgba(16, 75, 122, 0.77)",
    color: darkMode ? "white" : "black",
    padding: "10px",
    borderRadius: "20px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.4)",
  };

  const toggleButtonStyles = {
    position: "absolute",
    top: "20px",
    right: "300px",
    backgroundColor: darkMode ? "#333" : "#eee",
    color: darkMode ? "white" : "black",
    border: "none",
    borderRadius: "20px",
    padding: "8px 12px",
    cursor: "pointer",

    //on hover
    transition: "all 0.3s ease",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    
  };
  const dialogStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    zIndex: 1000,
    minWidth: "300px",
    textAlign: "center",
  };

  const overlayStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
  };

  const buttonStyles = {
    backgroundColor: darkMode ? "#333" : "#007BFF",
    color: "#fff",
    border: "none",
    fontFamily: "Kumbs-sans, sans-serif",
    borderRadius: "15px",
    padding: "10px 20px",
    cursor: "pointer",
    margin: "10px 0",
  };

  const linkStyles = {
    color: darkMode ? "#007BFF" : "#000",
    cursor: "pointer",
    textDecoration: "underline",
  };
  return (
    <div style={appStyles}>
      {showDialog && (
        <>
          <div style={overlayStyles}></div>
          <div style={dialogStyles}>
            <h2 style={{fontSize: "20px"}}>{isLogin ? "Login" : "Sign Up"}</h2>
            <input
              type="text"
              placeholder="Username"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              style={{ display: "block", 
                width: "100%", 
                marginBottom: "10px",
                 padding: "10px", 
                 borderRadius: "15px", 
                 fontSize: "16px", fontFamily: "Kumbh-Sans, sans-serif" }}
            />
            <input
              type="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              style={{ display: "block", 
                width: "100%", 
                marginBottom: "10px",
                 padding: "10px", 
                 borderRadius: "15px", 
                 fontSize: "16px", fontFamily: "Kumbh-Sans, sans-serif" }}
            />
            <button
              style={buttonStyles}
              onClick={isLogin ? handleLogin : handleSignup}
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
            <p>
              {isLogin
                ? "Don't have an account?"
                : "Already have an account?"}{" "}
              <span
                style={linkStyles}
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Sign Up" : "Login"}
              </span>
            </p>
          </div>
        </>
      )}
      {!showDialog && (
        <>
      <div style={{ flex: 1 }}>
        <h1 className="m-2"
        style={{
          fontSize: '36px',
          fontWeight: 'bold',
          color: darkMode ? '#e0e0e0' : '#123357',
          textShadow: darkMode
            ? '2px 2px 5px rgba(255, 255, 255, 0.1)'
            : '2px 2px 5px rgba(0, 0, 0, 0.2)',
          marginBottom: '20px',
          fontFamily: "'Kumbh Sans', sans-serif", // Using Kumbh Sans
          letterSpacing: '1px',
        }}
        >Hello, there!</h1>
        <TaskInput onAddTask={handleAddTask} darkMode={darkMode} />
        <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} darkMode={darkMode} />
        {/* Render tasks here */}
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.description} - {task.priority}
            </li>
          ))}
        </ul>
      </div>

      {/* Dark/Light Mode Toggle Button */}
      <button onClick={toggleDarkMode} style={toggleButtonStyles}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
          { /*User button*/}
          {loggedInUser && (
        <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          position: "absolute",
          top: "20px",
         
          backgroundColor: darkMode ? "#333" : "#f1f1f1",
          padding: "5px 10px",
          borderRadius: "20px",
          boxShadow: "0 0 8px rgba(0, 0, 0, 0.2)",
          color: darkMode ? "#fff" : "#000",
          right: "420px",
        }}
      >
    <img
      src="https://cdn-icons-png.flaticon.com/512/847/847969.png"  // Use an actual user icon here
      alt="User Icon"
      style={{ borderRadius: "50%", width: "30px", height: "30px" }}
    />
    <span>{loggedInUser}</span>
  </div>
)} 
      {/* Weather component in top-right */}
      <div style={weatherStyles}>
        <Weather city={city} />
      </div>
      </>
      )}
    </div>
  );
};

export default App;
