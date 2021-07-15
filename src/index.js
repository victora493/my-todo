import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import TodoProvider from './store/TodoProvider'

ReactDOM.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
