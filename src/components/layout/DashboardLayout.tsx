import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}
      <main className="flex-1 container">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default DashboardLayout
