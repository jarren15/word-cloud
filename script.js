import getWords from "./request_methods/get.js";
import postWord from "./request_methods/post.js";
import {getCallback} from "./callbacks.js";

document.querySelector('[data-wordCloud-controls]').addEventListener('submit', submitResponse);

//Initially display words
getWords('https://b6f0a1ff.us-south.apigw.appdomain.cloud/wordcloud/entries').then(getCallback);

function submitResponse(e){
    e.preventDefault();
    var learnerResponse = document.querySelector('[data-wordCloud-input]').value;
    if(learnerResponse !== ''){
        postWord('https://b6f0a1ff.us-south.apigw.appdomain.cloud/wordcloud/entries', {word: learnerResponse}).then(data => {
            console.log(data);
            getWords('https://b6f0a1ff.us-south.apigw.appdomain.cloud/wordcloud/entries').then(getCallback)
        });
    }
}


