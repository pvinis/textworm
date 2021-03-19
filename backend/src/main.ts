import Fuse from 'fuse.js'
import low from "lowdb"
import FileSync from "lowdb/adapters/FileSync"


const adapter = new FileSync("db.json")
const db = low(adapter)



type Page ={
	title: string
	text: string
	new: boolean
}

db.defaults({pages: {}}).write()

const list = [
	"wow"
]



// do i need to add puppeteer here or can i get the text from FF?


////



// add index if it gets slow?
const fuse = new Fuse(list, {includeScore: true} )

console.log("aaok")
const result = fuse.search("o")
console.log({result})
