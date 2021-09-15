import React from 'react'
import '../../assets/scss/page/home.scss'
import Header from '../../layout/Header'
import TitleCard from './TitleCard'
import CounterCard from './CounterCard'
import TextCard from './TextCard'
import CardText from './CardText'
import UpcomingCollectibles from './UpcomingCollectibles'
import FeaturedCreators from './FeaturedCreators'
import TopCollectors from './TopCollectors'
import PopularCollectibles from './PopularCollectibles'
import FeaturedCollectibles from './FeaturedCollectibles'

const Home: React.FC = () => {
  return (
    <div className="page-container">
      <Header />
      <TitleCard />
      <TextCard />
      <CardText />
      <CounterCard />
      <UpcomingCollectibles />
      <FeaturedCreators />
      <TopCollectors />
      <PopularCollectibles />
      <FeaturedCollectibles />
    </div>
  )
}

export default Home
