import axios from 'axios'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import Card from '../../components/Card'
import FullProfile from '../../components/ProfileShop/FullProfile'
import SkeletonLoading from '../../components/ProfileShop/SkeletonLoading'
const classIcon = 'mr-2 h-4 w-4 fill-gray-500/80'
const ProfileShop = () => {
  const params = useParams()
  const { data: storeDetails, isLoading } = useQuery(['loja', params.id], () =>
    axios
      .get(`${process.env.REACT_APP_API}/v1/store/shop?id=${params.id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        return res.data.data
      }),
  )

  if (isLoading) {
    return <SkeletonLoading />
  }
  return (
    <div className="mx-10">
    <FullProfile data={storeDetails} />

    {storeDetails?.coupon.map((item, index) => (
        <Card key={index} data={item} />
      ))}
      
    </div>
  )
}

export default ProfileShop
