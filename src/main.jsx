import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store.js';
import App from './App'
import './index.css'
import { PokemonApp } from './PokemonApp.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <App /> */}
    <PokemonApp />
    </Provider>
  </React.StrictMode>,
)
