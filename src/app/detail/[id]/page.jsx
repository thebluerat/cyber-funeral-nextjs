import {ObjectId} from "mongodb";
import { connectDB } from "../../../../util/database";
import DetailPage from "./detailPage";
import Comment from "./Comment";

export default async function Detail(props) {
    let db = (await connectDB).db('forum')
    let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)});
    return (
        <div className="detail">
            <h3>상세 페이지</h3>
            <div className="board">
                <h4>{result.title}</h4>
                <p>{result.content}</p>
                <DetailPage result={result}/>
                <Comment _id={result._id.toString() }/>
            </div>
        </div>
    )
}