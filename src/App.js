import getTweets from './Api'
import React, { useEffect, useState } from "react";
import Carousel from 'react-elastic-carousel';
import Card from './Card'
import "./files_css/styles.css"
import "./files_css/results.css"
import Results from './components/Results';



export default function App () {
  const [isShowing, setIsShowing] = useState(false);
  const [tweets, setTweets] = useState([]); 

  const breakPoints = [
    {width: 150, itemsToShow: 1},
    {width: 250, itemsToShow: 2},
    {width: 350, itemsToShow: 3},
    {width: 450, itemsToShow: 4},
    {width: 480, itemsToShow: 5}
  ]

  useEffect(() => {
    const busca = getTweets('natal', true)
      .then(res => {
        setTweets(res.statuses)
      })
  }, [])

  return (
    <div className="App">
      <div
        onMouseEnter={() => setIsShowing(true)}
        onMouseLeave={() => setIsShowing(false)}
      >
      <Carousel
        pagination={false}
        showArrows={isShowing}
        breakPoints={breakPoints}
      >
      
        {
          tweets.filter((teste) => {
            if(teste.extended_entities && teste.extended_entities.media && teste.extended_entities.media[0] && teste.extended_entities.media[0].media_url){
              return true;
          }

              return false;
          }).map((value) => {
              return <Card cardImage={value.extended_entities.media[0].media_url} />
          })
        }
      </Carousel>
        {
          tweets.map((tweet) => {
            return <Results username={tweet.user.name} text={tweet.text} name={tweet.user.screen_name} photo_user={tweet.user.profile_image_url}/>
          })
        }
        </div>
    </div>
  );
}