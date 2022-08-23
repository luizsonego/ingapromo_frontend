import axios from 'axios';
import { useQuery } from 'react-query';
import { Outlet, useNavigate } from 'react-router-dom';
import SideBar from '../Sidebar';

function AdminLayout() {
  let navigate = useNavigate()
  const {data} = useQuery("access", () => axios.get(`${process.env.REACT_APP_API}/site/get-access`,{
      headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem(process.env.REACT_APP_ACCESS_TOKEN)}`, 
      }
  })
    .then((res) => {
      if (!res.data) {
        localStorage.removeItem(process.env.REACT_APP_ACCESS_TOKEN);
        navigate('/login')
      }
      
      return res.data
    })
    .catch((err) => console.log(err))
  );

  return (
    <>
			<div className="flex flex-no-wrap">
				
        <SideBar access={data?.access_given} />
        
        <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
            <div className="w-full h-full">
  						<Outlet />
            </div>
        </div>

        {/* <div className="container mx-auto py-10 md:w-4/5 w-11/12 px-6 ">
        	<div className=" w-full h-full">
					</div>
      	</div> */}

			</div>
    </>
  )
}

  export default AdminLayout;