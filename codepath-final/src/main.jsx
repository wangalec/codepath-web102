import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import CreatePost from './pages/CreatePost.jsx'
import Layout from './routes/Layout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Layout />}>
          <Route index={true} element={<App />}/>
          <Route path="/create" element={<CreatePost />}/>
          {/* <Route 
            index={false} 
            path="/edit/:id" 
            element={<EditPlayer />} 
          /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
