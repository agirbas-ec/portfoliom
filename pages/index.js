import Head from 'next/head'
import Image from 'next/image'
import Main from './components/Main'
import Navbar from './components/Navbar'
import Yetenekler from './components/Yetenekler'
import Projeler from './components/Projeler'



export default function Home() {
  return (
    <div >
    <title>Ece Ağırbaş | Front-End Developer</title>
    <Navbar/>
    <Main/>
    <Yetenekler/>
    <Projeler/>
    
    </div>
  )
}
