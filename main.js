let str = `
010-1234-1234
goplanit@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
You will have to submit to your fate whether you will or not.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`

console.log(
  str.match(/d$/gm)
)
console.log(
  str.match(/^y/gim)
)
console.log(
  str.match(/./g)
)
console.log(
  str.match(/h..p/g)
)
console.log(
  str.match(/submit|fate/gim)
)
console.log(
  str.match(/https?/g)
)

console.log(
  str.match(/d{2}/g)
)
console.log(
  str.match(/d{2,}/)
)
console.log(
  str.match(/\b\w{2,3}\b/g)
)
console.log(
  str.match(/[fate]/g)
)
console.log(
  str.match(/[0-9]{1,}/g)
)
console.log(
  str.match(/[A-Z]/g)
)
console.log(
  str.match(/[가-힣]{1,}/g)
)

console.log(
  str.match(/\w/g)
)
console.log(
  str.match(/\bf\w{1,}\b/g)
)
console.log(
  str.match(/\d{2,}/g)
)

const h = `  the hello  world   !`

console.log(
  h.replace(/\s/g, '')
)

const str2 = `
010-1234-1234
goplanit@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
You will have to submit to your fate whether you will or not.
abbcccdddd

//const regexp = new RegExp('to','gi')
const regexp = /to/gi

console.log(str.match(regexp))
`

console.log(
  str2.match(/.{1,}(?=@)/g)
)
console.log(
  str2.match(/(?<=@).{1,}/g)
)