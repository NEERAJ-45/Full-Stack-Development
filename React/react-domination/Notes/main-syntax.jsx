// * Importing StrictMode from React - it helps in identifying potential issues in an application
import { StrictMode } from 'react'

// * Importing createRoot from React-DOM to render the app into the DOM
import { createRoot } from 'react-dom/client'

// * Importing the main component (App) from the file App.jsx
import App from './App.jsx'

// @ Importing a CSS file for styling
import './index.css'

//  * Rendering the App component inside the DOM element with the ID 'root'
// * 'root' is a div in the index.html file where the entire app will be mounted
createRoot(document.getElementById('root')).render(
    <App />
)
