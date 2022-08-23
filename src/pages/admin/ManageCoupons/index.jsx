import axios from "axios";
import { useQuery } from "react-query";
import Information from "../../../components/Information";
import LoadingAdmin from "../../../components/LoadingAdmin";
import NavBarAdmin from "../../../components/NavBarAdmin";

const columns = [
  {
    name: "Title",
    selector: "title",
  },
  {
    name: "Dt. Início",
    selector: "start_date",
  },
  {
    name: "Dt. Fim",
    selector: "end_date",
  },
  {
    name: "Code",
    selector: "code",
  },
  {
    name: "Tipo",
    selector: "discount_type",
  },
  {
    name: "Valor",
    selector: "discount",
  },
  {
    name: "Status",
    selector: "status",
  },
];

const ManageCoupons = () => {
  const { data, isLoading } = useQuery(
    "coupons",
    () =>
      axios
        .get(`${process.env.REACT_APP_API}/v1/coupon/get-coupons-for-admin`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem(
              process.env.REACT_APP_ACCESS_TOKEN
            )}`,
          },
        })
        .then((res) => {
          return res.data.data;
        }),
    {
      staleTime: 3000,
    }
  );

  if (isLoading) {
    return (<LoadingAdmin />);
  }

  return (
    <div>
      <NavBarAdmin title="Cupons" link="criar" linkText="Novo" />

      <Information
        columns={columns}
        data={data}
        modalTitle="Upload de imagem"
        link="coupon"
      />
    </div>
  );
};

export default ManageCoupons;
