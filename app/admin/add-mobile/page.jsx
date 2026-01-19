"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddMobilePage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    brand: "",
    price: "",
    stock: "",
    description: "",
    features: "",
  });
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1️⃣ Upload image to Cloudinary
      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image }),
      });
      const uploadData = await uploadRes.json();

      // 2️⃣ Save mobile data to Firebase
      await fetch("/api/mobiles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          price: Number(form.price),
          stock: Number(form.stock),
          features: form.features.split(",").map((f) => f.trim()),
          image: uploadData.url,
        }),
      });

      alert("Mobile added successfully ✅");
      setForm({ name: "", brand: "", price: "", stock: "", description: "", features: "" });
      setImage("");
      setPreview("");
    } catch (err) {
      alert("Something went wrong ❌");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = "w-full p-2.5 border border-gray-300 rounded-lg outline-none";
  const labelStyle = "block mb-1 font-medium text-gray-700";

  return (
    <div className="min-h-screen flex justify-center items-start pt-10 bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-6">Add New Mobile</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className={labelStyle}>Product Name</label>
            <input name="name" className={inputStyle} onChange={handleChange} required />
          </div>
          <div>
            <label className={labelStyle}>Brand</label>
            <input name="brand" className={inputStyle} onChange={handleChange} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelStyle}>Price</label>
              <input name="price" type="number" className={inputStyle} onChange={handleChange} required />
            </div>
            <div>
              <label className={labelStyle}>Stock</label>
              <input name="stock" type="number" className={inputStyle} onChange={handleChange} />
            </div>
          </div>
          <div>
            <label className={labelStyle}>Description</label>
            <textarea name="description" className={inputStyle} onChange={handleChange} rows={3} />
          </div>
          <div>
            <label className={labelStyle}>Features (comma separated)</label>
            <input name="features" className={inputStyle} onChange={handleChange} />
          </div>
          <div>
            <label className={labelStyle}>Image</label>
            <input type="file" accept="image/*" onChange={handleImage} />
            {preview && <img src={preview} className="mt-2 w-32 h-32 object-cover rounded" />}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white py-2 px-4 rounded w-full"
          >
            {loading ? "Posting..." : "Add Mobile"}
          </button>
        </form>
      </div>
    </div>
  );
}
