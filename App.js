
import React from "react";
import { Instagram, ShoppingBag } from "lucide-react";
import "./styles.css";

function App() {
  return (
    <div className="min-h-screen bg-white text-black p-6 font-sans">
      <header className="text-3xl font-bold mb-6">Flexo Vibe</header>
      <p className="text-xl text-gray-600 mb-10">Style That Speaks Desi Swag</p>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl shadow-xl bg-white p-6">
          <h2 className="text-2xl font-semibold mb-2">🔥 Oversized T-Shirts</h2>
          <p className="text-gray-600 mb-4">
            Unisex, comfy, and bold — perfect for daily style with attitude.
          </p>
          <button className="bg-black text-white px-4 py-2 rounded-md">Shop T-Shirts</button>
        </div>

        <div className="rounded-2xl shadow-xl bg-white p-6">
          <h2 className="text-2xl font-semibold mb-2">✨ Oxidised Jewellery</h2>
          <p className="text-gray-600 mb-4">
            Traditional meets trendy. Explore earrings, chokers & more.
          </p>
          <button className="bg-black text-white px-4 py-2 rounded-md">Shop Jewellery</button>
        </div>
      </section>

      <section className="mt-10 bg-gray-100 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
        <div className="flex gap-4">
          <button className="border px-4 py-2 rounded-md flex items-center gap-2">
            <Instagram size={16} /> @flexovibe
          </button>
          <button className="border px-4 py-2 rounded-md flex items-center gap-2">
            <ShoppingBag size={16} /> WhatsApp Store
          </button>
        </div>
      </section>

      <footer className="mt-10 text-center text-gray-500 text-sm">
        © 2025 Flexo Vibe. Built with ❤️ by Bantu Bhai.
      </footer>
    </div>
  );
}

export default App;
