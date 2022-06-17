const { useLayoutEffect } = require("react");
const { useLocation } = require("react-router-dom");

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

export default Wrapper;