'use client'
import Link from "next/link"

export default function DetailList ({result}) {

    return (
        <div className="board forum">
          {
            result.map((a, i)=>
                <div className="post-forum" key={i}>
                    <h4>{result[i].title}</h4>
                    <p>{result[i].content}</p>
                    <Link href={'/detail/' + result[i]._id}>자세히 보기</Link>
                </div>
              )
          }
        </div>
    )
}