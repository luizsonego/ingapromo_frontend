import React from 'react';
import AdsHorizontal from '../../components/Ads/horizontal';
import AdsVertical from '../../components/Ads/vertical';
import Card from '../../components/Card';
import MainSlider from '../../components/MainSlider';

const items = [
  {
      "src": "/assets/cupons/square/1.jpg",
      "title": "Oba cupom 10% de desconto",
      "description": "Oba cupom 10% de desconto",
      "link": "",
      "validate": new Date().toLocaleDateString(),
      "shop": "",
  },{
    "src": "https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1520&q=80",
    "title": "Cupom para hamburger",
    "description": "35% de desconto no hamburger",
    "link": "",
    "validate": new Date().toLocaleDateString(),
    "shop": "",
},{
  "src": "/assets/cupons/square/1.jpg",
  "title": "Oba cupom 10% de desconto",
  "description": "Oba cupom 10% de desconto",
  "link": "",
  "validate": new Date().toLocaleDateString(),
  "shop": "",
},{
  "src": "/assets/cupons/square/1.jpg",
  "title": "Oba cupom 10% de desconto",
  "description": "Oba cupom 10% de desconto",
  "link": "",
  "validate": new Date().toLocaleDateString(),
  "shop": "",
}
]

function Home() {
  return (
    <>
      
      <main>
        <MainSlider />
  
        <section className="container mx-auto pt-12 bg-white">
          <AdsHorizontal />
        </section>

        <section className="container mx-auto pt-12 bg-white">
          <div className="container mx-auto flex flex-col lg:flex-row gap-4">

            <div className="mt-6 lg:mt-0 lg:w-1/4 rounded-xl">
              <AdsVertical />
            </div>
            
            <div className="lg:w-2/3 rounded-xl">
              {
                items.map((item, index) => (
                  <Card 
                    key={index}
                    src={item.src}
                    title={item.title}
                    description={item.description}
                    link={item.link}
                    validate={item.validate}
                    shop={item.shop}
                  />
                ))
              }
            </div>


          </div>
        </section>

      </main>
    
    </>
  )
}

export default Home