import React from "react";
import { IoDownloadOutline } from "react-icons/io5";

function ImageDownloader({ imageUrl }) {
  const handleDownload = async () => {
    try {
      const response = await fetch(imageUrl);
      if (!response.ok) {
        throw new Error("Không thể tải xuống hình ảnh");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

     
      const a = document.createElement("a");
      a.href = url;
      a.download = "cake-image.png"; 
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url); 
    } catch (error) {
      console.error("Có lỗi xảy ra khi tải xuống hình ảnh:", error);
    }
  };

  return (
    <div onClick={handleDownload} className="cursor-pointer">
      <IoDownloadOutline size={36} />
    </div>
  );
}

export default ImageDownloader;
