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
  let [tweets, setTweets] = useState(DEFAULT_TWEET) ;


  return ( 
  
<div>
    <div className="tweet-container">{tweets.map((tweet) => {

return (
< Tweet 
key={tweet.id} 
name={tweet.name} 
content={tweet.content} 
like={tweet.like} 
/>
) ;
})} ;

    </div>
</div>
  );
}

export default App ;