import React from 'react';

const image = '/assets/cupons/square/2.webp';

const SpecialDiscount = () => {
    return (
			<div 
				className="mt-6 lg:mt-0 lg:ml-6 sm:w-full lg:w-1/3 rounded-xl bg-primary-lite bg-cover p-8 md:p-16 h-72 md:h-auto"
				style={{'backgroundImage': `url(${image})`}}
			>
				<div className="max-w-sm hidden">
					<p className="text-3xl md:text-4xl font-semibold uppercase">20% off</p>
					<p className="mt-8 font-semibold">Gatinho Bunitinho<br />2.0 KG</p>
					<button className="mt-20 bg-white font-semibold px-8 py-2 rounded">Obter agora mesmo</button>
				</div>
			</div>
    )
}

export default SpecialDiscount;