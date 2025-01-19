import { useState } from 'react'

import './App.css'
import { Navbar } from './components/Navbar'
import { Introduction } from './components/Introduction'

import { Image } from './components/Image'
import { SocialProof } from './components/SocialProof'
import { Features } from './components/Features'
import { Testimonial } from './components/Testimonial'
import { FAQSection } from './components/FAQSection'
function App() {
  const [count, setCount] = useState(0)

  return (<div>
     <Navbar />
    <Introduction/>
    <Image/>
    <SocialProof/>
    <Features/>
    <Testimonial/>
    <FAQSection/>
  </div>
  )
}

export default App
