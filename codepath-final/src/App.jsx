import { useState } from 'react'
import './App.css'
import DisplayPosts from './pages/DisplayPosts'

function App() {

  return (
    <>
      <h1> Anonymous Forums </h1>
      <h2> Post about anything</h2>
      <DisplayPosts/>
    </>
  )
}

export default App
