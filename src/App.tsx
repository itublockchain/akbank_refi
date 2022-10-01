import { useInitialTheme } from "hooks/useInitialTheme";
import { Main } from "pages";
import { PATHS } from "constants/paths";
import {
  BrowserRouter,
  Route,
  Navigate,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

function App() {
  useInitialTheme();
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.home} element={<Main />} />
        <Route path={PATHS.community} element={<Main />} />
        <Route path={PATHS.profile} element={<Main />} />
        <Route path="*" element={<Navigate to={PATHS.home} />} />
      </Routes>
      <NavigationAnimator />
    </BrowserRouter>
  );
}

const NavigationAnimator = () => {
  const { pathname } = useLocation();

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
