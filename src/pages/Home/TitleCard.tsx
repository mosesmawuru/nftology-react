import React from 'react'
import content from '../../constant/en.json'
import { ArrowSVG } from '../../components/CustomSVG'

const TitleCard: React.FC = () => {
  return (
    <div className="title_card">
      <div className="d3Title">{content.d3dText}</div>
      <div className="d3Subtitle">{content.lorem}</div>
      <div className="d3Link">
        {content.discover}
        <ArrowSVG selected="#fff" />
      </div>
    </div>
  )
}

export default TitleCard
