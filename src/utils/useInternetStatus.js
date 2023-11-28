import { useEffect, useState } from "react";

export const useInternetStatus = () => {
  const [internetStatus, setInternetStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", (e) => {
      setInternetStatus(false);
    });

    window.addEventListener("online", (e) => {
      setInternetStatus(true);
    });
  }, []);

  return internetStatus;
};
