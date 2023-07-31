'use client'

export default function FuneralList ({result}) {
    return (
        <div className="funeral">
            {
             result.map((a, i)=>
                <div className="post-funeral" key={i}>
                    <h4>{result[i].title}</h4>
                    <img>{result[i].img}</img>
                    <p>{result[i].content}</p>
                </div>
             )   
            } 
        </div>
    )
}