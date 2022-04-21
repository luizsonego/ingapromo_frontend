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


const AdsVertical = () => {
    return (
        <>
            {Images.map((image, index) => (
                <div class="flex justify-center my-2" key={index}>
                    <Link to="">
                        <img src={image.src} class="rounded-xl h-60" alt={image.title} title={image.title} />
                    </Link>
                    <p class="text-xs -translate-y-6 text-white font-semibold sm:-translate-y-8 sm:text-base translate-x-3 hidden"> {image.title} </p>
                </div>    
            ))}
                
        </>
    )
}

export default AdsVertical;