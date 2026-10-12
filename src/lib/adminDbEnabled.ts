/**
 * Admin SQLite panel. Off by default on Vercel (no persistent FS / native DB).
 * Set ADMIN_DB_ENABLED=true to force on, or false to force off locally.
 */
export function isAdminDbEnabled(): boolean {
  const flag = process.env.ADMIN_DB_ENABLED?.trim().toLowerCase();
  if (flag === "true" || flag === "1") return true;
  if (flag === "false" || flag === "0") return false;
  return process.env.VERCEL !== "1";
}
