import styles from "./Navbar.module.scss";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { useTheme } from "hooks/useTheme";
import LOGO2 from "assets/logo.svg";
import { Button } from "ui";
import { formatAddress } from "utils/formatAddress";
import { clsnm } from "utils/clsnm";
import useSetAccount from "hooks/useSetAccount";
import { useAccount } from "hooks/useAccount";
import PROFILE from "assets/alim.png";
import account from "store/slicers/account";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { requestAccounts } = useSetAccount();
  const { auth, address } = useAccount();
  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <a href="http://localhost:3000">
            <img src={LOGO2}></img>
          </a>
          <div>Ağaç Dikemedik Ama</div>
        </div>

        <div className={styles.buttons}>
          {auth ? (
            <div className={styles.profile}>
              <a
                href="http://localhost:3000/profile"
                // target="_blank"
              >
                <img src={PROFILE}></img>
                <div className={styles.info}>
                  <div>Alim</div>
                  <div>{address ? formatAddress(address) : "0x..."}</div>
                </div>
              </a>
            </div>
          ) : (
            <div className={styles.connectButton}>
              <Button
                height="40px"
                onClick={() => {
                  if (!auth) requestAccounts();
                }}
                color={theme === "light" ? "akbank" : "akbank"}
                className={clsnm(
                  // !mobile ? styles.themeChanger : styles.themeChangerMobile,
                  styles.accountButton
                )}
              >
                {"Connect Wallet"}
              </Button>
            </div>
          )}

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
