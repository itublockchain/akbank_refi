import styles from "./Navbar.module.scss";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { useTheme } from "hooks/useTheme";
import LOGO2 from "assets/logo.svg";
import { Button } from "ui";
import { formatAddress } from "utils/formatAddress";
import { clsnm } from "utils/clsnm";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src={LOGO2}></img>
          <div>Sirer</div>
        </div>

        <div className={styles.buttons}>
          <div className={styles.connectButton}>
            {" "}
            <Button
              height="40px"
              // onClick={() => {
              //   if (!auth) connect();
              //   if (!isRightNetwork) {
              //     switchTo();
              //   } else {
              //     modal.open();
              //   }
              // }}
              color={theme === "light" ? "akbank" : "akbank"}
              className={clsnm(
                // !mobile ? styles.themeChanger : styles.themeChangerMobile,
                styles.accountButton
              )}
            >
              {
                // !isRightNetwork && auth
                //   ? "Switch network"
                //   : auth && address
                //   ? formatAddress(address)
                // :
                "Connect Wallet"
              }
            </Button>
          </div>

          {/* <div
            className={styles.themeChanger}
            onClick={toggleTheme}
            style={
              theme === "light" ? { color: "#363853" } : { color: "white" }
            }
          >
            {theme === "dark" ? (
              <IoMdMoon size={22} />
            ) : (
              <IoMdSunny size={22} />
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};
export { Navbar };
