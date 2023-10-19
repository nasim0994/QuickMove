"use client";
import { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

const languages = ["English", "বাংলা"];

export default function LanguageDropdown() {
  const [dropdown, setDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!e.target.closest(".btn")) {
        setDropdown(false);
      }
    });
  }, []);

  return (
    <div className="flex gap-1 items-center px-2 py-3 relative">
      <button
        onClick={() => setDropdown(!dropdown)}
        className="btn ml-3 px-3 py-[5px] flex items-center gap-2 bg-primary rounded text-base-100"
      >
        <span className="language_display text-sm">{selectedLanguage}</span>
        <MdArrowDropDown className="text-lg" />
      </button>

      <div className={`dropdown ${dropdown && "dropdown_show"}`}>
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
