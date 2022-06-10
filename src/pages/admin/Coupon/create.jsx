import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import NavBarAdmin from '../../../components/NavBarAdmin'

const classInput = "bg-gray-200 mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-50 focus:ring-0 focus:border-black"

function CreateCoupon() {
	let navigate = useNavigate()
	const { register, handleSubmit } = useForm()
	
	 
	const postCoupon = async (dataForm) => {

    const response = await axios.post(
      `${process.env.REACT_APP_API}/v1/coupon/create`,
        dataForm,
      {
        headers: {
			    "Content-Type": "application/json",
          // "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem(process.env.REACT_APP_ACCESS_TOKEN)}`
        }
      })

    return response.data
	}


	 const { isLoading, mutate } = useMutation(postCoupon, {
    onSuccess: (data) => {
		navigate('/admin/cupom')
    }
  })

  const handleSubmitCoupon = (data) => {
    mutate(data);
	};


  return (
    <div>
        <NavBarAdmin
        title="Criar Cupom"
      />

			<form onSubmit={handleSubmit(handleSubmitCoupon)}>
				
			
			<div className="md:flex items-start justify-center py-12 px-4">
				{/* image */}
        <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
				{/* <input type="file" accept="image/*" {...register("image")} /> */}

          <div className="flex items-center justify-center w-300 h-80 bg-gray-200">Salve o cupom primeiro</div>
        </div>
				
        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
					<div className="border-b border-gray-200 pb-6">
						<div className="w-full">
								<input
									type="text"
									className={`${classInput} lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 `}
									placeholder="Nome do cupom"
									{...register("title")}
								/>
						</div>
					</div>
	
					<div className="py-4 border-b border-gray-200 flex items-center justify-between">
						<p className="text-base leading-4 text-gray-800">Desconto</p>
						<div className="flex items-center justify-center">
							<div className="text-sm leading-none text-gray-600">

									<div className="form-check mt-3">
										<label htmlFor="percentage">
											<input
												type="radio"
												name="discount_type"
												value="10" //porcentagem
												className="form-check-input mr-1"
												id="percentage"
												{...register("discount_type")}
												/>
												% Porcentagem 
										</label>
									</div>
									<div className="form-check mt-3">
										<label htmlFor="value">
											<input
												type="radio"
												name="discount_type"
												value="20" //Valor
												className="form-check-input mr-1"
												id="value"
												{...register("discount_type")}
												/>
												R$ Valor 
										</label>
									</div>
									
									<input
										type="number"
										className={`${classInput} mt-3`}
										placeholder="Valor desconto"
										{...register("discount")}
									/>

							</div>
						</div>
					</div>
							

            
					<div className="py-4 border-b border-gray-200 flex items-center justify-between">
						<p className="text-base leading-4 text-gray-800">Validade</p>
						<div className="flex items-center justify-center">
							<div className="text-sm leading-none text-gray-600 ">
									<input
										type="date"
										className={classInput}
										placeholder="Valido até"
										{...register("end_date")}
									/>
							</div>
						</div>
					</div>

            
						<div className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 text-base flex items-center justify-center leading-none text-white bg-gray-400 w-full py-4 hover:bg-gray-400">Usar Cupom</div>
             
						<div>
							<textarea
								className={`${classInput}  border-gray-200 mt-5`}
								name="description"
								id=""
								cols="30"
								rows="10"
								placeholder="Descrição"
								{...register("description")}
							></textarea>
            </div>
            
            
        </div>
				</div>
				
        <div className="mt-8">
          {
					  isLoading ? (
						<div class="p-32">
						<button type="button" class="flex items-center rounded-lg bg-indigo-500 px-4 py-2 text-white" disabled>
						  <svg class="-ml-1 mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
							<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
							<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
						  </svg>
						  <span class="font-medium subpixel-antialiased">Salvando...</span>
						</button>
					  </div>
            ) : (
              <button aria-label="Criar minha empresa" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">
                Salvar
              </button>
            )
          }

        </div>
				</form>
      
    </div>
  )
}

export default CreateCoupon