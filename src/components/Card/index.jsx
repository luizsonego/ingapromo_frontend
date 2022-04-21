import React from 'react'

function Card(props) {
  return (
    <div className="bg-white pr-3 rounded-xl shadow-xl flex items-center justify-between mb-3">
        <div className="flex space-x-6 items-center">
            <img alt="https" src={props.src} className="w-auto h-48 rounded-lg" style={{'width': '15rem', 'objectFit': 'cover'}}/>
            <div>
                <h1 className="text-gray-800 font-bold text-2xl mb-2" style={{'position': 'relative', 'top': '-50px'}}>{props.title}</h1>
                <p className="font-semibold text-base" style={{'position': 'relative', 'top': '-50px'}}>{props.description}</p>
                <p className="font-semibold text-sm text-gray-400" style={{'position': 'relative', 'bottom': '-50px'}}>Válido Até - {props.validate}</p>
            </div>              
        </div>
        
        <div className="flex space-x-2 items-center">
            <div className="bg-gray-300 rounded-md p-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </div>    
    </div>
  )
}

export default Card