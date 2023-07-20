//import { SayHello } from "./SayHello";
import { useState } from "react";
import { Tweet } from "./Tweet";


const DEFAULT_TWEET = [
  {
    id: 0,
    name:"Ludmilla" , 
    content:"Cool", 
    like:1876 ,
  },
  {
    id: 1,
    name:"Yannick" , 
    content:"J'aime trop !!", 
    like:300 ,
  },
  {
    id: 2,
    name:"Anne" , 
    content:"Super", 
    like:1000 ,
  },
  {
    id: 3,
    name:"Aliss-Aëlle" , 
    content:"waouhh !!!", 
    like:400 ,
  },
]

function App() {
  const [tweets, setTweets] = useState(DEFAULT_TWEET) ;

  const handleSubmit = (event) => {
    event.preventDefault() ;
    console.log(event);

    const name = event.target.name.value ;
    const content = event.target.content.value ;

    const newTweet = {
      id: tweets[tweets.length - 1]?.id + 1 ?? 0,
      name,
      content,
      like: 0,
    };
    addTweet(newTweet) ;
  } ;

  const addTweet = (tweet) => {
    setTweets([...tweets, tweet]) ;
    
  }

  const onDelete = (tweetId) => {
  setTweets((curr) => curr.filter((tweet) => tweet.id !== tweetId));
  };

  const onLike = (tweetId) => {
    setTweets(curr => {
      const copyTweet = [...curr];

      const likedTweet = copyTweet.find(tweet => tweet.id === tweetId);
      likedTweet.like += 1;

      return copyTweet;
    });
  };

  return ( 
  
<div>
  <form onSubmit={handleSubmit} className="tweet-form">
    <h4>New tweet</h4>
    <input placeholder="name" type="text" name="name"/>
    <input placeholder="content" type="content" name="content"/>
    <input type="submit" />
  </form>
    <div className="tweet-container">{tweets.map((tweet) => {

return (
< Tweet 
key={tweet.id} 
id={tweet.id}
name={tweet.name} 
content={tweet.content} 
like={tweet.like} 
onDelete= {(id) => {
onDelete (id) ;
}}
onLike={(id) => {
  onLike(id)
}}
/>
) ;
})};

    </div>
</div>
  );
}

export default App ;