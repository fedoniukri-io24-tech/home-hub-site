import PageBreadcrumb from "@/components/admin/PageBreadCrumb";
import ProductsTable from "@/components/admin/ProductsTable";
import { listProducts } from "@/lib/admin/queries";

export const dynamic = "force-dynamic";

export default function AdminProductsPage() {
  const products = listProducts({ includeDrafts: true });
  return (
    <div>
      <PageBreadcrumb pageTitle="Products" />
      <ProductsTable products={products} />
    </div>
  );
}
