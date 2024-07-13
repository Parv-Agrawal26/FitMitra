// eslint-disable-next-line no-unused-vars
import React from 'react'
import {data} from '../restApi.json'
const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
               
<p>
              Fit Mitra is renowned for its nutritious and delicious fitness-focused meals, particularly in the health and wellness niche. We have a reputation for serving a variety of protein-rich dishes, wholesome snacks, and balanced main courses that are popular among both fitness enthusiasts and health-conscious individuals. Our restaurant is often praised for its rich flavors, quality ingredients, and the nutritional value of its offerings. If you have specific questions about our menu, location, or anything else related to Fit Mitra, feel free to ask!
           </p> </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu