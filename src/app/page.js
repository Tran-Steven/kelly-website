import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      {/* <div className={styles.resumeIcon}>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-1 1h-16v20h16v-20zm-2 16h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z" />
        </svg>
      </div> */}
      <h1>
        <div className={styles.htext} id="fn">
          Kelly
        </div>
        <div className={styles.htext} id="ln">
          Tran
        </div>
      </h1>
      <div className={styles.about}>
        <h2 className={styles.aboutintro}>
          Hi there! I&apos;m Kelly, a passionate Economics Graduate from the
          University of Georgia.{" "}
        </h2>
        <p>
          I love to work with <b>R</b>, <b>Excel</b>, <b>MySQL</b>, and
          everything that revolves around these technologies, especially Data
          Analysis and Statistics.{" "}
        </p>
        <p>
          <br />I enjoy learning new things in my spare time, but when I&apos;m
          not online... I love trying new food and spending time with my two
          cats!
        </p>
        <p>
          <br />
          <div className={styles.minih}>Relevant Coursework</div>
          Intermediate Microeconomics <br></br>Applied Stat. and Data Analysis
          <br></br> Intro. to Information Systems
        </p>
        <p>
          <br />
          <div className={styles.minih}>Skills</div>
          Microsoft Office, GSuite, R & RStudio, Statistical Modeling,
          Conversational Vietnamese.
        </p>
        <br />
        <p>
          Find me on{" "}
          <a href="https://www.linkedin.com/in/kellyptran/" target="_blank">
            LinkedIn.
          </a>
        </p>
      </div>

      {/* <div className={styles.down}>
        <button className={styles.downButton}>v</button>
      </div> */}
    </main>
  );
}
