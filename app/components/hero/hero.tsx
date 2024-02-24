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
        <div className="container">
        <div>
            <h1>Acquire</h1>
            <div className="stext">  the best prices in seconds—never miss a deal</div>
        </div >
            <div className="pos">
                <form onSubmit={handleSubmit}>   
                <input className='searchBox' placeholder="Try searching" name="search"/>
                </form>
            </div>
        </div>
        
        
    )
}

export default Hero