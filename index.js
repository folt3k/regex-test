// g - szukaj wszystich wystąpień
// i - case insensitive
// [abc] - a || b || c-
// [^abc] - wszystko co nie jest a,b,c
// + - wyrazenie dla nieskonczonej ilosci znaków
// {} - wyrazenie o okreslonej liczbie znaków
// ? - zero lub jeden znak
// . - jakikolwiej znak
// * - zero lub więcej znaków
// \ - pomija znaczenie spacjalnego znaku
// ^ - początek stringa
// $ - koniec stringa
// (p|t)ure - "p" lub "t" + "ure"

// must be alphanumeric and contain 5 - 12 characters
const isUserNameValid = (value) => !!value.match(/^[0-9]{5,12}$/);
// must be a valid telephone number (e.g. +48664609988)
const isPhoneNumberValid = (value) => !!value.match(/^\+[0-9]{11}$/);
// must contain only lowercase letters, numbers and hyphens and be 8 - 20 characters
const isSlugValid = (value) => !!value.match(/^[a-z0-9-]{8,20}$/);
// must be a valid address, e.g. me@mydomain.com
const isEmailValid = (value) => !!value.match(/^[0-9a-z]+@[0-9a-z]+\.[a-z]{2,}$/);

console.log(isUserNameValid('111111111'))
console.log(isPhoneNumberValid('+48888123888'))
console.log(isSlugValid('foo-bar-123'))
console.log(isEmailValid('folt3k@gmail.com'))