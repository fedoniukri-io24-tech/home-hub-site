"use client";

export type ColorOptionRow = {
  hex: string;
  name_sv: string;
  name_en: string;
};

const inputClass =
  "w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#3c2412] focus:ring-3 focus:ring-[#3c2412]/12";

export function parseColorOptions(json: string): ColorOptionRow[] {
  try {
    const parsed = JSON.parse(json || "[]") as Array<{
      hex?: string;
      name_sv?: string;
      name_en?: string;
      name?: string;
    }>;
    if (!Array.isArray(parsed)) return [];
    return parsed.map((c) => ({
      hex: c.hex || "#d4d0c8",
      name_sv: c.name_sv || c.name || "",
      name_en: c.name_en || c.name || "",
    }));
  } catch {
    return [];
  }
}

export function serializeColorOptions(rows: ColorOptionRow[]): string {
  return JSON.stringify(
    rows
      .filter((r) => r.hex.trim())
      .map((r) => ({
        hex: r.hex.trim(),
        name_sv: r.name_sv.trim(),
        name_en: r.name_en.trim(),
      })),
  );
}

export default function ColorOptionsEditor({
  value,
  onChange,
}: {
  value: ColorOptionRow[];
  onChange: (next: ColorOptionRow[]) => void;
}) {
  function update(index: number, patch: Partial<ColorOptionRow>) {
    onChange(value.map((row, i) => (i === index ? { ...row, ...patch } : row)));
  }

  function remove(index: number) {
    onChange(value.filter((_, i) => i !== index));
  }

  function add() {
    onChange([...value, { hex: "#d4d0c8", name_sv: "", name_en: "" }]);
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-gray-800">Colour options</p>
          <p className="text-xs text-gray-500">
            Shown as swatches on the product page
          </p>
        </div>
        <button
          type="button"
          onClick={add}
          className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
        >
          Add colour
        </button>
      </div>

      {value.length === 0 ? (
        <p className="rounded-xl border border-dashed border-gray-200 px-4 py-6 text-center text-sm text-gray-500">
          No colours yet. Add at least one if the product has finish options.
        </p>
      ) : (
        <ul className="space-y-3">
          {value.map((row, index) => (
            <li
              key={index}
              className="grid gap-3 rounded-xl border border-gray-200 bg-[#faf8f5] p-3 sm:grid-cols-[auto_1fr_1fr_1fr_auto]"
            >
              <label className="flex items-center gap-2">
                <input
                  type="color"
                  value={/^#[0-9a-fA-F]{6}$/.test(row.hex) ? row.hex : "#d4d0c8"}
                  onChange={(e) => update(index, { hex: e.target.value })}
                  className="h-10 w-12 cursor-pointer rounded border border-gray-200 bg-white p-1"
                />
                <input
                  className={`${inputClass} w-28 font-mono text-xs`}
                  value={row.hex}
                  onChange={(e) => update(index, { hex: e.target.value })}
                  placeholder="#d4d0c8"
                />
              </label>
              <input
                className={inputClass}
                value={row.name_sv}
                onChange={(e) => update(index, { name_sv: e.target.value })}
                placeholder="Name (SV)"
              />
              <input
                className={inputClass}
                value={row.name_en}
                onChange={(e) => update(index, { name_en: e.target.value })}
                placeholder="Name (EN)"
              />
              <button
                type="button"
                onClick={() => remove(index)}
                className="rounded-lg border border-red-200 px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50 sm:self-center"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
