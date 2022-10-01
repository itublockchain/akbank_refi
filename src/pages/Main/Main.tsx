import styles from "./Main.module.scss";
import { Landing, Navbar, Footer, Profile } from "components";

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
};
export { Main };
