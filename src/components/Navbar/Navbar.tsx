import styles from "./Navbar.module.scss";
import { useTheme } from "hooks/useTheme";
import LOGO2 from "assets/logo.svg";
import { Button } from "ui";
import { formatAddress } from "utils/formatAddress";
import { clsnm } from "utils/clsnm";
import PROFILE from "assets/ulas.png";
import { Link } from "react-router-dom";
import { useAuth, useConnection } from "ethylene/hooks";
import { useAddress } from "ethylene/hooks/useAddress";

const Navbar = () => {
  const { theme } = useTheme();
  const { connect } = useConnection();
  const address = useAddress();
  const auth = useAuth();

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={LOGO2} alt="logo"></img>
          </Link>
          <div>Ağaç Dikemedik Ama</div>
        </div>

        <div className={styles.buttons}>
          {auth ? (
            <div className={styles.profile}>
              <Link
                to="/profile"
                // target="_blank"
              >
                <img src={PROFILE} alt="profile"></img>
                <div className={styles.info}>
                  <div>Ulas</div>
                  <div>{address ? formatAddress(address) : "0x..."}</div>
                </div>
              </Link>
            </div>
          ) : (
            <div className={styles.connectButton}>
              <Button
                height="40px"
                onClick={connect}
                color={theme === "light" ? "akbank" : "akbank"}
                className={clsnm(styles.accountButton)}
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
