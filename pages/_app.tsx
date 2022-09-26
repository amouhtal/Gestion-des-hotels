import "../styles/globals.css";
import type { AppProps } from "next/app";
import Rightbar from "../component/rightbar/rightbar";
import Navbar from "../component/navbar/navbar";
import theme from "../component/theme";
import { ThemeProvider } from "@mui/material/styles";
import styles from "../styles/conatiner.module.css";
import PrimarySearchAp from "../component/navbar/navbar";
import React, { useState } from "react";
import {ThemeContextProvider} from '../contexts/BarContext';

function MyApp({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false);
  return (
      <div className={`debug ${styles.conatiner}`}>
        <ThemeContextProvider>
          <Rightbar />
            <div className={styles.rightSide}>
              <PrimarySearchAp />
              <Component {...pageProps} />
            </div>
        </ThemeContextProvider>
      </div>
  );
}

export default MyApp;
