import logo from "./img/logo.svg";
import styles from "./index.module.css";

export default function index() {
  return (
    <div className={styles.window}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} />
        </div>
        <div className={styles.nav}>
          <ul className={styles.ul}>
            <li>
              <a href="#">Vakansiyalar</a>
            </li>
            <li>
              <a href="#">Kandidatlar</a>
            </li>
            <li>
              <a href="#">Kompaniyalar</a>
            </li>
            <li>
              <a href="#">Xizmatlar</a>
            </li>
            <li>
              <a href="#">Ta'lim</a>
            </li>
          </ul>
        </div>
        <div className={styles.language}>
          <div className={styles.select}>
            <select className={styles.select}>
              <option value="O'zb">O'zb</option>
              <option value="Rus">Rus</option>
              <option value="Eng">Eng</option>
            </select>
          </div>
          <button className={styles.button}>Boshlash</button>
        </div>
      </div>
    </div>
  );
}
