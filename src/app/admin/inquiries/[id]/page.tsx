import Link from "next/link";
import { notFound } from "next/navigation";
import PageBreadcrumb from "@/components/admin/PageBreadCrumb";
import { getInquiry, getProductBySlug } from "@/lib/admin/queries";
import InquiryDetailActions from "@/components/admin/InquiryDetailActions";

export const dynamic = "force-dynamic";

export default async function AdminInquiryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const inquiry = getInquiry(Number(id));
  if (!inquiry) notFound();

  const modelSlug = inquiry.model?.trim() || "";
  const linkedProduct = modelSlug ? getProductBySlug(modelSlug) : undefined;

  const fields = [
    ["Name", inquiry.name],
    ["Phone", inquiry.phone || "—"],
    ["Email", inquiry.email || "—"],
    ["Interest / model", inquiry.model || "—"],
    ["Status", inquiry.status.replace("_", " ")],
    ["Received", new Date(inquiry.created_at + "Z").toLocaleString("en-GB")],
    ["Updated", new Date(inquiry.updated_at + "Z").toLocaleString("en-GB")],
  ] as const;

  return (
    <div>
      <PageBreadcrumb pageTitle={`Inquiry · ${inquiry.name}`} />
      <div className="mb-4">
        <Link
          href="/admin/inquiries"
          className="text-sm font-medium text-brand-500 hover:text-brand-600"
        >
          ← Back to inquiries
        </Link>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 lg:col-span-2">
          <dl className="grid gap-4 sm:grid-cols-2">
            {fields.map(([label, value]) => (
              <div key={label}>
                <dt className="text-xs tracking-wide text-gray-500 uppercase">
                  {label}
                </dt>
                <dd className="mt-1 text-sm font-medium text-gray-900 capitalize">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
          {inquiry.message ? (
            <div className="mt-6 border-t border-gray-100 pt-6">
              <h3 className="mb-2 text-sm font-semibold text-gray-900">
                Message
              </h3>
              <p className="whitespace-pre-wrap text-sm text-gray-600">
                {inquiry.message}
              </p>
            </div>
          ) : null}
          {linkedProduct ? (
            <div className="mt-6 border-t border-gray-100 pt-6">
              <h3 className="mb-2 text-sm font-semibold text-gray-900">
                Linked product
              </h3>
              <p className="mb-3 text-sm text-gray-600">
                {linkedProduct.name}{" "}
                <span className="text-gray-400">({linkedProduct.slug})</span>
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href={`/admin/products/${linkedProduct.id}/edit`}
                  className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
                >
                  Edit product
                </Link>
                <Link
                  href={`/sv/catalog/${linkedProduct.slug}`}
                  target="_blank"
                  className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
                >
                  View on site
                </Link>
              </div>
            </div>
          ) : null}
        </div>
        <InquiryDetailActions
          id={inquiry.id}
          status={inquiry.status}
          email={inquiry.email}
          phone={inquiry.phone}
        />
      </div>
    </div>
  );
}
