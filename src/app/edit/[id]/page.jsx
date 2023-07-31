import { ObjectId } from "mongodb";
import { connectDB } from "../../../../util/database"

export default async function Edit(props) {
    let db = (await connectDB).db('forum');
    let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)});

    await db.collection('post').updateOne({_id : new ObjectId(props.params.id)}, {$set : {}})

    return (
        <div>
            <h4>게시물 수정</h4>
            <form action="/api/post/edit" method="POST">
                <input name="title" defaultValue={result.title}/>
                <input name="content" defaultValue={result.content}/>
                <input name="_id" defaultValue={result._id.toString()}/>
                <button type="submit">수정 완료</button>
            </form>
        </div>
    )
}