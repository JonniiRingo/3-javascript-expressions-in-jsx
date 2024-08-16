// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
import React from "react";
import ReactDOM from "react-dom/client";

// Create the root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app
root.render(
  <React.StrictMode>
    <div>
      <h1>My Favourite Foods</h1>
      <ul>
        <li>Bacon</li>
        <li>Noodles</li>
        <li>Jamon</li>
      </ul>
    </div>
  </React.StrictMode>
);