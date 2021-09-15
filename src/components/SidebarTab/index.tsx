import React, { useState} from 'react'
// import "../assets/scss/page/userbar.scss"
import { HomeSVG, DiscoverSVG, ActivitySVG, TradingSVG, AboutSVG } from '../CustomSVG'

const SidebarTab: React.FC = () => {
  const [selected, setSelected] = useState("discover")
  return (
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
  )
}

export default SidebarTab;
