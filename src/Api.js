function getTweets(hastag, hasImages) {
    let images = '';

    if(hasImages) {
        images = " AND filter:images AND -filter:retweets"
    }
        return fetch("https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/search/tweets.json?q=%23"  + hastag + images + "&count=10&result_type=recent", {headers: {Authorization: "Bearer AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX"}})

        .then(response => response.json()) 
        
}

export default getTweets;

