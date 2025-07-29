import React from "react";
import Chifood from '../../images/Chifood.jpg'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Chinesefood = () => {
  const chineseFoods = [
    {
      id: 1,
      name: "Chicken Fried Rice",
      price: "Rs. 200",
      description: "Stir-fried rice with chicken, vegetables, and Chinese sauces.",
      image: Chifood
    },
    {
      id: 2,
      name: "Sweet and Sour Chicken",
      price: "Rs. 950",
      description: "Crispy chicken in tangy sweet and sour sauce with bell peppers.",
      image: "https://twoplaidaprons.com/wp-content/uploads/2023/09/bowl-of-sweet-and-sour-sauce-thumbnail.jpg"
    },
    {
      id: 3,
      name: "Kung Pao Chicken",
      price: "Rs. 800",
      description: "Spicy diced chicken with peanuts, vegetables, and chili peppers.",
      image: "https://www.kitchensanctuary.com/wp-content/uploads/2019/10/Kung-Pao-Chicken-square-FS-39-new-500x375.jpg"
    },
    {
      id: 4,
      name: "Beef Noodles",
      price: "Rs. 260",
      description: "Stir-fried noodles with tender beef and mixed vegetables.",
      image: "https://www.cherryonmysundae.com/wp-content/uploads/2014/07/chinese-beef-stew-final-feature.jpg"
    },
    {
      id: 5,
      name: "Ramen",
      price: "Rs. 500",
      description: "Assorted steamed dumplings with dipping sauces.",
      image: "https://www.kikkoman.eu/fileadmin/_processed_/f/0/csm_1103-recipe-page-Spicy-Kimchi-Ramen-with-Pork_desktop_c8dc4e51e8.jpg"
    },
    {
      id: 6,
      name: "Mapo Tofu",
      price: "Rs. 580",
      description: "Spicy tofu with minced meat in Sichuan sauce.",
      image: "https://assets.epicurious.com/photos/624b45cc1184c47f7e94b17e/16:9/w_5989,h_3368,c_limit/MapoTofu_RECIPE_033122_31225.jpg"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mt-20 mb-8 text-gray-800">Chinese Foods</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {chineseFoods.map((food) => (
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

export default Chinesefood;
