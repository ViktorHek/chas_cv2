import styles from "./page.module.css";

const doodles = [
  {
    img: "https://viktorkarlsson.netlify.app/images/rock.png",
    overlay: "#8035d28a",
    popup: "#705346",
    title: "DVD Loading Screen",
    url: "https://dvd-screen-bice.vercel.app/",
  },
  {
    img: "https://viktorkarlsson.netlify.app/images/scissor.png",
    overlay: "#32398e7a",
    popup: "#bb5aa2",
    title: "Recreation of \nZoom webpage",
    url: "https://chas-website-redesign.vercel.app/",
  },
  {
    img: "https://viktorkarlsson.netlify.app/images/paper.png",
    overlay: "#adce7580",
    popup: "#0108ea",
    title: "To Do Webpage",
    url: "https://todolist-hooks-for-redux-guuqxwld8-viktorhek.vercel.app/",
  },
  {
    img: "https://viktorkarlsson.netlify.app/images/starter.png",
    overlay: "#d74f4d87",
    popup: "#2b0c35",
    title: "Invetation To Event",
    url: "https://chas-invetation.vercel.app/",
  },
];

export default function Projects() {
  return (
    <div className={styles.portfolioPageContainer} id="portfolio">
      <div className={styles.portfolioTextContainer}>
        <h1>Portfolio</h1>
        <p>
          Nedanför har vi en lista över project som jag skapat. De presnteras av mina vänner Cody,
          Bob, Fred & Flower. Dock är dem lite blyga. Du måste interagera med dem för att de ska
          komma fram.
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
              <div>
                <div
                  id={`popup${index + 1}`}
                  className={styles.overlay}
                  style={{ backgroundColor: el.overlay }}>
                  <a
                    href="#portfolio"
                    className={styles.popup}
                    style={{ backgroundColor: el.popup }}>
                    <div className={styles.imgContainer}>
                      <img src={el.img} alt="" className={styles.displayProjectsImg} />
                    </div>
                  </a>
                  <div
                    style={{
                      height: "300px",
                      width: "400px",
                      marginBottom: "150px",
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                    }}>
                    <a
                      href={el.url}
                      style={{
                        zIndex: 2,
                        marginTop: "111px",
                        textDecoration: "none",
                        fontSize: "1.5em",
                        fontWeight: "bolder",
                        color: "black",
                        cursor: "pointer",
                        maxWidth: "60%",
                      }}>
                      {el.title}
                    </a>
                    <img
                      src="speech_bubble.png"
                      alt="bubble"
                      style={{
                        maxHeight: "100%",
                        maxWidth: "100%",
                        position: "absolute",
                        top: 0,
                        left: 0,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
