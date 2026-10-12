import PageBreadcrumb from "@/components/admin/PageBreadCrumb";
import ProductForm from "@/components/admin/ProductForm";
import { listCategories } from "@/lib/admin/queries";

export const dynamic = "force-dynamic";

export default function AdminAddProductPage() {
  const categories = listCategories();
  return (
    <div>
      <PageBreadcrumb pageTitle="Add product" />
      <ProductForm categories={categories} />
    </div>
  );
}
