import React from 'react'
import './imageCard.scss'
import CardImage from '../../assets/images/common.png'

import AvatarCard from '../AvatarCard'

type CustomProps = { timeFlag: boolean; isBell: boolean }

const ImageCard = ({ timeFlag, isBell }: CustomProps) => {
  return (
    <div
      className="image-card"
      style={{ backgroundImage: `url(${CardImage})` }}
    >
      {timeFlag ? (
        <div className="time_player">
          <div className="time">25h 25m 30s</div>
        </div>
      ) : null}

      <AvatarCard isBell={isBell} />
    </div>
  )
}

export default ImageCard
