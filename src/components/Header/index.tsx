import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";
import Link from "next/link";
import { HiOutlineSun, HiSun } from "react-icons/hi";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { useTheme } from "../../contexts/ThemeContext";

import styles from "./styles.module.scss";

export function Header() {
  const { isDarkMode, changeTheme } = useTheme();

  const currentDate = format(new Date(), "EEEEEE, d, MMM", {
    locale: ptBR,
  });

  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <a>
          <img src="/logo.svg" alt="Podcastr" />
        </a>
      </Link>

      <p>O melhor para você ouvir, sempre</p>

      <div>
        <div className={styles.buttonsTheme}>
          <button type="button" onClick={() => changeTheme()}>
            {!isDarkMode ? (
              <HiSun size={25} />
            ) : (
              <HiOutlineSun size={25} color={"white"} />
            )}
          </button>
          <button type="button" onClick={() => changeTheme()}>
            {isDarkMode ? (
              <IoMoon size={25} color={"white"} />
            ) : (
              <IoMoonOutline size={25} />
            )}
          </button>
        </div>

        <span>{currentDate}</span>
      </div>
    </header>
  );
}
