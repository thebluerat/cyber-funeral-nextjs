// 'use client'
// import {useState} from 'react';
import Link from 'next/link';
import { connectDB } from '../../../util/database';
import FuneralList from './funeralList';
export default async function Funeral(요청, 응답) {
    let 게시글 = ['그때 이랬지', '만나서 반가웠습니다', '행복하길']
    // let [like, likerise] = useState([0,0,0]);
    let client = await connectDB;
    const db = client.db('funeral')
    let result = await db.collection('post').find().toArray();
    return (
        <div>
            <h1>장례식 기록</h1>
            <div className="board">
                <FuneralList result={result}/>
            </div>
            <div className="center">
                <button>
                    <Link href="/writefuneral">글쓰기</Link>
                </button>
            </div>
        </div>
    )
}