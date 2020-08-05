export function findMerchant(description: string) {
  const merchant = description.toLowerCase();

  /* e.g. new merchant for nandos.jpg
    if (merchant.includes("nando")) return "nandos.jpg";
  */

  if (merchant.includes("transfer to")) return "up.jpg";
  if (merchant.includes("round up")) return "roundup.jpg";
  if (merchant.includes("interest")) return "interest.jpg";

  return "upblack.jpg";
}
