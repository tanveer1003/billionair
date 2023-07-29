import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import IndexPage from './pages/index';
import Campaign from './pages/campaign';
import Sale from './pages/sale';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
/*
export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />

        <Route path="/campaign" element={<Campaign />} />
        <Route path="/aa" element={<App />} />
        <Route path="/how-to-buy-the-airb-token-pre-sale" element={<Sale />} />
      </Routes>
    </BrowserRouter>
  );
}
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IndexPage />);
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sale />}>
         
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/how-to-buy-the-airb-token-pre-sale" element={<Sale />} />
        <Route path="*" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
*/
//<App />
//<Route index element={<App />} />
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
