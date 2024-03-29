import styles from "./main.module.css";
import telegram from "./img/telegram.svg";
import instagram from "./img/instagram.svg";
import global from "./img/global.svg";
import github from "./img/github.svg";
import facebook from "./img/facebook.svg";

export default function index() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3>Kompaniya ma'lumotlari</h3>
          <p>Kompaniya haqidagi ma'lumotlarni kiriting</p>
        </div>
        <form className={styles.form}>
          <div className={styles.img}>
            <div className={styles.sicl}></div>
            <button className={styles.yuklash}>Yuklash</button>
          </div>
          <div className={styles.forma}>
            <label>
              <span>Kompaniya nomi *</span>
              <input
                className={styles.name}
                type="text"
                placeholder="Kompaniya nomi"
              />
            </label>
            <label>
              <span>Email *</span>
              <input className={styles.name} type="text" placeholder="Email" />
            </label>
            <label>
              <span>Telefon raqami *</span>
              <input
                className={styles.name}
                type="number"
                placeholder="Namuna: 901234567"
              />
            </label>
            <div className={styles.links}>
              <label>
                <span>Linklar *</span>
                <ul>
                  <li>
                    <img src={global} />
                  </li>
                  <li>
                    <img src={instagram} />
                  </li>
                  <li>
                    <img src={telegram} />
                  </li>
                  <li>
                    <img src={facebook} />
                  </li>
                  <li>
                    <img src={github} />
                  </li>
                </ul>
              </label>
            </div>
            <label className={styles.region}>
              <div className="davlat">
                <span>Davlat *</span>
                <input
                  className={styles.dav}
                  type="text"
                  placeholder="Kompaniya nomi"
                />
              </div>
              <div className="shahar">
                <span>Shahar *</span>
                <input
                  className={styles.dav}
                  type="text"
                  placeholder="Kompaniya nomi"
                />
              </div>
            </label>
            <label>
              <span>Yashash joyi *</span>
              <input className={styles.name} type="text" placeholder="Joy" />
            </label>
            <label>
              <span>Hodimlar soni *</span>
              <input
                className={styles.name}
                type="number"
                placeholder="Hodimlar soni"
              />
            </label>
            <label>
              <span>Izoh *</span>
              <textarea
                className={styles.desc}
                placeholder="Kompaniya haqida izoh qoldiring"
              ></textarea>
            </label>
          </div>
        </form>
        <div className={styles.footer}>
          <button className={styles.orqabtn}>Ortga</button>
          <button className={styles.oldbtn}>Keyingisi</button>
        </div>
      </div>
    </div>
  );
}
