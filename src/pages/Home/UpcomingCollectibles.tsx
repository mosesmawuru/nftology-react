import React from 'react'
import ImageCard from '../../components/ImageCard'
import content from '../../constant/en.json'

const UpcomingCollectibles: React.FC = () => {
  return (
    <div className="cards_group">
      <div className="card_title">{content.upcom_collectible}</div>
      <div className="card_image">
        <ImageCard timeFlag isBell />
        <ImageCard timeFlag isBell />
        <ImageCard timeFlag isBell />
      </div>
      <div className="card_footer_side">
        <div className="miss_message">{content.miss_nessage}</div>
        <div className="email_input_div">
          <input className="email_input" placeholder="email" />
        </div>
      </div>
    </div>
  )
}

export default UpcomingCollectibles
