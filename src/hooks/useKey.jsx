import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(() => {
    const handleUserKeyPress = (e) => {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action(true);
      }
    };
    document.addEventListener("keydown", handleUserKeyPress);
    return () => {
      document.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [key, action]);
}
