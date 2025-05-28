// function getData (dataId, getNextData)
// {
//     setTimeout (()=> {
//         console.log("data",dataId);
//         if(getNextData)
//         {
//             getNextData();
//         }
//         getNextData;
//     },2000);
// }

// getData  (1,()=> {
//     getData(2)
// });

const getPromise = ()=> {
    return new Promise((resolve,reject)=>
    {
        console.log("I am Promise");
        resolve("Success")
        // reject("ERROR")
    });
}

let promise = getPromise();
promise.then(() =>
{   
    console.log("Promise FullFilled");
})

const pendingPromise = new Promise((resolve, reject) =>  {
    console.log("Your order has been placed.");
    // No resolve or reject called yet
});


const fulfilledPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Food delivered!");
    }, 2000);
});

fulfilledPromise.then(message => {
    console.log("Success:", message);
});


const rejectedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Restaurant closed!");
    }, 2000);
});

rejectedPromise
  .then(message => {
    console.log("Success:", message);
  })
  .catch(error => {
    console.log("Error:", error);
  });

