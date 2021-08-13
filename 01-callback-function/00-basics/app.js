// callback function is a function that we pass in as an argument and execute it later.

function makeUpperCase(value){
 console.log(value.toUpperCase());
}

function handleName(name,cb){
 const fullName = `${name} islam`
 cb(fullName) // invoke inside function
}

handleName('rayhan',makeUpperCase) // don't invoke here