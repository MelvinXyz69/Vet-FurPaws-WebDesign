function login() {
    const username = document.getElementById('username').value.toLowerCase(); //Lowercase for case-insensitive check
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
  
    // **CRITICAL: REPLACE THIS WITH SERVER-SIDE AUTHENTICATION**
    const credentials = {
      "user": { username: "user", password: "password" },
      "admin": { username: "admin", password: "admin" },
      "employee": { username: "employee", password: "employee" }
    };
  
    const validLogin = Object.values(credentials).some(user => 
        user.username === username && user.password === password
    );
  
    if (validLogin) {
      message.textContent = "Login successful!";
      message.style.color = "green";
  
      // Redirect to appropriate page after a delay
      setTimeout(() => {
        // Determine redirect URL based on username (replace with your actual logic)
        let redirectUrl = username === "admin" ? "admin.html" : 
                           username === "employee" ? "Employee.html" : "user.html";
        window.location.href = redirectUrl;
      }, 1000); // 1-second delay
  
    } else {
      message.textContent = "Invalid username or password.";
      message.style.color = "red";
    }
  }