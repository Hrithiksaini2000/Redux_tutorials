import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
// import "./store.jsx"
// import "./store2.jsx"
import { Provider } from 'react-redux'
import { store } from './store.jsx'
import "./App.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* This is a Provider component which is act as bridge between react and redux */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
