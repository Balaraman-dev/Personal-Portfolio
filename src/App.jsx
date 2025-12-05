import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from '../app/components/navbar'
import Footer from '../app/components/footer'
import ScrollToTop from '../app/components/helper/scroll-to-top'

import Home from '../app/page'

function App() {
  return (
    <div className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white font-sans">
      <ToastContainer />
      <Navbar />
      <main>
        <Home />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
