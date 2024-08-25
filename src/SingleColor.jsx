import React from "react";
import { toast } from "react-toastify";

export const SingleColor = ({ color }) => {
  const { hex, weight, type } = color;
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Copied to clipboard");
      } catch (error) {
        toast.error("Failed to copy text: ", error);
      }
    } else {
      toast.error("Clipboard API not supported");
    }
  };
  return (
    <article
      className="color"
      style={{ backgroundColor: `#${hex}` }}
      onClick={saveToClipboard}
    >
      <p
        className="percentage-value"
        style={{ color: type === "shade" ? "white" : "black" }}
      >
        {weight}%
      </p>
      <p
        className="color-value"
        style={{ color: type === "shade" ? "white" : "black" }}
      >
        #{hex}
      </p>
    </article>
  );
};
