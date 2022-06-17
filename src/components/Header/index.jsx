import RecentlyViewed from "../Category/RecentlyViewed";
import ShopByCategory from "../Category/ShopByCategory";

const Header = () => {
  return (
    <div className="container mx-auto px-4 py-2 flex items-center">
      <ShopByCategory />
      {/* <NavigationCategory /> */}
      <RecentlyViewed />
    </div>
  );
};

export default Header;
