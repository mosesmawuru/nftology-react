import React from 'react'
import logo from '../assets/images/Logo.png'
import Button from '../components/CustomButton'

import '../assets/scss/page/sidebar.scss'

import SidebarTab from '../components/SidebarTab'

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="logo-div">
        <img className="logo-image" src={logo} alt="logo" />
      </div>
      <div className="sidebar_tab">
        <SidebarTab />
      </div>
      <div className="sidebar_btn">
        <Button
          border="none"
          color="#E5E9FA"
          height="54px"
          onClick={() => console.log('You clicked on the pink circle!')}
          radius="12px"
          width="219px"
          value="Connect Wallet"
        />
      </div>
    </div>
  )
}

export default Sidebar
