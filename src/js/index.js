export const root = document.getElementById('root');
export let tweets = [];
export const ref = {
  addTweetBtn: document.getElementById('addTweet'),
  tweetContainer: document.getElementById('list'),
  mainContainer: document.getElementById('tweetItems'),
  tweetsArray: !localStorage.tweets ? tweets = [] : tweets = JSON.parse(localStorage.getItem('tweets')),
  alertMessage: document.getElementById('alertMessageText'),
  alertContainer: document.getElementById('alertMessage'),
  timeOut: 2000
};