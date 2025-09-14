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
      id: 2,
      name: "Sweet and Sour Chicken",
      price: "Rs. 450",
      description: "Crispy chicken in tangy sweet and sour sauce with bell peppers.",
      image: "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
    },
     {
      id: 3,
      name: "Kung Pao Chicken",
      price: "Rs. 380",
      description: "Spicy diced chicken with peanuts, vegetables, and chili peppers.",
      image: "https://theyummybowl.com/wp-content/uploads/kung-pao-chicken-n-1-of-1.jpg"
    },

       {
      id: 4,
      name: "Beef Noodles",
      price: "Rs. 220",
      description: "Stir-fried noodles with tender beef and mixed vegetables.",
      image: "https://www.halfbakedharvest.com/wp-content/uploads/2022/08/20-Minute-Korean-Beef-Sesame-Noodles-1.jpg"
    },

    {
      id: 4,
      name: "Beef Noodles",
      price: "Rs. 220",
      description: "Stir-fried noodles with tender beef and mixed vegetables.",
      image: "https://www.halfbakedharvest.com/wp-content/uploads/2022/08/20-Minute-Korean-Beef-Sesame-Noodles-1.jpg"
    },

     {
      id: 5,
      name: "Dim Sum Platter",
      price: "Rs. 300",
      description: "Assorted steamed dumplings with dipping sauces.",
      image:"https://preview.redd.it/0blqosm2qb851.jpg?width=640&crop=smart&auto=webp&s=f083aeac4cdcecb8dfc646fac56962630ea54fb3"
    },
 {
      id: 6,
      name: "Mapo Tofu",
      price: "Rs. 180",
      description: "Spicy tofu with minced meat in Sichuan sauce.",
      image: "https://www.seriouseats.com/thmb/CaR7btHrJgEO3OKZD1Z_795VmII=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2011__07__2021-02-12-Mapo-Tofu-MHOM-10-804db1211f1d47dbae505341d1e7b994.jpg"
    }

  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold  mt-20 text-center mb-8 text-gray-800">Chinese Foods</h2>
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
