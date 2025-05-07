import React from 'react';
import ReactDOM from 'react-dom/client';  // 从 'react-dom/client' 导入
import './index.css';
import App from './App';

// 创建 root 容器并渲染 App 组件
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);