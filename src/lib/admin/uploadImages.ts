export type UploadedImage = {
  filename: string;
  url: string;
  key: string;
};

async function uploadOne(file: File): Promise<UploadedImage> {
  const body = new FormData();
  body.append("files", file);
  const res = await fetch("/api/admin/uploads", { method: "POST", body });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(
      data.error ||
        `Failed to upload “${file.name}” (${Math.round(file.size / 1024 / 1024)} MB)`,
    );
  }
  const uploaded = (data.files as UploadedImage[] | undefined)?.[0];
  if (!uploaded) {
    throw new Error(`Upload returned no file for “${file.name}”`);
  }
  return uploaded;
}

/** Upload images one-by-one to avoid middleware/body size limits on big batches. */
export async function uploadImages(files: File[]): Promise<UploadedImage[]> {
  if (!files.length) return [];
  const saved: UploadedImage[] = [];
  for (const file of files) {
    saved.push(await uploadOne(file));
  }
  return saved;
}
