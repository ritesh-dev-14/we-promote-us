import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly resets the browser viewport position to top-left coordinate maps
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;