import React from 'react'
import ImageCard from '../../components/ImageCard'
import content from '../../constant/en.json'

const PopularCollectibles: React.FC = () => {
  return (
    <div className="cards_group">
      <div className="card_title">{content.popular_collectible}</div>
      <div className="card_image">
        <ImageCard timeFlag={false} isBell={false} />
        <ImageCard timeFlag={false} isBell={false} />
        <ImageCard timeFlag={false} isBell={false} />
      </div>
    </div>
  )
}

export default PopularCollectibles
