import styles from "./page.module.css";
import Projects from "./projects";


export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.innerHeader}>
          <div className={styles.navigationContainer} id="navigation">
            <a href="#">
              <span>home</span>
            </a>
            <a href="#about">
              <span>about</span>
            </a>
            <a href="#cv">
              <span>CV</span>
            </a>
            <a href="#portfolio">
              <span>portfolio</span>
            </a>
            <a href="#footer">
              <span>footer</span>
            </a>
          </div>
          <a className={styles.hamburgerMenu} href="#navigation">
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </a>
        </div>
      </header>
      <div className={styles.homePageContainer} id="home">
        <h1>Viktor Karlsson</h1>
        <p>
          Välkommen. Här kan du ta del av vad jag gjort o vad jag gör. Denna hemsida innehåller en
          introduktion om mig, mitt CV/ personliga brev, bilder jag skapat och kontaktuppgifter.
        </p>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <div
            style={{
              width: "40%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "row",
            }}>
            <a
              href="https://viktorkarlsson.netlify.app/images/Viktor_Karlsson_CV.pdf"
              target="_blank">
              <button>CV</button>
            </a>
            <a
              href="https://viktorkarlsson.netlify.app/images/VK_personligt_brev.pdf"
              target="_blank">
              <button>Personligt Brev</button>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.aboutPageContainer} id="about">
        <h1>Litegram om mig</h1>
        <p>
          Jag föredrar att jobba i grupp. Under min utbildning jobbade vi väldigt mycket med
          pair-programming och Test- Driven-Development. Ingen organisation har samma arbetssätt men
          det viktiga jag lärde mig är hur inspirerande det är att planera sin kod med en annan
          programmerare. Jag vill kunna ha dessa samtal med alla utvecklade oavsett avdelning. Av
          den anledningen så vill jag inte begränsa mig till att bara göra det jag är bra på. Jag
          drömmer om att en dag bli en full-stack utvecklare som kan arbeta inom alla områden
          relaterade till programmering. På fritiden tycker jag om att skapa spel och ikoner. Jag
          anser att kreativitet hjälper mig att göra snygga hemsidor där jag har alla rättigheter
          till animationerna. Jag har även en del hobby projekt. Mitt roligaste är att jag försöker
          återskapa Pokemon Red. Jag vill utmana mig själv genom att bygga ett spel utan spelmoror
          som använder LocalStorage som lagringsutrymme.
        </p>
      </div>
      <Projects />
      <footer className={styles.footerPageContainer} id="footer">
        <span className={styles.footerTitle}>Kontakt:</span>
        <div className={styles.footerInfoContainer}>
          <div className={styles.footerCol}>
            <span>phone:</span>
            <span>mail:</span>
          </div>
          <div className={styles.footerCol}>
            <span>0733706733</span>
            <span>viktorkarlsson125@gmail.com</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
