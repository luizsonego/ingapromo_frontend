import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import NavBarAdmin from '../../../components/NavBarAdmin';

const classInput = "bg-gray-200 mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-50 focus:ring-0 focus:border-black"

function CouponEdit() {
  let navigate = useNavigate()
    const {id} = useParams();
    const {register, handleSubmit, setValue} = useForm();

    const { isLoading, error, data, isFetching } = useQuery("couponId", () =>
    axios.get(
        `${process.env.REACT_APP_API}/v1/coupon/view?id=${id}`
    ).then((res) => res.data)
  );

  
  useEffect(() => {
    setValue('title', data?.title)
    setValue('code', data?.code)
    setValue('description', data?.description)
    setValue('discount_type', data?.discount_type)
    setValue('discount', data?.discount)
    setValue('start_date', data?.start_date)
    setValue('end_date', data?.end_date)
  }, [data, setValue])

   //update
   const putCoupon = async (dataForm) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API}/v1/coupon/update?id=${data.id}`,
      dataForm,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem(process.env.REACT_APP_ACCESS_TOKEN)}`
        }
      })

    return response.data
  }
  const { mutate } = useMutation(putCoupon, {
    onSuccess: (data) => {
      navigate('/admin/cupom')
      console.log('onsuccess',data)
    }
  })

  const handleSubmitCoupon = (data) => {
    mutate(data);
  };


  if (isLoading) return "Loading...";
  if (isFetching) return "isFetching...";

  if (error) return "An error has occurred: " + error.message;

        
        return (
            <div>
                <NavBarAdmin
                    title={`Editar Cupom: ${data.title}`}
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
              <button aria-label="Criar minha empresa" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-200 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">
                Salvando
              </button>
            ) : (
              <button aria-label="Criar minha empresa" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">
                Salvar
              </button>
            )
          }

        </div>
				</form>

                {/* <form onSubmit={handleSubmit(handleSubmitCoupon)}>
                
                <div>
                    <lable className="text-sm font-medium leading-none text-gray-800">Titulo</lable>
                    <input aria-label="Nome do estabelecimento" type="text" {...register("title")} className={inputClass} />
                </div>
                <div>
                    <lable className="text-sm font-medium leading-none text-gray-800">Codigo</lable>
                    <input aria-label="Nome do estabelecimento" type="text" {...register("code")} className={inputClass} />
                </div>
                <div>
                    <lable className="text-sm font-medium leading-none text-gray-800">Desconto</lable>
                    <input aria-label="Nome do estabelecimento" type="text" {...register("discount")} className={inputClass} />
                </div>
                <div>
                    <lable className="text-sm font-medium leading-none text-gray-800">tipo de desconto</lable>
                    <input aria-label="Nome do estabelecimento" type="text" {...register("discount_type")} className={inputClass} />
                </div>
                <div>
                    <lable className="text-sm font-medium leading-none text-gray-800">descrição</lable>
                    <input aria-label="Nome do estabelecimento" type="text" {...register("description")} className={inputClass} />
                </div>
                    
                <div className="mt-8">
          <button aria-label="Criar minha empresa" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">
            Salvar
          </button>
        </div>


                </form> */}

            </div>
    )
    
}

export default CouponEdit