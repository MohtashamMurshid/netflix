import React from "react";

interface ButtonProps {
  label: string;
  color: "gray" | "red";
}

const Button: React.FC<ButtonProps> = ({ label, color }) => {
  const buttonStyle = {
    backgroundColor: color === "gray" ? "#808080" : "#FF0000",
    color: "#FFFFFF",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return <button style={buttonStyle}>{label}</button>;
};

export default Button;
