let samplePromise = new Promise(function (onSuccess, onFailure) {
    // here we will write the code which will fetch the data from the server.
    onSuccess()
    onFailure()
})

samplePromise.then(function (value) {
    console.log('this will be called on Success')
}, function(error){
    console.log('this will be called on failure')
})
