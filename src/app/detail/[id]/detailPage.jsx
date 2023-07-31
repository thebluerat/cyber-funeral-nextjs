'use client'
import Link from "next/link"

export default function DetailPage ({result}) {
    return (
        <div>
            <div className="button-wrap">
                <Link href={'/edit/' + result._id}>수정하기</Link>
                <button onClick={()=>{
                    fetch('/api/post/delete', {method : 'POST', body : result._id})
                    .then(res => res.json())
                    .then(response => console.log(response))
                    .then(()=>{window.location.replace('/forum')})
                }}>삭제하기</button>
            </div>
        </div>
    )
}