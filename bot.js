console.log('!!!!!!!!!!  WORKING   !!!!!!!!!!!!!!!');

const Twit = require('twit');

const config = require('./config');

const T = new Twit(config);

const exec = require('child_process').exec;
const fs = require('fs');

 tweetIt();
// setInterval(tweetIt, 1000* 2)

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
            var id = data.media_id_string;
            var tweet = {
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