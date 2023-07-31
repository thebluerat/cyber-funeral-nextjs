'use client'

import name from "../../public/data"
import {useState} from 'react';

export default function Home() {
  let [방문, 방문수증가] = useState(0)
  return (
    <div className="container">
      <h1>{name}의 사이버 장례식</h1>
      <div className="visitors">
        <span>{방문}</span>
        <button 
          className="lifetime-button" 
          onClick={()=>{
            let copy = [방문]
            copy[0]++
            방문수증가(copy)
        }}>왔다가 갑니다.</button>
      </div>
    </div>
  )
}
