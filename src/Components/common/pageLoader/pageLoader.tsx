"use client";
import { memo, useEffect, useState } from "react";
import classes from "./styles.module.css";
import logoLetters from "../../../assets/icons/faviconletters.svg";
import Image from "next/image";
function PageLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => setShow(false), 2000);
  }, []);

  if (!show) return null;

  return (
    <div className={classes.page_loading_overlay}>
      <div className={classes.page_loader}>
        <svg
          className={classes.favicon}
          viewBox="0 0 63 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={classes.logo_tip}
            d="M57.3942 18.4913H47.317L52.3556 9.76471C52.5003 9.51505 52.5003 9.20866 52.3556 8.959L47.5496 0.635274C47.405 0.385619 47.1411 0.232422 46.8517 0.232422H37.2398C36.9533 0.232422 36.6866 0.385619 36.5419 0.635274L31.5061 9.35902H31.5005L26.4647 0.635274C26.32 0.385619 26.0562 0.232422 25.7668 0.232422H16.1549C15.8683 0.232422 15.6016 0.385619 15.457 0.635274L10.651 8.959C10.5063 9.20866 10.5063 9.51505 10.651 9.76471L15.6896 18.4913H5.61239C5.32585 18.4913 5.05917 18.6445 4.91448 18.8941L0.108517 27.2179C-0.0361724 27.4675 -0.0361724 27.7739 0.108517 28.0236L4.91448 36.3473C5.05917 36.5969 5.32302 36.7502 5.61239 36.7502H15.2243C15.5109 36.7502 15.7775 36.5969 15.9222 36.3473L20.9608 27.6207L25.9994 36.3473C26.1441 36.5969 26.408 36.7502 26.6973 36.7502H36.3093C36.5958 36.7502 36.8625 36.5969 37.0072 36.3473L42.0458 27.6207L47.0844 36.3473C47.2291 36.5969 47.4929 36.7502 47.7823 36.7502H57.3942C57.6808 36.7502 57.9474 36.5969 58.0921 36.3473L62.8981 28.0236C63.0428 27.7739 63.0428 27.4675 62.8981 27.2179L58.0921 18.8941C57.9474 18.6445 57.6808 18.4913 57.3942 18.4913Z"
          />
        </svg>
        <div className={classes.letter_wrapper}>
          <Image
            src={logoLetters}
            alt="letters"
            className={classes.favicon_letters}
          />
        </div>
      </div>
    </div>
  );
}

export const PageLoadingAnimation = memo(PageLoader);
