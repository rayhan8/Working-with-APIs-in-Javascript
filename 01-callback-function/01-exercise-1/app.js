function reverseString(value){
 console.log(value.split('').reverse().join(''));
}

function handleName(name,cb){
 const fullName = `${name} smith`
 cb(fullName)
}

handleName('guiter',reverseString)