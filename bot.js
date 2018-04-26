console.log('!!!!!!!!!!  WORKING   !!!!!!!!!!!!!!!');

const Twit = require('twit');

const config = require('./config');
const T = new Twit(config);
const thought = [ "Be happy for this moment. This moment is your life.",
                  "Because of your smile, you make life more beautiful." ,
                  "Lighten up, just enjoy life, smile more, laugh more, and don't get so worked up about things." 
                ]

const stream = T.stream('user');
stream.on('follow', followed);

function followed(eventMsg){
    console.log('posting back to follower');
    const name = event.source.name;
    const screenName = event.source.screen_name;
    tweetIt('.@' + screenName + 'Hello!!!!');
}

function tweetIt ( txt ) {
    let r = Math.floor(Math.random() * 100) ;
    
    let tweet = {
        status : txt      //'new random number post : #' + r //thought[i]           // write post content
    };
    console.log(tweet);
    // T.post('statuses/update', tweet, tweeted);
    function tweeted( err, data, response) {
    if (err) {
        console.log("something went wrong!");
    } else {
        console.log("****it worked****");
    }
    }
};     


//** Search 2 posts having word 'banana'.
// const param = { 
//     q: 'banana',   // search term
//     count: 2 }

// T.get('search/tweets',param ,gotData);
 
// function gotData(err, data, response) { 
//     const tweets = data.statuses;
//    for (let i=0; i < tweets.length ; i++ ){
 //       console.log( tweets[i].text );
   // }
    
  