import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const TargetComponent = () => {
  const isTrue = useSelector((state) => state.appState.isTrue); // Access the boolean state
  const ref = useRef(null);

  useEffect(() => {
    if (isTrue && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the component
    }
  }, [isTrue]); // Run when `isTrue` changes

  if (!isTrue) return null; // Don't render if state is false

  return (
    <div ref={ref} className="flex align-middle justify-center content-centerbg-gray-200 p-6 rounded shadow-md mt-6">
      <h2 className="mx-auto text-lg font-bold">Please enter details to Create card</h2>
      
    </div>
  );
};

export default TargetComponent;
