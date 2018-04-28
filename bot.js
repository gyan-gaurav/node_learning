console.log('!!!!!!!!!!  WORKING   !!!!!!!!!!!!!!!');

const Twit = require('twit');
const config = require('./config');
const T = new Twit(config);
// const exec = require('child_process').exec;
// const fs = require('fs');

//  tweetIt();
// setInterval(tweetIt, 1000* 2)
const stream = T.stream('user');

stream.on( 'tweet' , tweetEvent);

function tweetEvent(eventMsg){
    const fs = require('fs');
    const json = JSON.stringify(eventMsg, null, 2);
    fs.writeFile("tweet.json", json); 
}

function tweetIt () {
    processing();
    function processing(){
        const filename = "rainbow/output.png";
        const param = {
            encoding : 'base64'
        }
        const b64 = fs.readFileSync( filename, param );
        
        T.post( 'media/upload' , { media_data: b64 }, uploaded);

        function uploaded(err, data, respose) {
            const id = data.media_id_string;
            const tweet = {
                status: 'media post', 
                media_ids: [id] 
            }
            T.post('statuses/update', tweet, tweeted);
        }

        function tweeted( err, data, response) {
            if (err) {
                console.log("something went wrong!");
            } else {
                console.log("****it worked****");
            }
        }
    }
};