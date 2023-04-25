// console.log('foo foo foo Foo'.match(/foo/g)); //true
// console.log('Foo'.match(/foo/i)); //true
// console.log('foo'.match(/[fo]oo/g))
// console.log('foo'.match(/[^1]oo/g))
// console.log('foo'.match(/[a-zA-Z]/g))
// console.log('foo'.match(/[^0-9]/g))
// console.log('foo'.match(/[a-zA-Z]+/g))
// console.log('94122910613'.match(/[0-9]{11}/g))
// console.log('94122910613'.match(/[0-9]{11}/g))
// console.log('ca.s'.match(/ca\.s/))

// must be alphanumeric and contain 5 - 12 characters
const isUserNameValid = (value) => !!value.match(/^[0-9]{5,12}$/);
// must be alphanumeric and contain 5 - 12 characters
const isPhoneNumberValid = (value) => !!value.match(/^\+[0-9]{11}$/);


console.log(isUserNameValid('111111111'))
console.log(isPhoneNumberValid('+48888123888'))