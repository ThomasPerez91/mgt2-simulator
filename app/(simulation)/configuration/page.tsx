"use client";

import { useState } from "react";
import { Inputs } from "./_components/inputs/inputs";
import { Datas } from "./_components/datas/datas";
import { AvalableThemes } from "./_components/themes/avalable-themes";

const GenrePage = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedSubGenre, setSelectedSubGenre] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");
  const [selectedSubTheme, setSelectedSubTheme] = useState("");

  return (
    <div className="w-full backdrop-blur-sm">
      <div className="px-4 mt-24 flex flex-col items-center space-y-6 lg:flex-row lg:justify-around lg:items-start lg:space-y-0">
        <div className="w-[32rem] space-y-6">
          <Inputs
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
            selectedSubGenre={selectedSubGenre}
            setSelectedSubGenre={setSelectedSubGenre}
            selectedTheme={selectedTheme}
            setSelectedTheme={setSelectedTheme}
            setSelectedSubTheme={setSelectedSubTheme}
          />
          <AvalableThemes genre={selectedGenre} subGenre={selectedSubGenre} />
        </div>
        <Datas
          selectedGenre={selectedGenre}
          selectedSubGenre={selectedSubGenre}
        />
      </div>
    </div>
  );
};

export default GenrePage;
