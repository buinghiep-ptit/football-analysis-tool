import AuthButtons from 'component/AuthButtons'
import Header from 'component/Header'
import Nav from 'component/Nav'
import Trending from 'component/Trending'
import React from 'react'
import './App.css'

function App() {
  return (
    <div className="grid md:grid-cols-5">
      <Nav />
      <main className="px-12 py-6 md:col-span-4 bg-cyan-50">
        <AuthButtons />
        <Header />
        <Trending />
      </main>
    </div>
  )
}

export default App
