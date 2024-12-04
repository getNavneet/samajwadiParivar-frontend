import React from 'react';

function Button({
    children,
    type="button",
    bgColor="bg-gradient-to-l from-red-500  to-green-500 animate-gradient",
    textColor="text-white",
    className="",
    ...props

}) {
  return (
    <button className={`rounded-md ${bgColor} ${textColor} ${className}`} {...props}>
    {children} 
</button>
  );
}

export default Button;
