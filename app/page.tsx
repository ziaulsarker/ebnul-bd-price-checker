import Image from 'next/image'
import styles from './page.module.css'
import Hero from './components/hero/hero'
import Next from "./components/nextpart/nextpart";
export default function Home() {
  return (
 <div>
  <Hero></Hero>
  <Next></Next>
 </div>
  )
}
