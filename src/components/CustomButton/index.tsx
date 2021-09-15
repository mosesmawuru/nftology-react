import React from "react";


type CustomSVGProps = { border: string;
    color: string;
    // children:any;
    height: string;
    onClick: () => void;
    radius: string
    width: string};
const Button = ({ 
    border,
    color,
    // children,
    height,
    onClick, 
    radius,
    width
  }:CustomSVGProps) => { 
  return (
    <button 
      type="button"
      onClick={onClick}
      style={{
         backgroundColor: color,
         border,
         borderRadius: radius,
         height,
         width
      }}
    >
        Hello
    {/* {children} */}
    </button>
  );
}

export default Button;