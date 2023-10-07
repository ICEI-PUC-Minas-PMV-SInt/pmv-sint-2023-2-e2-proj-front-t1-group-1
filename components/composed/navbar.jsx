import Image from "next/image";
import Link from "next/link";
import { Button } from "../primitives/button";

/**
 * Uma array com objetos contendo cada link para o menu.
 */
const menus = [
   {
      name: "Início",
      href: "/",
   },
   {
      name: "Quem somos",
      href: "/quem-somos",
   },
   {
      name: "Eventos",
      href: "/nossos-eventos",
   },
   {
      name: "Notícias",
      href: "/noticias",
   },
   {
      name: "Contatos",
      href: "/contato",
   },
];

export const Navbar = () => {
   return (
      <header>
         <nav className="navbar navbar-expand-md">
            <div className="container-xl">
               <LeftSide />
               <div className="collapse navbar-collapse" id="navbarMenu">
                  <Links links={menus} />
                  <RightSide />
               </div>
            </div>
         </nav>
      </header>
   );
};

const LeftSide = () => {
   return (
      <>
         <Link className="navbar-brand fs-2 fw-bolder" href="/">
            <Image
               src="/logo.png"
               width={200}
               height={77}
               alt="Mãos Solidárias"
            />
         </Link>
         <Button
            className="navbar-toggler custom-color"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
            aria-controls="navbarMenu"
            aria-expanded="false"
            aria-label="Abrir menu"
         >
            <span className="navbar-toggler-icon"></span>
         </Button>
      </>
   );
};

const RightSide = () => {
   return (
      <Link href="/login">
         <Button
            className="btn-primary btn-login fw-medium"
            aria-label="Fazer log-in"
         >
            Entrar
         </Button>
      </Link>
   );
};

const Links = ({ links }) => {
   return (
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-medium">
         {links.map((link) => (
            <li className="nav-item" key={link}>
               <Link className="nav-link" href={link.href}>
                  {link.name}
               </Link>
            </li>
         ))}
      </ul>
   );
};
