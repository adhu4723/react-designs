import React, { useState } from "react";

const images = [
  "https://wvxxlssoccbctxspmtyy.supabase.co/storage/v1/object/public/products/public/24fada32-83ae-4598-9815-06fc6b891277.jpeg",
  "https://wvxxlssoccbctxspmtyy.supabase.co/storage/v1/object/public/products/public/b11d590f-f665-411c-a03b-96729b9255ac.jpeg",
  "https://wvxxlssoccbctxspmtyy.supabase.co/storage/v1/object/public/products/public/ec98621d-10b6-4e4a-b665-146481c14b0f.jpeg",
  "https://wvxxlssoccbctxspmtyy.supabase.co/storage/v1/object/public/products/public/ca7cc203-8fb7-496f-97bb-e7d02137145a.jpeg",
  "https://wvxxlssoccbctxspmtyy.supabase.co/storage/v1/object/public/products/public/6d9b7ae2-0083-4e4c-bd04-3e96720a571c.jpeg",
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(images[1]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-100 p-">
    <div className="flex flex-col-reverse md:flex-row gap-4 ">
      {/* Thumbnails - move below on small screens */}
      <div className="flex flex-wrap md:flex-col gap-4 justify-center">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`thumbnail-${idx}`}
            onClick={() => setSelectedImage(img)}
            className={`w-20 h-20 cursor-pointer rounded-md object-cover transition-transform duration-200 hover:scale-105 border-2 ${
              selectedImage === img ? "border-blue-500" : "border-transparent"
            }`}
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="w-full md:w-[400px] h-[300px] md:h-[500px] rounded-md overflow-hidden ">
        <img
          src={selectedImage}
          alt="Selected furniture"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  </div>
  );
}
