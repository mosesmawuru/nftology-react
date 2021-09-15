import React from 'react'
import { TextArrowSVG } from '../../components/CustomSVG'
import content from '../../constant/en.json'
import ChartCard from './ChartCard'

const TextCard: React.FC = () => {
  return (
    <div className="text_card_group">
      <div className="card-text pt-3">
        <div className="card_txt_title">{content.lorem_description}</div>
        <div className="card_txt_content">
          <TextArrowSVG />
          {content.lorem_description}
        </div>
        <div className="card_txt_content">
          <TextArrowSVG />
          {content.lorem_description}
        </div>
        <div className="card_txt_content">
          <TextArrowSVG />
          {content.lorem_description}
        </div>
        <div className="card_txt_content">
          <TextArrowSVG />
          {content.lorem_description}
        </div>
        <div className="card_txt_content">
          <TextArrowSVG />
          {content.lorem_description}
        </div>
      </div>
      <ChartCard />
    </div>
  )
}

export default TextCard
