import { useState, useEffect } from "react";
import { 
  Avatar, 
  Button, 
  Card, 
  CardFooter, 
  Typography, 
  Dialog, 
  DialogHeader, 
  DialogBody, 
  DialogFooter,
  IconButton,
  Input
} from "@material-tailwind/react";
import { 
  PlusIcon, 
  MagnifyingGlassIcon, 
  PencilIcon, 
  TrashIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router";
import { imageUrl } from "../../../Constant/Constant";
import { useGetProductQuery, useRemoveProductMutation } from "../../../Api/productApi";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const EditProduct = () => {
  const [active, setActive] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  // ✅ API
  const { data, isLoading } = useGetProductQuery({ page: active });
  const [removeProduct] = useRemoveProductMutation();

  // ✅ Redux user state
  const { user } = useSelector((state) => state.user) || { user: null };

  const nav = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [active]);

  const TABLE_HEAD = ["Product", "Title", "Details", "Status", "Actions"];

  // ✅ Delete handler
  const handleRemove = async (_id, product_image) => {
    if (!user?.token) {
      toast.error("User not logged in!");
      return;
    }

    try {
      await removeProduct({
        id: _id,
        imagePath: product_image,
        token: user.token,
      }).unwrap();

      toast.success("Product deleted successfully");
      setDeleteDialogOpen(false);
    } catch (err) {
      toast.error("Error deleting product");
    }
  };

  // ✅ Open confirm delete
  const openDeleteDialog = (_id, product_image, productname) => {
    setProductToDelete({ _id, product_image, productname });
    setDeleteDialogOpen(true);
  };

  // ✅ Search filter (safe optional chaining)
  const filteredProducts =
    data?.data?.filter((product) => {
      const name = product?.productname?.toLowerCase() || "";
      const detail = product?.detail?.toLowerCase() || "";
      return (
        name.includes(searchTerm.toLowerCase()) ||
        detail.includes(searchTerm.toLowerCase())
      );
    }) || [];

  // ✅ Pagination button
  const PaginationButton = ({ children, active, onClick, disabled }) => (
    <IconButton
      variant={active ? "filled" : "outlined"}
      color="blue"
      size="sm"
      onClick={onClick}
      disabled={disabled}
      className={`rounded-full ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </IconButton>
  );

  // ✅ Pagination component
  const ProductPagination = () => {
    const totalPages = data?.pagination?.totalPages || 1;

    return (
      <div className="flex items-center gap-2 justify-center mt-6">
        <PaginationButton onClick={() => setActive(1)} disabled={active === 1}>
          <ChevronDoubleLeftIcon className="h-4 w-4" />
        </PaginationButton>

        <PaginationButton
          onClick={() => setActive((prev) => Math.max(1, prev - 1))}
          disabled={active === 1}
        >
          <ArrowLeftIcon className="h-4 w-4" />
        </PaginationButton>

        {[...Array(totalPages)].map((_, idx) => {
          const pageNum = idx + 1;
          if (
            pageNum === 1 ||
            pageNum === totalPages ||
            (pageNum >= active - 1 && pageNum <= active + 1)
          ) {
            return (
              <PaginationButton
                key={pageNum}
                active={active === pageNum}
                onClick={() => setActive(pageNum)}
              >
                {pageNum}
              </PaginationButton>
            );
          } else if (pageNum === active - 2 || pageNum === active + 2) {
            return <Typography key={pageNum}>...</Typography>;
          }
          return null;
        })}

        <PaginationButton
          onClick={() =>
            setActive((prev) => Math.min(totalPages, prev + 1))
          }
          disabled={active === totalPages}
        >
          <ArrowRightIcon className="h-4 w-4" />
        </PaginationButton>

        <PaginationButton
          onClick={() => setActive(totalPages)}
          disabled={active === totalPages}
        >
          <ChevronDoubleRightIcon className="h-4 w-4" />
        </PaginationButton>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:ml-0 lg:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <Typography variant="h2" color="blue-gray" className="mb-2">
              Product Management
            </Typography>
            <Typography
              variant="paragraph"
              color="gray"
              className="font-normal"
            >
              Manage your store products efficiently
            </Typography>
          </div>

          <Button
            onClick={() => nav("/Addproduct")}
            className="flex items-center gap-2 py-3 px-6"
            color="orange"
            size="md"
          >
            <PlusIcon className="h-5 w-5" />
            Add New Product
          </Button>
        </div>

        {/* Search Box */}
        <div className="mb-6">
          <div className="relative flex w-full max-w-[24rem]">
            <Input
              type="text"
              label="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-20"
              containerProps={{
                className: "min-w-0",
              }}
            />
            <Button size="sm" className="!absolute right-1 top-1 rounded">
              <MagnifyingGlassIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Products Table */}
        <Card className="shadow-lg rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-max table-auto">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-gray-50/50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold leading-none opacity-90"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map(
                    ({ productname, product_image, detail, _id, Status }) => (
                      <tr
                        key={_id}
                        className="even:bg-blue-gray-50/50 hover:bg-gray-100 transition-colors"
                      >
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <Avatar
                              src={`${imageUrl}${product_image}`}
                              alt={productname}
                              size="lg"
                              className="rounded-lg shadow-md"
                            />
                          </div>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-semibold"
                          >
                            {productname}
                          </Typography>
                        </td>
                        <td className="p-4 max-w-xs">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal line-clamp-2"
                            title={detail}
                          >
                            {detail}
                          </Typography>
                        </td>
                        <td className="p-4 max-w-xs">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal line-clamp-2"
                            title={Status}
                          >
                            {Status}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <IconButton
                              onClick={() => nav(`/update/${_id}`)}
                              color="blue"
                              size="sm"
                              variant="outlined"
                              title="Edit product"
                            >
                              <PencilIcon className="h-4 w-4" />
                            </IconButton>
                            <IconButton
                              onClick={() =>
                              (_id, product_image, productname)
                              }
                              color="red"
                              size="sm"
                              variant="outlined"
                              title="Delete product"
                            >
                              <TrashIcon className="h-4 w-4" />
                            </IconButton>
                          </div>
                        </td>
                      </tr>
                    )
                  )
                ) : (
                  <tr>
                    <td colSpan={5} className="p-8 text-center">
                      <Typography variant="h6" color="blue-gray">
                        No products found
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="mt-2"
                      >
                        {searchTerm
                          ? "Try adjusting your search term"
                          : "Add your first product to get started"}
                      </Typography>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
            <Typography variant="small" color="gray" className="font-normal">
              Page {active} of {data?.pagination?.totalPages || 1}
            </Typography>
            <div className="flex gap-2">
              <ProductPagination />
            </div>
          </CardFooter>
        </Card>

        {/* Delete Confirmation Dialog */}
        <Dialog open={deleteDialogOpen} handler={setDeleteDialogOpen}>
          <DialogHeader>Confirm Deletion</DialogHeader>
          <DialogBody>
            Are you sure you want to delete{" "}
            <strong>{productToDelete?.productname}</strong>? This action cannot
            be undone.
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="blue-gray"
              onClick={() => setDeleteDialogOpen(false)}
              className="mr-1"
            >
              Cancel
            </Button>
            <Button
              variant="gradient"
              color="red"
              onClick={() =>
                handleRemove(
                  productToDelete?._id,
                  productToDelete?.product_image
                )
              }
            >
              Delete
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </div>
  );
};

export default EditProduct;
