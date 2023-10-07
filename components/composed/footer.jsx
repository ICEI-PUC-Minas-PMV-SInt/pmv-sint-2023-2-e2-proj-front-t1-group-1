import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
   return (
      <footer className="section bg-footer">
         <div className="container">
            <div className="row">
               <Logo />
               <Categories />
               <Access />
               <Contacts />
            </div>
         </div>
         <Copyright />
      </footer>
   );
};

const Logo = () => {
   return (
      <div className="col-lg-3 logo-footer">
         <Image src="/assets/logo-footer.png" width={200} height={200} alt="Mãos Solidárias" />
      </div>
   );
};

const Categories = () => {
   const categories = [
      {
         name: "Secas",
         href: "/eventos/secas",
      },
      {
         name: "Enchentes",
         href: "/eventos/enchentes",
      },
      {
         name: "Incêndios",
         href: "/eventos/incendios",
      },
      {
         name: "Deslizamentos",
         href: "/eventos/deslizamentos",
      },
   ];

   return (
      <div className="col-lg-3">
         <h6 className="footer-heading text-uppercase">Categorias</h6>
         <ul className="list-unstyled footer-link mt-4">
            {categories.map((category) => (
               <li key={category.name}>
                  <Link href={category.href}>{category.name}</Link>
               </li>
            ))}
         </ul>
      </div>
   );
};

const Access = () => {
   const access = [
      {
         name: "Caadastrar",
         href: "/criar-conta",
      },
      {
         name: "Acessar conta",
         href: "/login",
      },
      {
         name: "Termos e Condições",
         href: "#",
      },
      {
         name: "Política de Privacidade",
         href: "#",
      },
   ];

   return (
      <div className="col-lg-3">
         <h6 className="footer-heading text-uppercase">Acessos</h6>
         <ul className="list-unstyled footer-link mt-4">
            {access.map((acc) => (
               <li key={acc.name}>
                  <Link href={acc.href}>{acc.name}</Link>
               </li>
            ))}
         </ul>
      </div>
   );
};

const Contacts = () => {
   return (
      <div className="col-lg-3">
         <h6 className="footer-heading text-uppercase">Contatos</h6>
         <p className="contact-info mt-4">relacionamento@maossolidarias.org</p>
         <p className="contact-info">(99) 9999-9999</p>
      </div>
   );
};

const Copyright = () => {
   return (
      <div className="text-center mt-5">
         <p className="footer-alt mb-0 f-14">
            2023 © Mãos Solidárias, Todos direitos reservados.
         </p>
      </div>
   );
};
