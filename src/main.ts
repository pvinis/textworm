import Fuse from 'fuse.js'


const list = [
	"wow"
]


const fuse = new Fuse(list, {includeScore: true} )

console.log("aaok")
const result = fuse.search("o")
console.log({result})
