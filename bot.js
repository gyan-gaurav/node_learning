// console.log('The image bot is starting');

// const Twit = require('twit');

// const config = require('./config');

// var T = new Twit(config);

// const exec = require('child_process').exec;
// const fs = require('fs');

// tweetIt();
// // setInterval(tweetIt, 1000*20);

// function tweetIt() {
//     const cmd = 'processing-java --sketch=`pwd`/rainbow --run';
//     exec(cmd, processing);
  
//   function processing() {
//     const filename = 'rainbow/output.png';
//     const params = {
//       encoding: 'base64'
//   	}
//       const b64 = fs.readFileSync(filename, params);

//     T.post('media/upload', { media_data: b64 }, uploaded);

//     function uploaded(err, data, response) {
// 		const id = data.media_id_string;
//         const tweet = {
// 	    status: '#codingrainbow live from node.js',
// 	    media_ids: [id]
// 	  }
//       T.post('statuses/update', tweet, tweeted);

//     }

// 	function tweeted(err, data, response) {
// 	  if (err) {
// 	  	console.log("Something went wwrong!");
// 	  } else {
// 	    console.log("It worked!");
// 	  }
// 	}
//   }
// }







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