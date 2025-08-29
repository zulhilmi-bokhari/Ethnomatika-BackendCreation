import React from "react";
import { View } from "lucide-react";

export const GalleryThumbnails = ({ className = "w-12 h-12" }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <View className="text-stone-500" size={24} />
    </div>
  );
};