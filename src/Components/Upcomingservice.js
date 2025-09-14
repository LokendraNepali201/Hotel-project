import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,

} from "@material-tailwind/react";


 
import { useEffect, useState } from "react";
import { useGetProductQuery } from "../Api/productApi";
import { imageUrl } from "../Constant/Constant";
const Upcomingservice =()=> {
  const [active, setActive] = useState(1)

  useEffect(()=>{
    return window.scrollTo(0,0)
  })

const {data,isLoading,error} = useGetProductQuery({page:active});
console.log(data);

  return (
  

    <div className=' pb-8  '>

      
 <div className="mt-7 sm:ml-[5px] lg:ml-[25px] grid sm:grid-cols-2 lg:grid-cols-5 lg:gap-5 sm:gap-3">

{data?.data.map(({  productname, detail,price, product_image }) => (
         
            <div className="bg-white p-4 shadow-md rounded-lg text-center transition-all duration-200 border border-transparent hover:border-gray-500">
              <img
                src={`${imageUrl}${product_image}`}
                alt="image"
                className="w-full h-48 object-contain mb-2"
              />
              <h3 className="text-lg font-semibold">{productname}</h3>
              <h3 className="text-lg font-semibold">{detail}</h3>
              <h3 className="text-lg font-semibold">{price}</h3>

              {/* Price */}
             

              {/* Star rating */}
              
            </div>
          
        ))}



</div>

   

    </div>
 

    
  );
}

export default Upcomingservice;
