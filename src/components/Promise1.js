import React from 'react'

const Promise1 = () => {

// 1st way
// let complete=true;

// let prom=new Promise(function(resolve,reject){
//    if(complete){
//     resolve("I am successful")
//    }
//    else{
//     reject("I am failed")
//    }
// })

// console.log(prom);

// 2nd way
// function prom(complete){
//   return new Promise(function(resolve,reject){
//     if(complete){
//      resolve("I am successful")
//     }
//     else{
//      reject("I am failed")
//     }
//  })
// }

// console.log(prom(true));

// 3rd way
// function prom(complete){
//   return new Promise(function(resolve,reject){
//     if(complete){
//      resolve("I am successful")
//     }
//     else{
//      reject("I am failed")
//     }
//  })
// }

// let onfulfilment=(result)=>{
//   console.log(result);
// }

// let onrejection=(error)=>{
//   console.log(error);
// }

// prom(true).then(onfulfilment)
// prom(true).catch(onrejection)


// 4th way
// function prom(complete){
//   return new Promise(function(resolve,reject){
//     if(complete){
//      resolve("I am successful")
//     }
//     else{
//      reject("I am failed")
//     }
//  })
// }

// let onfulfilment=(result)=>{
//   console.log(result);
// }

// let onrejection=(error)=>{
//   console.log(error);
// }

// prom(true).then(onfulfilment).catch(onrejection)



function prom(complete){
  return new Promise(function(resolve,reject){
    if(complete){
     resolve("I am successful")
    }
    else{
     reject("I am failed")
    }
 })
}

prom(true).then((result)=>{
  console.log(result);
}).catch((error)=>{
  console.log(error);
})

  return (
    <div>Promise</div>
  )
}

export default Promise1