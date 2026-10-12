"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function InquiryDetailActions({
  id,
  status,
  email,
  phone,
}: {
  id: number;
  status: string;
  email: string;
  phone: string;
}) {
  const router = useRouter();
  const [current, setCurrent] = useState(status);

  async function updateStatus(next: string) {
    const res = await fetch(`/api/admin/inquiries/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: next }),
    });
    if (!res.ok) {
      alert("Failed to update");
      return;
    }
    setCurrent(next);
    router.refresh();
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
      <h3 className="mb-4 text-base font-semibold text-gray-900 dark:text-white">
        Quick actions
      </h3>
      <label className="mb-4 block text-sm text-gray-600 dark:text-gray-300">
        Status
        <select
          className="mt-1.5 w-full rounded-xl border border-gray-200 px-3 py-2.5 capitalize dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          value={current}
          onChange={(e) => updateStatus(e.target.value)}
        >
          <option value="new">new</option>
          <option value="in_progress">in progress</option>
          <option value="done">done</option>
          <option value="archived">archived</option>
        </select>
      </label>
      <div className="space-y-2">
        {email ? (
          <a
            href={`mailto:${email}`}
            className="block rounded-xl bg-[#3c2412] px-4 py-2.5 text-center text-sm font-medium text-[#f5ebe0] hover:bg-[#2a180c]"
          >
            Email customer
          </a>
        ) : null}
        {phone ? (
          <a
            href={`tel:${phone}`}
            className="block rounded-xl border border-gray-200 px-4 py-2.5 text-center text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            Call {phone}
          </a>
        ) : null}
      </div>
    </div>
  );
}
