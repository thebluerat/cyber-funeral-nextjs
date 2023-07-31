import name from "./../../../public/data"

export default function Lifetime() {
    return (
        <div>
            <h1>생전 {name}의 기록</h1>
            <div className="board">
                <LifetimePost/>
                <LifetimePost/>
            </div>
            <div className="button">
                <Button color="#E1AEFF"/>
            </div>
        </div>
    )
}

function LifetimePost() {
    return (
        <div className="lifetime-post">
            <h4>제목</h4>
            <p>내용</p>
        </div>
    )
}

function Button(props) {
    return <button style={{backgroundColor : props.color}} className="lifetime-button">글 쓰기</button>
}