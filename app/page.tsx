import Image from 'next/image'
import styles from './page.module.css'
import Hero from './components/hero/hero'
import Fourth from "./components/fourth/fourth";

export default function Home() {
  return (
 <div>
  <Hero></Hero>
  <Fourth></Fourth>
 </div>
  )
}
