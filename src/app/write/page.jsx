export default function Write() {
    return (
        <div className="write">
            <h4>글 쓰기</h4>
            <form action="/api/post/new" method="POST">
                <input name="title" placeholder="글 제목"></input>
                <input name="content" placeholder="글 내용" className="content"></input>
                <button type="submit">발행</button>
            </form>
        </div>
    )
}