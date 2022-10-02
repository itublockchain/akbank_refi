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
          AĞAÇ DİKEMEDİK AMA
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
          DAO'lasma sürecinde erken asamadaki topluluklar, üyelerinin sağladığı
          katkıların derecelendirilip bu üyelerinin cesitli faydalara
          ulastırılmasında seffaf ve doğrulanabilir bir operasyon mekanizması
          yaratamamaktadır.
        </div>
      </div>
      <div className={styles.intervalText}>OTONOM, MERKEZSİZ</div>
      <div className={styles.thirtBlood}>
        <div className={styles.text}>
          Toplulukları, üyelerin harcadığı emeklere göre katmanlara ayıran bir
          sosyal hub; topluluğun ihtiyaclarının belirlenmesinin ve cesitli
          destekleyicilerle bulusmasının, üyelere ise ürünlerinin esler
          tarafından doğrulanarak yayınlanmasının ve bu katkıları sebebiyle
          tokenlar ile ödüllendirilmesinin sağlanacağı bir ortam sunar.
        </div>
        <img src={L3}></img>
      </div>
    </div>
  );
};

export { Landing };
