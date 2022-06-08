import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111"
}

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke"
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);

// ReactDOM.render를 사용하면 브라우저 에러가 발생하는데 이는 ReactDOM.render를 리액트 v18부터 사용하지 않기 때문에 나타나는 에러이다.
