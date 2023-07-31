'use client'

export default function Error({error, reset}) {
    return(
        <div>
            <h4>오류</h4>
            <button onClick={()=>{reset()}}>다시 시도!</button>
        </div>
    )
}