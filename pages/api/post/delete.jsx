import { connectDB } from "../../../util/database";
import {ObjectId} from "mongodb";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function handler(요청, 응답){
    if (요청.method == 'POST'){
      console.log(요청.body)
      let session = await getServerSession(요청, 응답, authOptions)
  
      // const db = (await connectDB).db('forum')
      const dbForum = (await connectDB).db('forum')
      const dbFuneral = (await connectDB).db('funeral')
      // let find = await db.collection('post').findOne({ _id : new ObjectId(요청.body) })

      const body = JSON.parse(요청.body); // JSON 형식의 데이터를 파싱하여 사용

      let findForum = await dbForum.collection('post').findOne({ _id : new ObjectId(body.id) })
      let findFuneral = await dbFuneral.collection('post').findOne({ _id : new ObjectId(body.id) })
      
  
      if (findForum && findForum.author == session.user.email) {
        let resultForum = await dbForum.collection('post').deleteOne({ _id: new ObjectId(body.id) });
        return 응답.status(200).json('삭제완료');
    } else if (findFuneral && findFuneral.author == session.user.email) {
        let resultFuneral = await dbFuneral.collection('post').deleteOne({ _id: new ObjectId(body.id) });
        return 응답.status(200).json('삭제완료');
    } else {
        return 응답.status(500).json('현재유저와 작성자 불일치');
    }
    }
  }