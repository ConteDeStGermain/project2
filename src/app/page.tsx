import Filters from "./home/filters"
import Cards from "./home/cards"
import React, { useState } from 'react';
import { CheckboxContext } from "./CheckboxContext";

interface CheckboxContextType {
  checkboxState: {
    [key: string]: boolean;
  };
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Home() {
  const [checkboxState, setCheckboxState] = useState<CheckboxContextType['checkboxState']>({
    cheap: false,
    average: false,
    expensive: false,
    poor: false,
    good: false,
    amazing: false,
    wifi: false,
    pastries: false,
    goodseating: false,
    coffeealternatives: false,
    milkalternatives: false,
    beautifulview: false,
    favorite: false,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxState({
      ...checkboxState,
      [event.target.id]: event.target.checked
    });
  };

  return (
    <CheckboxContext.Provider value={{ checkboxState, handleInputChange }}>
      <main className="min-h-screen flex-col p-12">
        <div className='flex flex-row'>
          <Filters />
          <Cards />
        </div>
      </main>
    </CheckboxContext.Provider>
  )
}
