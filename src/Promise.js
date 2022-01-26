
//write a function that takes a number multiply it with 2 and returns the result after 2 seconds 
// function getMul(num)
// {
//   //return a promise that will be resolved and return the result of num times 2
//  return new Promise(resolve=>
//   {
//    setTimeout(()=>resolve(num*2),2000);
//  })
// }

// getMul(5).then(data=>console.log(data))
// console.log('end')

function getMull(num) {
  return new Promise(resolve => {
    setTimeout(()=>resolve(num*2),2000)
  })
}

getMull(6)
console.log('end')