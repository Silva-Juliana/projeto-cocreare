

function getTweets(search) {
    return fetch("https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/search/tweets.json?q=bolsonaro&count=10", {headers: {Authorization: "Bearer AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX"}})
        .then(response => response.json())
}

export default getTweets;