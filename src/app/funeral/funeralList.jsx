// 'use client'

// export default function FuneralList ({result}) {
//     return (
//         <div className="funeral">
//             {
//              result.map((a, i)=>
//                 <div className="post-funeral" key={i}>
//                     <h4>{result[i].title}</h4>
//                     <img>{result[i].img}</img>
//                     <p>{result[i].content}</p>
//                     <button onClick={()=>{
//                         const postId = result[i]._id;
//                         fetch('/api/post/delete', {method : 'POST', body : JSON.stringify({ id: postId })})
//                         .then(res => res.json())
//                         .then(response => console.log(response))
//                         .then(()=>{window.location.replace('/funeral')})
//                         .catch(error => console.error(error));
//                     }}>삭제하기</button>
//                 </div>
//              )   
//             } 
//         </div>
//     )
// }

'use client'

export default function FuneralList ({result}) {
    return (
        <div className="funeral">
            {
                result.map((a, i) =>
                    <div className="post-funeral" key={i}>
                        <h4>{result[i].title}</h4>
                        <img>{result[i].img}</img>
                        <p>{result[i].content}</p>
                        <button onClick={() => {
                            const postId = result[i]._id; // 게시글의 _id를 가져옴
                            fetch('/api/post/delete', { method: 'POST', body: JSON.stringify({ id: postId }) })
                                .then(res => res.json())
                                .then(response => {
                                    console.log(response);
                                    window.location.replace('/funeral');
                                })
                                .catch(error => console.error(error));
                        }}>삭제하기</button>
                    </div>
                )
            } 
        </div>
    )
}