import {useRef, useEffect} from 'react'
import gsap from 'gsap'
import './App.css'

function App() {
  const h1Arr = ["Anime in 2024","New Series","Fantastic Animation"]

  return (
            <div className='content'>
                {h1Arr.map( (h,i) => (<H1Animated key={h} text={h} index={i+1}/>))}
            </div>
        )
    }
  export default App

  const H1Animated = ({text,index}) => {
    const h1ref = useRef(null);
    useEffect(()=>{
        const header = h1ref.current;
        const animation = gsap.fromTo(header,
          { y: 70, opacity: 0 }, // Start state
          { y: 0, opacity: 1, duration: 0.5, delay: 0.2* index } // End state
        )
        return () => {
          animation.kill();
        };
    },[])
    return (
    <div className="overflow-container">
      <h1 style={{opacity: 1}} ref={h1ref}>{text}</h1>
    </div>
    )
  }
                