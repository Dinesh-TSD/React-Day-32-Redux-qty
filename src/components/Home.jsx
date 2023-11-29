import React from 'react'
import './Home.css'
import { useSelector } from 'react-redux'
import Card from './Card'

const Home = () => {

  const { products } = useSelector(state => state.product)

  return (
    <>
    <div className="offer">
      <h2>Best New year Offers on 2024</h2>
    </div>
      <div className="container-fluid">
        <div className="row">
          {
            products.map((item, index) => {
              return <Card 
              key={index}
              product={item}
              />
            })
          }



        </div>
      </div>
    </>
  )
}

export default Home