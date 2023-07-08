import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "./Header/Header";
import FooterII from "./FooterII/FooterII";
import { useGlobalContext } from "../context/context";
// import Nav from "./Nav";

const Layout = ({ children }) => {
  const { isNav, setIsNav } = useGlobalContext();
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  // console.log(windowWidth);

  useEffect(() => {
    if (windowWidth >= 1024) setIsNav(false);
  });

  return (
    <>
      <Head>
        <title>mcdonalds</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {!isNav && <main className="">{children}</main>}
      <FooterII />
    </>
  );
};

export default Layout;
