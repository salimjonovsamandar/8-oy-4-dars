import { useRef } from "react";
import styles from "./main.module.css";
import telegram from "./img/telegram.svg";
import instagram from "./img/instagram.svg";
import global from "./img/global.svg";
import github from "./img/github.svg";
import facebook from "./img/facebook.svg";

export default function index() {
  const companyRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const telRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const addresRef = useRef<HTMLInputElement>(null);
  const numRef = useRef<HTMLInputElement>(null);

  function formValidate(
    company: string,
    email: string,
    tel: string,
    country: string,
    city: string,
    address: string,
    num: number
  ) {
    if (!company || !company.trim()) {
      alert("Kompaniya nomini kiriting");
      return false;
    }
    if (!email || !email.trim()) {
      alert("Emailni kiriting");
      return false;
    }
    if (!tel || !tel.trim()) {
      alert("Telefon raqamni kiriting");
      return false;
    }
    if (!country || !country.trim()) {
      alert("Davlatni kiriting");
      return false;
    }
    if (!city || !city.trim()) {
      alert("Shahar nomini kiriting");
      return false;
    }
    if (!address || !address.trim()) {
      alert("Manzilni kiriting");
      return false;
    }
    if (!num) {
      alert("Hodimlar sonini kiriting");
      return false;
    }

    return true;
  }
  function heandleClick() {
    if (
      formValidate(
        companyRef.current?.value || "",
        emailRef.current?.value || "",
        telRef.current?.value || "",
        countryRef.current?.value || "",
        cityRef.current?.value || "",
        addresRef.current?.value || "",
        parseFloat(numRef.current?.value || "")
      )
    ) {
      alert("Malumotlar mavafaqiyatli saqlandi");
    }
  }

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
                ref={companyRef}
                className={styles.name}
                type="text"
                placeholder="Kompaniya nomi"
              />
            </label>
            <label>
              <span>Email *</span>
              <input
                ref={emailRef}
                className={styles.name}
                type="text"
                placeholder="Email"
              />
            </label>
            <label>
              <span>Telefon raqami *</span>
              <input
                ref={telRef}
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
                  ref={countryRef}
                  className={styles.dav}
                  type="text"
                  placeholder="Kompaniya nomi"
                />
              </div>
              <div className="shahar">
                <span>Shahar *</span>
                <input
                  ref={cityRef}
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
                ref={addresRef}
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
          <button onClick={heandleClick} className={styles.oldbtn}>
            Keyingisi
          </button>
        </div>
      </div>
    </div>
  );
}
