import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website acts as a digital storefront that 
          enables customers to explore, select, and purchase products 
          or services through an internet-connected device. It 
          provides businesses with a powerful platform to showcase their
          offerings, connect with users, and operate around the clock 
          without geographic limitations. With the growing demand for 
          convenience and digital access, e-commerce continues to 
          transform how people shop and how businesses grow.
          </p>
          <p>
          Modern e-commerce platforms feature dynamic product listings with
          images, descriptions, pricing, and user reviews to enhance the
          buying experience. Users can filter products by various 
          attributes such as category, brand, size, or price. Integrated payment
          gateways, responsive design for mobile access, and personalized recommendations
          further streamline the customer journey, making online shopping fast, intuitive, and secure.
          </p>
      </div>
    </div>
  )
}

export default DescriptionBox
