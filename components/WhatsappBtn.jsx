"use client";

export default function WhatsAppButton({ name, price }) {
  const msg = encodeURIComponent(`Hi, I am interested in ${name} for $${price}`);
  const phone = "923XXXXXXXXX"; // replace with your WhatsApp number

  return (
    <a
      href={`https://wa.me/${phone}?text=${msg}`}
      target="_blank"
      className="bg-green-500 text-white px-4 py-2 rounded mt-2 inline-block"
    >
      WhatsApp
    </a>
  );
}
