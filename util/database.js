
import { MongoClient } from 'mongodb'
const url = 'mongodb+srv://bluemouse:7DI6Cq3R5gVkUnOc@first-practice.lzhpx7d.mongodb.net/?retryWrites=true&w=majority'
const options = { useNewUrlParser: true }
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo_) {
    global._mongo_ = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo_
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }