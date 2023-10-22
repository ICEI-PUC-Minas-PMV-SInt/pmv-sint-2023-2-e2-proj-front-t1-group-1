import { useRouter } from "next/router";
import { hideNav } from "@/utils/utils";

import { Navbar } from "@/components/composed/navbar";
import { Footer } from "@/components/composed/footer";

/* TO-DO: mesclar todos os arquivos .css em 1 ou 2 arquivos só */
import "@/styles/bootstrap.css";
import "@/styles/styles.css";
import "@/styles/login.css";
import "@/styles/contato.css";
import "@/styles/quem-somos.css";

export default function App({ Component, pageProps }) {
   const router = useRouter();

   return (
      <>
         {!hideNav.specific.includes(router.pathname) && <Navbar />}
         <Component {...pageProps} />
         {!hideNav.specific.includes(router.pathname) && <Footer />}
      </>
   );
}
