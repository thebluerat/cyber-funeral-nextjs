import { connectDB } from "../../../util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
    if (요청.method == 'POST') {
        let update = {title: 요청.body.title, content: 요청.body.content}
        let db = (await connectDB).db('forum')
        let result = await db.collection('post').updateOne(
            {_id : new ObjectId(요청.body._id)}, 
            {$set : update}
        );
        응답.redirect(302, '/forum')
    }
}