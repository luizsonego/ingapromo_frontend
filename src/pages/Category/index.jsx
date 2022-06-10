import { useParams } from "react-router-dom";


const Category = () => {
  let params = useParams();
  console.log(params);
  return (
    <h1>tetse</h1>
    // <section className="container mx-auto pt-12 bg-white">

    //   <div class="text-center pb-12">
    //           <h1 class="font-bold text-lg md:text-2xl lg:text-4xl font-heading text-gray-900">
    //               {params.id}
    //           </h1>
    //       </div>

    //   <div className="container mx-auto flex flex-col lg:flex-row gap-4">
    //     <div className="mt-6 lg:mt-0 lg:w-1/4 rounded-xl">
    //       <AdsVertical />
    //     </div>
    //     <div className="lg:w-2/3 rounded-xl">
    //       {
    //         items.map((item, index) => (
    //           <Card
    //           key={index}
    //           src={item.src}
    //           title={item.title}
    //           description={item.description}
    //           link={item.link}
    //           validate={item.validate}
    //           shop={item.shop}
    //           />
    //           ))
    //         }
    //       </div>
    //   </div>
    // </section>
  );
};

export default Category;
