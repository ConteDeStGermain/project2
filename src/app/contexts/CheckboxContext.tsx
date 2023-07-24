import React from "react";

interface CheckboxContextType {
  checkboxState: {
    [key: string]: boolean;
  };
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckboxContext = React.createContext<CheckboxContextType | undefined>(undefined);