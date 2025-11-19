import React from "react";
import { Loader2 } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center py-12">
      <Loader2 className="animate-spin text-indigo-600" size={48} />
    </div>
  );
};

export default LoadingSpinner;
