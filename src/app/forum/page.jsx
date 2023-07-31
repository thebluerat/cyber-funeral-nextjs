import Link from "next/link";
import { connectDB } from "../../../util/database";
import DetailList from "./detailList";

export default async function Home(요청, 응답) {
    let client = await connectDB;
    const db = client.db('forum');
    let resultForum = await db.collection('post').find().toArray();

    return (
        <div>
          <h1>자유 게시판</h1>
          <div className="board forum">
            <DetailList result={resultForum}/>
          </div>
          <div className="center">
            <button className="button">
              <Link href="/write">글 쓰기</Link>
            </button>
          </div>
        </div>
    )
  }