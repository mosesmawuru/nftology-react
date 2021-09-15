import React from 'react'
import content from '../../constant/en.json'
import Button from '../../components/CustomButton'
import ShowCard from './ChartCard'

const TextCard: React.FC = () => {
  return (
    <div className="text_card_group">
      <ShowCard />
      <div className="card-text pt-3" dir="rtl">
        <div className="card_txt_title">{content.consectetur}</div>
        <div className="card_txt_content">{content.consect_sub_text}</div>
        <div className="card_txt_footer">
          <Button
            border="none"
            color="#E5E9FA"
            height="54px"
            onClick={() => console.log('You clicked on the pink circle!')}
            radius="12px"
            width="219px"
            value={content.secondary}
          />
        </div>
      </div>
    </div>
  )
}

export default TextCard
