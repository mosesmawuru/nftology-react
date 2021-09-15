import React from 'react'
import content from '../../constant/en.json'

const CounterCard: React.FC = () => {
  return (
    <div className="counter_card_group">
      <div className="counter_card">
        <div className="count_number">50+</div>
        <div className="count_description">{content.total_origin}</div>
      </div>
      <div className="counter_card">
        <div className="count_number">140K+</div>
        <div className="count_description">{content.total_origin}</div>
      </div>
      <div className="counter_card">
        <div className="count_number">$150M+</div>
        <div className="count_description">{content.total_origin}</div>
      </div>
    </div>
  )
}

export default CounterCard
