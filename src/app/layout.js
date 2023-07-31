import Link from "next/link";
import './globals.css'
import name from "../../public/data";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

export default async function RootLayout({children}) {
  let session = await getServerSession(authOptions)
  console.log(session)
  return (
    <html lang="ko">
      <head />
      <body>
        <div className="navbar">
          <Link href="/">Home</Link>
          <Link href="/funeral">장례식 기록</Link>
          <Link href="/lifetime">생전 {name}의 기록</Link>
          <Link href="/forum">자유 게시판</Link>
          {
            session
              ? <span>{session.user.name}<LogoutButton/></span>
              : <LoginButton />
          }
        </div>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  )
}
