import { connectDB } from "../../../util/database";
import {getServerSession} from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답){
    let session = await getServerSession(요청, 응답, authOptions)
    if(session) {
        요청.body.author = session.user.email
    }

    if(요청.method == 'POST') {
        console.log(요청.body)
        if(요청.body.content == '' && 요청.body.title == ''){
            return 응답.status(500).json('아무 것도 안 썼는데?')
        } else if (요청.body.content == ''){
            return 응답.status(500).json('내용을 안 썼다')
        } else if(요청.body.title == '') {
            return 응답.status(500).json('제목을 안 썼다')
        }
        try {
            const db = (await connectDB).db("forum")
            let result = await db.collection('post').insertOne(요청.body)
            응답.redirect(302, '/forum')
        } catch (error) {
            return("에러")
        }
    }
    console.log(요청.body)
}