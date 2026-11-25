import { useSyncExternalStore } from "react";
function subscribe(callback: () => void) {
  document.addEventListener("portfolio:language", callback);
  document.addEventListener("portfolio:motion", callback);
  return () => {
    document.removeEventListener("portfolio:language", callback);
    document.removeEventListener("portfolio:motion", callback);
  };
}
export function usePortfolioLanguage() {
  return useSyncExternalStore(
    subscribe,
    () => window.portfolio.getLanguage(),
    () => "en",
  );
}
export function usePortfolioPaused() {
  return useSyncExternalStore(
    subscribe,
    () => window.portfolio.getPaused(),
    () => true,
  );
}
