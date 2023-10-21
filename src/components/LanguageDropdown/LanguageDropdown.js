"use client";
import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
const languages = ["English", "বাংলা"];

export default function LanguageDropdown() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  return (
    <div className="flex gap-1 items-center lg:px-2 lg:py-3 relative">
      <button className="btn lg:ml-3 lg:px-3 py-[5px] flex items-center gap-2 lg:bg-primary rounded lg:text-base-100">
        <span className="language_display lg:text-sm">{selectedLanguage}</span>
        <MdArrowDropDown className="text-lg" />
      </button>

      <div className="dropdown language_dropdown">
        <div className="text-neutral">
          {languages?.map((language, i) => (
            <button
              onClick={() => setSelectedLanguage(language)}
              key={i}
              className={`px-4 py-2 hover:bg-gray-100 duration-300 ${
                selectedLanguage === language && "text-primary"
              }`}
            >
              {language}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
