import React from 'react'

const PromiseAll = () => {

    // 1st way
    // let p1 = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         console.log("The first promise has resolved");
    //         resolve(10)
    //     }, 1 * 1000)
    // })

    // let p2 = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         console.log("The second promise has resolved");
    //         resolve(20)

    //     }, 2 * 1000)
    // })

    // let p3 = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         console.log("The third promise has resolved");
    //         resolve(30)

    //     }, 3 * 1000)
    // })

    // var total = 0;

    // Promise.all([p1, p2, p3]).then((result) => {

    //     for (var i in result) {
    //         total += result[i];
    //     }
    //     console.log(`Results : ${result}`);
    //     console.log(`total : ${total}`);
    // }).catch((error) => {
    //     console.log(`Error : ${error}`);

    // })


    let promiseCall=function(returnData,message){
        return function(resolve,reject){
            setTimeout(()=>{
                console.log(`The ${message} promise has resolved`);
                resolve(returnData)
            },returnData*100)
        }
    }

    let p1 = new Promise(promiseCall(10,'first'))
    let p2 = new Promise(promiseCall(20,'second'))
    let p3 = new Promise(promiseCall(30,'third'))


    var total = 0;

    Promise.all([p1, p2, p3]).then((result) => {

        for (var i in result) {
            total += result[i];
        }
        console.log(`Results : ${result}`);
        console.log(`total : ${total}`);
    }).catch((error) => {
        console.log(`Error : ${error}`);

    })

    return (
        <div>PromiseAll</div>
    )
}

export default PromiseAll