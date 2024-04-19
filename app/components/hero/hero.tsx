"use client";
import { useRouter } from 'next/navigation'
import "./hero.css";

function Hero() {
    const router = useRouter()
    const handleSubmit = event => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const formValues = Object.fromEntries(formData)
        router.push(`/${formValues.search}`)
    }
    return (
        <div className='background-container'>
        <div className="container">
             <div className='c2'>
                <h1 className='heading'>Acquire</h1>
                <div className="stext">  the best prices in seconds—never miss a deal</div>
                
                <form onSubmit={handleSubmit} className='adjust'>   
                <input className='searchBox' placeholder="Try searching" name="search"/>
                </form>
                </div >    
        </div>
        </div>
        
    )
}

export default Hero