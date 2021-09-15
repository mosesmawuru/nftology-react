import React from 'react'

import Userbar from './Userbar'
import Sidebar from './Sidebar'

type MainLayoutProps = { children: any }
const MainLayout = ({ children }: MainLayoutProps) => {
  const isAuthenticate = false
  return (
    <div className="main-container">
      <Sidebar />
      <div
        className={`main-content ${
          isAuthenticate ? 'login_width' : 'logout_width'
        }`}
      >
        {children}
      </div>
      {isAuthenticate && <Userbar />}
    </div>
  )
}

export default MainLayout
