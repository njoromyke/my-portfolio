import { GlobalContext } from "@/context/context";
import { useContext } from "react";

const Navbar = () => {
  const {
    globalState,
    globalState: { isMenuOpen },
    updateGlobalState,
  } = useContext(GlobalContext);

  const handleMenuClick = () => {
    updateGlobalState({ isMenuOpen: true });
  };

  return (
    <>
      <div className="mx-auto sticky top-0 shadow-sm bg-primary text-secondary">
        <div className="mx-auto sticky top-0 shadow-sm">
          <div className="flex justify-between py-4 px-4">
            <h2 className="text-2xl">Home</h2>
            <div onClick={handleMenuClick} className="text-secondary text-4xl cursor-pointer">
              <h2 className="bi bi-list"></h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
