import { useInitialTheme } from "hooks/useInitialTheme";
import { Main, Profile } from "pages";
import { PATHS } from "constants/paths";
import {
  BrowserRouter,
  Route,
  Navigate,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { EthyleneProvider } from "ethylene/utils";
import { ethyleneStoreConext } from "ethylene/store";
import { useProvider } from "ethylene/hooks";
import { ethers } from "ethers";
import { Landing } from "pages";

declare let window: any & Window;

function App() {
  useInitialTheme();

  return (
    <EthyleneProvider context={ethyleneStoreConext}>
      <BrowserRouter>
        <Routes>
          <Route path={PATHS.home} element={<Landing />} />
          <Route path={PATHS.community} element={<Main />} />
          <Route path={PATHS.profile} element={<Profile />} />
          <Route path="*" element={<Navigate to={PATHS.home} />} />
        </Routes>
        <NavigationAnimator />
      </BrowserRouter>
    </EthyleneProvider>
  );
}

const NavigationAnimator = () => {
  const { pathname } = useLocation();
  const { setProvider } = useProvider();

  useEffect(() => {
    if (window.ethereum) {
      setProvider(new ethers.providers.Web3Provider(window.ethereum, "any"));
    }
  }, []);

  useEffect(() => {
    document.body.animate([{ opacity: 0.8 }, { opacity: 1 }], {
      duration: 200,
      fill: "forwards",
    });
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return null;
};

export default App;
