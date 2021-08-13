function handleName(name,cb){
 const fullName = `${name} smith`
 cb(fullName)
}

handleName('rafin',function(value){
 console.log(value);
})

// convert it to arrow function
handleName('puson',(value)=>console.log(value))