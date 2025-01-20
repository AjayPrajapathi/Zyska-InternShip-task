
import { assets } from "../assets/asset";
import { useState } from "react";

export const Questions = ({ list }) => {
  const [questions, setQuestions] = useState(list);

  const handleVisibility = (index) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((item, id) =>
        id === index ? { ...item, Isvisible: !item.Isvisible } : item
      )
    );
  };

  return (
    <div className="flex flex-col max-w-[768px] items-center gap-8 mx-auto">
      {questions.map((item, index) => (
        <div
          key={index}
          className="flex w-full justify-between items-center gap-4 border-b border-gray-300 pb-4"
        >
          <div className="flex flex-col max-w-[768px]">
            <h1 className="text-lg font-semibold text-gray-800">{item.question}</h1>
            {/* Reserve consistent height for the solution */}
            <p
              className={`mt-2 text-gray-600 transition-opacity duration-300 ${
                item.Isvisible ? "visible" : "hidden"
              }`}
          
            >
              {item.solution}
            </p>
          </div>
          <img
            src={item.Isvisible ? assets.minusIcon : assets.plusIcon}
            onClick={() => handleVisibility(index)}
            alt="toggle visibility"
            className="cursor-pointer w-6 h-6"
          />
        </div>
      ))}

    </div>
  );
};

