import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {HabitProvider} from "./context/habbitContext.jsx";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <HabitProvider>
              <App />
          </HabitProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
