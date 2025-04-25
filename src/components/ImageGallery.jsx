import React, { useState, useEffect } from "react";

export default function ImageGallery({ image }) {
  const defaultImage =
    "https://wvxxlssoccbctxspmtyy.supabase.co/storage/v1/object/public/products/public/ec98621d-10b6-4e4a-b665-146481c14b0f.jpeg";

  const images = [
    image || defaultImage,
    "https://wvxxlssoccbctxspmtyy.supabase.co/storage/v1/object/public/products/public/b11d590f-f665-411c-a03b-96729b9255ac.jpeg",
    defaultImage,
    "https://wvxxlssoccbctxspmtyy.supabase.co/storage/v1/object/public/products/public/ca7cc203-8fb7-496f-97bb-e7d02137145a.jpeg",
  ];

  const [selectedImage, setSelectedImage] = useState(image || defaultImage);

  // Update selected image when prop image changes
  useEffect(() => {
    if (image) {
      setSelectedImage(image);
    }
  }, [image]);

  return (
    <div className="flex items-center justify-center  ">
      <div className="flex flex-col-reverse md:flex-row gap-4">
        {/* Thumbnails */}
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
        <div className="w-full  md:h-[500px] rounded-md overflow-hidden relative">
          <img
            src={selectedImage}
            alt="Selected"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
