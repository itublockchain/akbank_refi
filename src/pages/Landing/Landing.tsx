import { Navbar } from "components";
import styles from "./Landing.module.scss";
import L1 from "assets/landing1.png";
import L2 from "assets/landing2.png";
import L3 from "assets/landing3.png";
import { Button } from "ui";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.firstBlood}>
        <img src={L1}></img>

        <div className={styles.underText}>
          Bla bla bla bla bla bla bla bla bla
        </div>
        <Link to="/community">
          <Button
            fontSize="fs22"
            fontWeight="fw400"
            height="50px"
            width="325px"
            color="landing"
          >
            Create Your Community
          </Button>
        </Link>
      </div>
      <div className={styles.secondBlood}>
        <img src={L2}></img>

        <div className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </div>
      </div>
      <div className={styles.intervalText}>BLA BLA BLA</div>
      <div className={styles.thirtBlood}>
        <div className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </div>
        <img src={L3}></img>
      </div>
    </div>
  );
};

export { Landing };
