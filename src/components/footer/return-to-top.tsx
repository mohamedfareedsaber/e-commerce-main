"use client";
import { FaArrowUp } from "@react-icons/all-files/fa/FaArrowUp";
export default function ReturnToTop() {
  // TODO: Implement To Top Functionality
  return (
    <div className="flex h-full w-full items-center justify-center gap-x-4 bg-black">
      <button className="text-white py-2 flex items-center justify-center gap-x-2" onClick={() => {}}>
      <p className="text-white capitalize">return to top</p>
        <FaArrowUp />
      </button>
    </div>
  );
}
