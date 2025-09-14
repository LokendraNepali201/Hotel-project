import React from "react";
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router";
import * as yup from "yup";
import { useGetProductByIdQuery, useUpdateProductMutation } from "../../../Api/productApi";
import { imageUrl } from "../../../Constant/Constant";

const ProductEditForm = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const { user } = useSelector((state) => state.userSlice || {});

  // Fetch product data
  const { data, isLoading, isError } = useGetProductByIdQuery(id);
  const product = data?.data || data?.product;

  const [updateProduct, { isLoading: updating }] = useUpdateProductMutation();

  const productSchema = yup.object({
    productname: yup.string().required("Product name is required"),
    price: yup.number().required("Product price is required"),
    detail: yup.string().required("Product detail is required"),
    category: yup.string().required("Category is required"),
    product_image: yup.mixed(),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      productname: product?.productname || "",
      price: product?.price || "",
      detail: product?.detail || "",
      category: product?.category || "",
      product_image: null,
      imageReview: product?.product_image || "",
    },
    validationSchema: productSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("productname", values.productname);
      formData.append("price", Number(values.price));
      formData.append("detail", values.detail);
      formData.append("category", values.category);

      if (values.product_image) {
        formData.append("image", values.product_image);
      }

      try {
        await updateProduct({
          id,
          body: formData,
          token: user?.token,
        }).unwrap();

        toast.success("Product updated successfully");
        nav("/adminproduct");
      } catch (err) {
        toast.error("Failed to update product");
        console.error(err);
      }
    },
  });

  if (isLoading) return <p className="text-center mt-4 text-gray-600">Loading product...</p>;
  if (isError) return <p className="text-center mt-4 text-red-500">Failed to load product.</p>;
  if (!product) return <p className="text-center mt-4">Product not found.</p>;

  return (
    <Card color="transparent" shadow={false} className="max-w-sm mx-auto mt-4 mb-4 p-6">
      <Typography variant="h4" color="blue-gray" className="mb-4">
        Update Product
      </Typography>

      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <Input
            size="lg"
            placeholder="Product Name"
            label="Product Name"
            color="orange"
            name="productname"
            onChange={formik.handleChange}
            value={formik.values.productname}
          />
          {formik.errors.productname && formik.touched.productname && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.productname}</p>
          )}
        </div>

        <div>
          <Input
            size="lg"
            placeholder="Product Price"
            label="Product Price"
            color="orange"
            name="price"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          
          {formik.errors.price && formik.touched.price && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.price}</p>
          )}
        </div>
        <div>
          <Input
            size="lg"
            placeholder="Category"
            label="Category"
            color="orange"
            name="category"
            onChange={formik.handleChange}
            value={formik.values.category}
          />
          {formik.errors.category && formik.touched.category && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.category}</p>
          )}
        </div>

        <div>
          <Textarea
            size="lg"
            placeholder="Product Detail"
            label="Product Detail"
            color="orange"
            name="detail"
            onChange={formik.handleChange}
            value={formik.values.detail}
          />
          {formik.errors.detail && formik.touched.detail && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.detail}</p>
          )}
        </div>

        <div className="space-y-2">
          <p className="font-semibold">Select An Image</p>
          <Input
            label="Image File"
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                formik.setFieldValue("product_image", file);
                formik.setFieldValue("imageReview", URL.createObjectURL(file));
              }
            }}
          />
          {formik.errors.product_image && formik.touched.product_image && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.product_image}</p>
          )}
          {formik.values.imageReview && (
            <img
              src={
                formik.values.product_image === null
                  ? `${imageUrl}${formik.values.imageReview}`
                  : formik.values.imageReview
              }
              alt="Preview"
              className="mt-2 max-h-40 rounded-md"
            />
          )}
        </div>

        <Button type="submit" className="mt-4" fullWidth disabled={updating}>
          {updating ? "Updating..." : "Submit"}
        </Button>
      </form>
    </Card>
  );
};

export default ProductEditForm;
