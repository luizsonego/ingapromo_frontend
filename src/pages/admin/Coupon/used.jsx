import axios from "axios";
import { useQuery } from "react-query";
import CouponsUsed from "../../../components/CouponsUsed";
import NavBarAdmin from "../../../components/NavBarAdmin";

const UsedCoupon = () => {
  const { data, isLoading } = useQuery(
    "coupons",
    () =>
      axios
        .get(
          `${process.env.REACT_APP_API}/v1/coupons-consumer/coupons?expand=consumer,coupon,store`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem(
                process.env.REACT_APP_ACCESS_TOKEN
              )}`,
            },
          }
        )
        .then((res) => {
          return res.data.data;
        }),
    {
      staleTime: 3000,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavBarAdmin title="Meus Cupons" />

      <CouponsUsed data={data} />
    </div>
  );
};

export default UsedCoupon;
