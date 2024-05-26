import Image from 'next/image'
import styles from './page.module.css'
import Hero from './components/hero/hero'
import Fourth from "./components/fourth/fourth";
import Fifth from "./components/fifth/fifth";
import Sixth from "./components/sixth/sixth";

export default function Home() {
  return (
 <div>
  <Hero></Hero>
  <Fourth></Fourth>
  <Fifth></Fifth>
  <Fifth></Fifth>
  <Sixth></Sixth>
  
 </div>
  )
}
