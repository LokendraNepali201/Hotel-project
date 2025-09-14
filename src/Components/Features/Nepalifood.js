import React from "react";
import { useGetProductQuery } from "../../Api/productApi";
import { imageUrl } from "../../Constant/Constant";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Nepalifood = () => {
  const {data} = useGetProductQuery();
  const nepaliFoods = [
    {
      id: 1,
      name: "Chicken Momo",
      price: "Rs. 180",
      description: "Delicious steamed momo served with spicy tomato chutney.",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Dal Roti",
      price: "Rs. 150",
      description: "Traditional lentil soup with rice, vegetables, and pickles.",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Newari Khaja Set",
      price: "Rs. 1200",
      description: "Traditional Newari platter with various meat and vegetable dishes.",
      image: "https://i.pinimg.com/originals/8b/b6/24/8bb6244a24d1550e65e576b3dd2f6ee4.jpg"
    },
    {
      id: 4,
      name: "Thakali Khana",
      price: "Rs. 800",
      description: "Set meal with rice, dal, vegetables, and meat curry.",
      image: "https://www.thakalibhansa.com/images/preference/EgDw2-thakali.jpg"
    },
    {
      id: 5,
      name: "Sekuwa",
      price: "Rs. 500",
      description: "Grilled meat marinated in Nepali spices and herbs.",
      image: "https://hungrytom.com.np/wp-content/uploads/2022/07/Chicken-Sekuwa.jpg"
    },
    {
      id: 6,
      name: "Jhol Momo",
      price: "Rs. 220",
      description: "Momo served in spicy soup with vegetables and herbs.",
      image: "https://i.redd.it/i796a5ob8vk91.jpg"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold  mt-20 text-center mb-8 text-gray-800">Nepali Foods</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.data.map(({productname,price,detail,category,product_image,_id}) => (
          <Card key={_id} className="w-full shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader shadow={false} floated={false} className="h-60">
              <img
                src={`${imageUrl}${product_image}`}
                alt={productname}
                className="h-full w-full object-cover rounded-xl"
              />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-semibold text-lg">
                  {productname}
                </Typography>
                <Typography color="blue-gray" className="font-medium">
                  Rs:-{price}/-
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75 text-sm"
              >
                {detail}
              </Typography>
               <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75 text-sm"
              >
                {category}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                fullWidth
                className="bg-red-500 text-white hover:bg-red-600 transition-transform hover:scale-105"
              >
                Order Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Nepalifood;
