 
function GetA(num){
  return new Promise(resolve=>
    {
    setTimeout(()=> resolve(num*2),2000)
    })
}

// function GetB()
// {
//   GetA(5).then(data=>console.log(data))
// }
async function GetB()
{
let data = await GetA(5)
return data;
}

GetB().then(resolve=>console.log(resolve))
console.log('end')