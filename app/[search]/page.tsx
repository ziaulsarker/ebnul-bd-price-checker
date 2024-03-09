import Image from 'next/image'
import styles from './page.module.css'
import "./page.css";
async function GetNecesities(necesities) {
  const dataSearch = await fetch(`http://localhost:3000/api/necesities/${necesities}`)
  if (!dataSearch.ok) {
    return {error:"Sorry not available"}
  }
  return dataSearch.json() 
}
export default async function Home(props:any,) {
  const {params:{search},}=props
  const foundData = await GetNecesities(search);
  
  
  return <div className='box'>
    {
    foundData.map(({title, cost, info, likes, reviews, feedback}) => (
      // eslint-disable-next-line react/jsx-key
      <div key={title} className='container1'>
      <h3 className='title'>{title}</h3>
      <div className='container2'>
      <p className='cost'>Cost: {cost}</p>
      <p className='info'>Info: {info}</p>
      <p className='likes'>{likes}</p>
      <p className='reviews'>{reviews}</p>
      <p className='feedback'>{feedback}</p>
      </div>
      </div>
    )
    )}</div>;
} 