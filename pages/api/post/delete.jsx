import { connectDB } from "../../../util/database";
import {ObjectId} from "mongodb";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function handler(요청, 응답){
    if (요청.method == 'POST'){
      console.log(요청.body)
      let session = await getServerSession(요청, 응답, authOptions)
  
      const db = (await connectDB).db('forum')
      let find = await db.collection('post').findOne({ _id : new ObjectId(요청.body) })
  
      if (find.author == session.user.email) {
        let result = await db.collection('post').deleteOne({ _id : new ObjectId(요청.body) })
        return 응답.status(200).json('삭제완료')
      } else {
        return 응답.status(500).json('현재유저와 작성자 불일치')
      }
  
    }
  }