import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
  
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useAddProductsMutation } from "../../../Api/productApi";

const Addproduct = () => {

  const nav = useNavigate();
const [addProduct ] = useAddProductsMutation();
   const {handleChange,handleSubmit,errors,touched,values,setFieldValue} = useFormik({
  initialValues:{
    productname:'',
   price:'',
    detail:'',
    category:'',
    product_image:null,
    imageReview:''

  },
  onSubmit: async (val)=>{
    const formData = new FormData();
    formData.append('productname', val.productname);
    formData.append('price', Number(val.price));
    formData.append('detail',val.detail);
    formData.append('category', val.category);
    formData.append('product_image', val.product_image);
    try {
      await addProduct({
        body:formData,
       
      }).unwrap();
      toast.success('success')
      nav('/')
    } catch (err) {
      toast.error(err.data?.message)
    }
  },
 })
  return (
    <Card color="transparent" shadow={false} className="max-w-sm mx-auto mt-4 mb-4">
      <Typography variant="h4" color="blue-gray text-center">
        Add Product
      </Typography>

      <form onSubmit={handleSubmit}  className="mt-2">
        <div className="mb-1 flex flex-col gap-3 space-y-2">
          <Input
            size="lg"
            placeholder="Product Name"
            color="orange"
            name="productname"
            onChange={handleChange}
          />

          <Input
            size="lg"
            placeholder="Product Price"
            color="orange"
            name="price"
            onChange={handleChange}
            
          />
          
      <Input
            size="lg"
            placeholder="Category"
            color="orange"
            name="category"
            onChange={handleChange}
          />


          <Textarea
            size="lg"
            placeholder="Product Detail"
            color="orange"
            name="detail"
            onChange={handleChange}
          />
          <div className="space-y-2">
            <h1>Select An Image</h1>
            <Input
              label="Image File"
              type="file"
              name="product_image"
              accept="image/*"
              onChange={(e)=>{
                const file = e.target.files[0];
                if(file){
                  setFieldValue('imageReview',URL.createObjectURL(file));
                  setFieldValue('product_image',file);
                }
              }}
            />


           {values.imageReview && <img src = {values.imageReview} alt= ''/>}
          </div>
        </div>

        <Button type="submit"   className="mt-6 text-white" fullWidth >
        Submit</Button>
      </form>
    </Card>
  );
};

export default Addproduct