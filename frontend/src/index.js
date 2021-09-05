import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

fetch("http://localhost:8000/debug/")
  .then((response) => response.text())
  .then(data => {
    data = data.replace(
      'data-render-panel-url="/__debug__/render_panel/"',
      'data-render-panel-url="http://localhost:8000/__debug__/render_panel/"'
    )
    const djdt = document.createRange().createContextualFragment(data)
    document.getElementById("root").appendChild(document.importNode(djdt, true));
  });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
