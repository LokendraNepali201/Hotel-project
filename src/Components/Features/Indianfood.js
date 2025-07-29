import React from "react";
import Indfood1 from '../../images/Indfood1.jpg'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Indianfood = () => {
  const indianFoods = [
    {
      id: 1,
      name: "Chicken Biryani",
      price: "Rs. 220",
      description: "Aromatic basmati rice cooked with spicy chicken and Indian herbs.",
      image: Indfood1
    },
    {
      id: 2,
      name: "Butter Chicken",
      price: "Rs. 1600",
      description: "Tender chicken in rich tomato and cream gravy with butter.",
      image: "https://images.immediate.co.uk/production/volatile/sites/30/2021/02/butter-chicken-ac2ff98.jpg"
    },
    {
      id: 3,
      name: "Paneer Tikka",
      price: "Rs. 700",
      description: "Grilled cottage cheese marinated in Indian spices and yogurt.",
      image: "https://orders.popskitchen.in/storage/2024/09/image-358.png"
    },
    {
      id: 4,
      name: "Rogan Josh",
      price: "Rs. 900",
      description: "Kashmiri lamb curry cooked with aromatic spices and yogurt.",
      image: "https://recipes.timesofindia.com/thumb/53192600.cms?width=1200&height=900"
    },
    {
      id: 5,
      name: "Masala Dosa",
      price: "Rs. 250",
      description: "Crispy rice crepe filled with spiced potato and served with chutney.",
      image: "https://culinarydelightsandbeyond.com/wp-content/uploads/2023/03/dosa-5oF7d_hPJG4-scaled.jpg"
    },
    {
      id: 6,
      name: "Tandoori Chicken",
      price: "Rs. 1600",
      description: "Chicken marinated in yogurt and spices, cooked in tandoor oven.",
      image: "https://www.teaforturmeric.com/wp-content/uploads/2024/09/Tandoori-Chicken-Recipe.jpg"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center  mt-20 mb-8 text-gray-800">Indian Foods</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {indianFoods.map((food) => (
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
