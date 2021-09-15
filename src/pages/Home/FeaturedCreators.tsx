import React from 'react'
import AvatarCard from '../../components/AvatarCard'
import { ArrowSVG } from '../../components/CustomSVG'
import content from '../../constant/en.json'

const FeaturedCreators: React.FC = () => {
  return (
    <div className="cards_group">
      <div className="card_title">
        <div>{content.featured}</div>
        <div className="more_text">
          More
          <ArrowSVG selected="#000" />
        </div>
      </div>
      <div className="card_image">
        <div className="child_card">
          <AvatarCard isBell={false} />
        </div>
        <div className="child_card">
          <AvatarCard isBell={false} />
        </div>
        <div className="child_card">
          <AvatarCard isBell={false} />
        </div>
      </div>
      <div className="card_image">
        <div className="child_card">
          <AvatarCard isBell={false} />
        </div>
        <div className="child_card">
          <AvatarCard isBell={false} />
        </div>
        <div className="child_card">
          <AvatarCard isBell={false} />
        </div>
      </div>
      <div className="card_image">
        <div className="child_card">
          <AvatarCard isBell={false} />
        </div>
        <div className="child_card">
          <AvatarCard isBell={false} />
        </div>
        <div className="child_card">
          <AvatarCard isBell={false} />
        </div>
      </div>
    </div>
  )
}

export default FeaturedCreators
