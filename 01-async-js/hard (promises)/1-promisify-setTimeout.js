/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function ss(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}
async function wait(n) {
    s=await ss(n);
    console.log(s);
    return s;
}
wait(4);
module.exports = wait;
