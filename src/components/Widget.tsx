import React from "react";

interface WidgetProps {
  title: string;
  children?: React.ReactNode;
}

const Widget: React.FC<WidgetProps> = ({ title, children }) => {
  return (
    <div className="bg-white shadow rounded-lg h-full">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default Widget;
