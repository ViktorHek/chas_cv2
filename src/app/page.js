import styles from "./page.module.css";

const doodles = [
  {
    img: "https://viktorkarlsson.netlify.app/images/rock.png",
    overlay: "#8035d28a",
    popup: "#705346",
  },
  {
    img: "https://viktorkarlsson.netlify.app/images/scissor.png",
    overlay: "#32398e7a",
    popup: "#bb5aa2",
  },
  {
    img: "https://viktorkarlsson.netlify.app/images/paper.png",
    overlay: "#adce7580",
    popup: "#0108ea",
  },
  {
    img: "https://viktorkarlsson.netlify.app/images/starter.png",
    overlay: "#d74f4d87",
    popup: "#2b0c35",
  },
];

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
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </a>
        </div>
      </header>
      <div className={styles.homePageContainer} id="home">
        <h1>Viktor Karlsson</h1>
        <p>
          Välkommen. Här kan du ta del av vad jag gjort o vad jag gör. Denna hemsida innehåller en
          introduktion om mig, mitt CV/ personliga brev, bilder jag skapat och kontaktuppgifter
        </p>
      </div>
      <div className={styles.aboutPageContainer} id="about">
        <h1>Litegram om mig</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corporis eum dolorem
          dignissimos nostrum. Doloribus blanditiis molestias, possimus, voluptatum nostrum at
          architecto culpa numquam, explicabo unde atque velit voluptate eos reprehenderit!
          Molestiae vitae, dignissimos est voluptatem illo culpa hic a? Eius natus, vero culpa
          tenetur quibusdam similique cupiditate minima velit dolore magni molestias facilis
          doloremque id corrupti delectus adipisci beatae exercitationem. Placeat nesciunt quidem
          earum in omnis. Eos temporibus distinctio asperiores in ipsa? Quidem asperiores enim
          eaque? Iste, magnam voluptatibus veniam doloribus sint reiciendis mollitia delectus, et
          fuga illum earum amet eligendi ratione! Sit, tempora voluptates incidunt quia voluptas
          esse?
        </p>
      </div>
      <div className={styles.cvPageContainer} id="cv">
        <h2>Utbildningar och tidigare arbetslivserfarenheter</h2>
        <div className={styles.cvContentContainer}>
          <span>
            <h3>Utbildningar</h3>
            <div id="listOfEducation" className={styles.listOfEducation}></div>
          </span>
          <span>
            <h3>Arbetslivserfarenheter</h3>
            <div id="listOfWork" className={styles.listOfWork}></div>
          </span>
        </div>
      </div>
      <div className={styles.portfolioPageContainer} id="portfolio">
        <div className={styles.portfolioTextContainer}>
          <h1>Portfolio</h1>
          <p>
            Mina bilder är blyga. Du måste interagera med dem för att de ska komma fram. Eller så
            kan du spela{" "}
            <a href="https://github.com/ViktorHek/workShop_6_minesweper">Mine Sweeper</a>
          </p>
        </div>
        <div className={styles.imagesContainer}>
          {doodles.map((el, index) => {
            return (
              <div style={{ width: "120px" }}>
                <div className={styles.buttonContainer}>
                  <a className={styles.button} href={`#popup${index + 1}`}>
                    <img src={el.img} alt="" className={styles.projectsImg} />
                  </a>
                </div>
                <a href="#portfolio">
                  <div
                    id={`popup${index + 1}`}
                    className={styles.overlay}
                    style={{ backgroundColor: el.overlay }}>
                    <div className={styles.popup} style={{ backgroundColor: el.popup }}>
                      <div className={styles.imgContainer}>
                        <img src={el.img} alt="" className={styles.displayProjectsImg} />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
        <iframe src="https://dvd-screen-bice.vercel.app/" title="DVD Screen"></iframe>
      </div>
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
