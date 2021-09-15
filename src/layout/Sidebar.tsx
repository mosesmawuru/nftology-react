import React, { useState} from 'react'
import logo from "../assets/images/Logo.png"
import Button from '../components/CustomButton'
import { HomeSVG, DiscoverSVG, ActivitySVG, TradingSVG, AboutSVG } from '../components/CustomSVG'
import "../assets/scss/page/sidebar.scss"

const Sidebar: React.FC = () => {
  const [selected, setSelected] = useState("discover")
  return (
      <div className="sidebar">
        <img src={logo} alt="logo" width="214.64" height="65.69"/>
        <div>
          <button type="button" onClick={()=>{setSelected("home")}}>
            Hello
          </button>
          <div>
            <HomeSVG selected={selected}/>
          </div>    
          <div>
            <DiscoverSVG  selected={selected}/>
          </div>
          <div>
            <ActivitySVG  selected={selected}/>
          </div>
          <div>
            <TradingSVG  selected={selected}/>
          </div>
          <div>
            <AboutSVG  selected={selected}/>
          </div>
        </div>
        <div>
          <Button 
            border="none"
            color="#E5E9FA"
            height = "54px"
            onClick={() => console.log("You clicked on the pink circle!")}
            radius = "12px"
            width = "219px"
            // children = "I'm a pink circle!"
          />
        </div>
        </div>

  )
}

export default Sidebar;