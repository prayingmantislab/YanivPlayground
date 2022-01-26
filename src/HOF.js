
const myPromise = new Promise((resolve, reject) => {
	const request = new XMLHttpRequest();

request.open('GET' ,'https://api.icndb.com/jokes/random')
request.onload = ()=> {
  if (request.status===200) {
    resolve(request.response);
  } else {
    reject(request.statusText)
  }
}
request.onerror = ()=> {
  reject('Eror Fetching data');
};

request.send();
});

console.log('Asynchornous request made')

myPromise.then((data) =>{
  console.log('Got data! Promise fulfilled.');
  document.body.textContent = JSON.parse.value.joke;
},(error) => {
  console.log('Promise rejected.')
  console.log(error.message);
})
