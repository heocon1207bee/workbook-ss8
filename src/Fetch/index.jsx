import React from 'react'
import { useState, useEffect } from 'react'
import Render from '../components/Render'
import './style.css'
import {InfinitySpin} from 'react-loader-spinner'
import { BiArrowToTop } from 'react-icons/bi';

const Fetch = () => {

    const [data, editData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [showScroll, setShowScroll] = useState(false)

    useEffect(() => {
      const handleScroll = (e) => {
        if(e.target.documentElement.scrollTop > 0) {
          setShowScroll(true)
        } else {
          setShowScroll(false)
        }
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const fetchData = () => {
      setIsLoading(true)
      setTimeout(async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos')
        const dataRes = await data.json()
        editData(dataRes)
        setIsLoading(false)
      }, 3000)
      return () => clearTimeout(fetchData)
    }

    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

  return (
    <div>
      {showScroll ? <button className='scrollToTop' onClick={handleScrollToTop}><BiArrowToTop fontSize='40px'/></button> : null}
      <button className='fetchBtn' onClick={fetchData}>
        {
          isLoading? <InfinitySpin color="grey" /> : 'FETCH DATA'
        }
      </button>
      <ul className='mainList'>
        {
          data.map((d) => {
            return (
              <Render userId={d.userId} id={d.id} title={d.title} completed={d.completed} />
            )
          })
        }
      </ul>
    </div>
    
  )
}

export default Fetch