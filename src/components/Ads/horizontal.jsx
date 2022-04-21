import React from 'react';
import { Link } from 'react-router-dom';

const Images = [
    {
      "src": "/assets/cupons/square/1.jpg",
      "title": "Oba cupom 10% de desconto",
      "link": ""
    },{
      "src": "/assets/cupons/square/2.webp",
      "title": "Oba tem cupom para voce aproveitar",
      "link": ""
    },{
      "src": "/assets/cupons/square/3.jpg",
      "title": "Leve tudo 80% de desconto",
      "link": ""
    },{
      "src": "/assets/cupons/square/6.png",
      "title": "Americanas R$ 10 de desconto",
      "link": ""
    },{
        "src": "/assets/cupons/square/5.png",
        "title": "Compras C&A 10% off ",
        "link": ""
      }
  ]

const AdsHorizontal = () => {
    return (
        <div class="flex flex-row flex-wrap items-center justify-center">
            <div class="grid justify-center md:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-7 my-10">

                {Images.map((image, index) => (
                    <div class="flex justify-center" key={index}>
                        <Link to="">
                            <img src={image.src} class="rounded-xl h-60" alt={image.title} title={image.title} />
                        </Link>
                        <p class="text-xs -translate-y-6 text-white font-semibold sm:-translate-y-8 sm:text-base translate-x-3 hidden"> {image.title} </p>
                    </div>    
                ))}
                
            </div>
        </div>
    )
}

export default AdsHorizontal;