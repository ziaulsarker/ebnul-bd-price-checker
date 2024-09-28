import Sixth from "../components/sixth/sixth";
import Link from "next/link";
const isLoggedIn = true;

export default function SignUp() {
  return (
 <div>
  {isLoggedIn ? <Sixth></Sixth> : <Link href={"/"} style={{paddingTop:"100px", display:"block"}}>Log out</Link>} 
 </div>
  )
}
