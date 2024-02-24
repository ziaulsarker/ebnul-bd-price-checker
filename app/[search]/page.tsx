import Image from 'next/image'
import styles from './page.module.css'
import "./page.css";
async function GetNecesities(necesities) {
  const dataSearch = await fetch(`/api/necesities/${necesities}`)
  if (!dataSearch.ok) {
    return {}
  }
  return dataSearch.json() 
}
export default async function Home(props:any,) {
  const {params:{search}}=props
  const dataSearch = await GetNecesities(search)
  
  
  return (
 <div>{JSON.stringify(dataSearch)}</div>

  )
}