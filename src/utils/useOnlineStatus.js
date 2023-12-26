import { useState, useEffect } from "react";

const useOnileStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
  }, []);

  // boolean value
  return onlineStatus;
};

export default useOnileStatus;
