console.log('!!!!!!!!!!  WORKING   !!!!!!!!!!!!!!!');

const Twit = require('twit');

const config = require('./config');
const T = new Twit(config);



setInterval(tweetIt, 1000 * 1)
tweetIt();

function tweetIt(){
    let r = Math.floor(Math.random() * 100);
     const thought = new Array(
        "Because of your smile, you make life more beautiful.",
        "Be happy for this moment. This moment is your life.",
        "Only I can change my life. No one can do it for me."
     );
     
      for (let i = 0;i < thought.length; i++){
          //Posting on twitter
        // let tweet = {
           
        console.log( ( i + 1 ) + '. ' + thought[i] ) + '</br>' ;
        
            // write post content
            // }; 
            // T.post('statuses/update', tweet, tweeted);
        
            // function tweeted( err, data, response) {
            //     if (err) {
            //         console.log("something went wrong!");
            //     } else {
            //     console.log("****it worked****");
            //     }
            // }
        // };     
    };

//Search 2 posts having word 'banana'.
// const param = { 
//     q: 'banana',   // search term
//     count: 2 }

// T.get('search/tweets',param ,gotData);
 
// function gotData(err, data, response) { 
//     const tweets = data.statuses;
//    for (let i=0; i < tweets.length ; i++ ){
 //       console.log( tweets[i].text );
   // }
    
  };