import { connectDB } from "../../../util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
    let session = await getServerSession(요청, 응답, authOptions)
    if(session) {
        요청.body.author = session.user.email
    }

    if(요청.method == 'POST') {
        if(요청.body.content == '' && 요청.body.title == '') {
            return 응답.status(500).json('작성한 것이 없습니다.')
        } else if (요청.body.content == '') {
            return 응답.status(500).json('글의 내용이 없습니다.')
        } else if (요청.body.title == '') {
            return 응답.status(500).json('글의 제목이 없습니다.')
        }
        try {
            const db = (await connectDB).db("funeral")
            let result = await db.collection('post').insertOne(요청.body)
            응답.redirect(302, '/funeral')
        } catch(error) {
            return("에러")
        }
    }
}