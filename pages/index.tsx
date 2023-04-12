
import type { NextPage   } from "next";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";



const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory
    overflow-scroll z-0">

      <Head>
       <title> Lucas Portfolio </title>
      </Head>

      <Header/>

      {/* Hero */} 

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About  */}

      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience  */}

      {/* Skills  */}

      {/* Project  */}

      {/* Contact Me  */}
     


    </div>
  )
}

export default Home 