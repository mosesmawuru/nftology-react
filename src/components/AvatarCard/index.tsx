import React from 'react'
import '../ImageCard/imageCard.scss'
// import CardImage from '../../assets/images/common.png'
import avatar from '../../assets/images/Ellipse 1.png'
import { ArrowSVG, BellSVG } from '../CustomSVG'

type CustomProps = { isBell: boolean }

const AvatarCard = ({ isBell }: CustomProps) => {
  return (
    <div className="card_footer_div">
      <div className="card_footer">
        <div className="card_avatar">
          <img src={avatar} className="avatar_img" alt="avatar" />
        </div>
        <div className="card_avatar_desc">
          <div className="avatar_title">NameOfCollectible</div>
          <div className="avatar_subtitle">NameOfUser</div>
        </div>
      </div>
      {isBell ? (
        <div className="footer_bell">
          <BellSVG />
        </div>
      ) : (
        <div className="footer_bell">
          View
          <ArrowSVG selected="#000" />
        </div>
      )}
    </div>
  )
}

export default AvatarCard
