import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserStore } from './contexts/userContext';
import { VideoStore } from './contexts/videoContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserStore>
      <VideoStore>
        <App />
      </VideoStore>
    </UserStore>
  </React.StrictMode>
);

