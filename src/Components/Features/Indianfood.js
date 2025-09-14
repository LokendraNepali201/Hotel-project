import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Indianfood = () => {
  const nepaliFoods = [
    {
      id: 1,
      name: "Butter Chicken",
      price: "Rs. 580",
      description: "Delicious steamed momo served with spicy tomato chutney.",
      image: "https://images.immediate.co.uk/production/volatile/sites/30/2021/02/butter-chicken-ac2ff98.jpg"
    },
    {
      id: 2,
      name: "Paneer Tikka",
      price: "Rs. 400",
      description: "Traditional lentil soup with rice, vegetables, and pickles.",
      image:  "https://derafarms.com/cdn/shop/files/deraproducts-2024-06-26T165127.117.png?v=1719400896"
    },
       {
      id: 4,
      name: "Rogan Josh",
      price: "Rs. 700",
      description: "Kashmiri lamb curry cooked with aromatic spices and yogurt.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Rogan_Josh_Kashmiri.jpg/1200px-Rogan_Josh_Kashmiri.jpg"
    },
     {
      id: 5,
      name: "Masala Dosa",
      price: "Rs. 150",
      description: "Crispy rice crepe filled with spiced potato and served with chutney.",
      image: "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg"
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
      name: "Tandoori Chicken",
      price: "Rs. 900",
      description: "Chicken marinated in yogurt and spices, cooked in tandoor oven.",
      image: "https://www.easycookingwithmolly.com/wp-content/uploads/2023/11/air-fryer-whole-tandoori-chicken-3.jpg"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold  mt-20 text-center mb-8 text-gray-800">Indian Foods</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {nepaliFoods.map((food) => (
          <Card key={food.id} className="w-full shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader shadow={false} floated={false} className="h-60">
              <img
                src={food.image}
                alt={food.name}
                className="h-full w-full object-cover rounded-xl"
              />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-semibold text-lg">
                  {food.name}
                </Typography>
                <Typography color="blue-gray" className="font-medium">
                  {food.price}
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75 text-sm"
              >
                {food.description}
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

export default Indianfood;
