import Image from 'next/image'
import styles from './page.module.css'
import "./page.css";
import { FcLikePlaceholder } from "react-icons/fc";
import { IoShareSocial } from "react-icons/io5";
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
    foundData.map(({title, cost, info, likes, reviews, share, featureImage}) => (
      // eslint-disable-next-line react/jsx-key
      <div key={title} className='container1'> 
        {featureImage && <img src={featureImage} className='pic'/>}
          <div className='container2'>
             <h3 className='title'>{title}</h3>
      <div className='arrow-box'>
        <p className='more'>More details</p>
            <div className='arrow'></div>
      </div>

      </div>
        <div className='rest'>
            <div className='duo'>
            <p className='info'>{info}</p>
              <p className='cost'>{cost}</p>
            </div>
          <div className='duo1'>
              <p className='likes'>{likes}<FcLikePlaceholder/></p>
              <p className='share'>{share}<IoShareSocial/></p>
            </div>
      </div>
      </div>
    )
    )}</div>;
} 