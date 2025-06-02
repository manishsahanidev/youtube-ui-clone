import { useState } from "react";

export const useMobileSearch = () => {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  return {
    isMobileSearchOpen,
    openMobileSearch: () => setIsMobileSearchOpen(true),
    closeMobileSearch: () => setIsMobileSearchOpen(false),
  };
};
