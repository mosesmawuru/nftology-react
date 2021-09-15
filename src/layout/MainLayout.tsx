import React from 'react'

// import Header from './Header'
import Userbar from './Userbar';
import Sidebar from './Sidebar';

type MainLayoutProps = { children: any };
const MainLayout = ({children}:MainLayoutProps) => {
  return (
      <div className="main-container">
        <Sidebar/>
        <div className="main-content">
          {/* <Header/> */}
          {children}
        </div>
        <Userbar/>
      </div>
  )
}

export default MainLayout
