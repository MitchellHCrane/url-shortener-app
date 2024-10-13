"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";

const Redirect = () => {
  const { randomString } = useParams(); // Get the dynamic route segment

  useEffect(() => {
    if (randomString) {
      // Get the original URL from localStorage
      const originalUrl = localStorage.getItem(randomString as string);
      if (originalUrl) {
        // Redirect to the original URL
        window.location.href = originalUrl;
      } else {
        alert("Short URL not found");
      }
    }
  }, [randomString]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-16 h-16 border-4 border-t-transparent border-leland rounded-full animate-spin">
        .
      </div>
    </div>
  );
};

export default Redirect;
