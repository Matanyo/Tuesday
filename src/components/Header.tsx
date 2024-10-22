import React from "react";

interface HeaderProps {
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isEditing, setIsEditing }) => {
  return (
    <header className="bg-white shadow">
      <div className="mx-auto px-4 py-4 flex items-center">
        <h1 className="text-2xl font-bold text-gray-800 flex-1">Tuesday</h1>
        <div className="flex-1 flex justify-center">
          <div className="flex">
            <button
              className={`px-2 py-1 rounded-l-md hover:bg-gray-200 text-gray-700 border border-gray-300 ${
                isEditing
                  ? "border-l-gray-300"
                  : "bg-primary-selected hover:bg-primary-selected border-r-blue-400"
              }`}
              onClick={() => setIsEditing(false)}
            >
              View
            </button>
            <button
              className={`px-2 py-1 rounded-r-md text-gray-700 border border-gray-300 hover:bg-gray-200 ${
                isEditing
                  ? "bg-primary-selected hover:bg-primary-selected "
                  : "border-l-blue-400"
              }`}
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </header>
  );
};

export default Header;
