import { useState } from "react";
import { IFilters } from "../../interfaces";

export const useFilters = (initialFilters: IFilters) => {
  const [filters, setFilters] = useState<IFilters>(initialFilters);

  const changeFilters = (key: string, value: number | string | null) => {
    setFilters((prev) => {
      return { ...prev, [key]: value };
    });
  };

  return { filters, changeFilters };
};
