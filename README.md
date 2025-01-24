# Task Manager

## Overview
A simple Task Manager application built with React that allows users to add, prioritize, and delete tasks. The application supports light and dark mode toggling for better user experience and integrates a weather widget to display current weather information.

---

## Features
- **Add Tasks**: Users can input a task description and assign a priority (High, Medium, Low).
- **Delete Tasks**: Remove tasks from the list as needed.
- **Dark Mode**: Toggle between light and dark modes for a personalized interface.
- **Weather Widget**: Displays the current weather of the selected city, including temperature, humidity, and wind speed.
- **User Authentication**: Simple login and signup functionality with username and password.
- **User Icon**: Displays a user icon and name upon login.

---

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/task-manager.git
   cd task-manager
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

---

## Usage
1. Open the app in your browser at `http://localhost:3000`.
2. Sign up using your username and password.
3. Log in with the credentials you just created.
4. Add tasks, assign priority, and manage your task list.
5. Toggle dark mode using the button in the top-right corner.
6. View current weather information displayed alongside the task list.

---

## File Structure
```plaintext
src
├── components
│   ├── TaskInput.js        // Input field and controls for adding tasks
│   ├── TaskList.js         // Displays the list of tasks
│   ├── Weather.js          // Weather widget
│
├── App.js                  // Main application logic
├── index.js                // Entry point
├── styles
│   ├── TaskInput.css       // Styling for TaskInput component
│   ├── TaskList.css        // Styling for TaskList component
│   ├── App.css             // Global styles
```

---

## Dependencies
- React
- OpenWeatherMap API (for weather data)

---

## Customization
1. Update **OpenWeatherMap API Key** in the `Weather` component:
   ```javascript
   const API_KEY = 'your_api_key';
   ```
2. Customize themes and styles by modifying the respective CSS files.

---

## License
This project is licensed under the MIT License. Feel free to use and modify it as per your needs.

---

## Acknowledgments
- [React](https://reactjs.org/) for the UI framework.
- [OpenWeatherMap](https://openweathermap.org/) for weather data API.
- [Flaticon](https://www.flaticon.com/) for the user icon.
