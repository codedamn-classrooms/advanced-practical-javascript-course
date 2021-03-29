// write your code here
const programmingLanguages = []

programmingLanguages.push('html')
programmingLanguages.push('css')
programmingLanguages.push('javascript')

programmingLanguages2 = [...programmingLanguages]

programmingLanguages2.pop()
programmingLanguages2.shift()

const index1 = programmingLanguages.indexOf('css')
const index2 = programmingLanguages2.indexOf('css')

console.log(programmingLanguages2)
