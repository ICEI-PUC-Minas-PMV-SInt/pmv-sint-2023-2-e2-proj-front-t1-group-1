import Head from "next/head";
import { Button } from "@/components/primitives/button";
import Image from "next/image";
import Link from "next/link";
import { EventCard } from "@/components/composed/event-card";
import { NewsCard } from "@/components/composed/news-card";

const Home = () => {
   return (
      <>
         <Head>
            <title>Mãos Solidárias</title>
            <meta name="description" content="PUC Minas" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Main />
         <Stats />
         <Events />
         <News />
         <Partners />
      </>
   );
};

const Main = () => {
   return (
      <main className="container-xl row mx-auto text-center text-lg-start content-main">
         <div className="my-auto col-12 col-lg-6 sm-mt-3">
            <h1 className="title-main">
               Desastres naturais não escolhem suas vítimas!
            </h1>
            <p className="description-main">
               Todos nós podemos ser afetados, ajude-nos a oferecer suporte às
               pessoas que precisam.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
               <Button href="#" className="btn btn-primary btn-main">
                  Doar agora
               </Button>
            </div>
         </div>
         <div className="col-lg-6">
            <Image
               src="/assets/imagem-capa.gif"
               alt="Desastres naturais"
               id="solidarity"
               className="mx-auto"
               width={500}
               height={500}
            />
         </div>
      </main>
   );
};

const Stats = () => {
   const stats = [
      {
         icon: "/assets/icon-estatisticas-alimentos.svg",
         title: "Alimentos",
         value: "+200.000",
      },
      {
         icon: "/assets/icon-estatisticas-roupas.svg",
         title: "Roupas",
         value: "6000",
      },
      {
         icon: "/assets/icon-estatisticas-medicamentos.svg",
         title: "Medicamentos",
         value: "3697",
      },
      {
         icon: "/assets/icon-estatisticas-construcoes.svg",
         title: "Construções",
         value: "895",
      },
   ];

   return (
      <section id="stats" className="container-fluid bg-secondary-subtle py-4">
         <div className="container-xl mx-auto row row-cols-auto justify-content-start justify-content-sm-around row-gap-3">
            {stats.map((stat) => (
               <div
                  key={stat.title}
                  className="row row-cols-auto align-items-center"
               >
                  <Image
                     src={stat.icon}
                     alt={stat.title}
                     width={50}
                     height={50}
                     className="d-block"
                  />
                  <div>
                     <div className="h2 mb-0 fs-5">{stat.value}</div>
                     <span className="fs-6 fw-medium">{stat.title}</span>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
};

const Events = () => {
   const events = [
      {
         title: "Incêndio em Poços de Caldas",
         description: "Contibua com o que puder para sanar os danos",
         img: "incendio_01.jpg",
      },
      {
         title: "Incêndio na Comunidade",
         description: "Faça uma doação agora e ajude as comunidades afetadas",
         img: "incendio_02.jpg",
      },
      {
         title: "Ajude o Cerrado",
         description: "Faça uma doação agora e ajude as comunidades afetadas",
         img: "incendio_03.jpg",
      },
      {
         title: "Apoie a Natureza",
         description: "Faça uma doação agora e ajude as comunidades afetadas",
         img: "incendio_04.jpg",
      },
      {
         title: "Ajude vítimas na Bahia",
         description: "Faça uma doação agora e ajude as comunidades afetadas",
         img: "incendio_05.jpeg",
      },
      {
         title: "Não abandone SP",
         description: "Faça uma doação agora e ajude as comunidades afetadas",
         img: "incendio_06.png",
      },
      {
         title: "#ContraQueimadas",
         description: "Faça uma doação agora e ajude as comunidades afetadas",
         img: "incendio_07.jpg",
      },
      {
         title: "Ajude o Pará",
         description: "Faça uma doação agora e ajude as comunidades afetadas",
         img: "incendio_08.jpg",
      },
   ];

   return (
      <section id="events" className="container-xl mx-auto my-4">
         <h2 className="text-center mb-4">Eventos</h2>
         <div className="row row-cols-auto gap-4 justify-content-evenly my-5">
            {events.map((event) => (
               <EventCard
                  key={event.title}
                  title={event.title}
                  description={event.description}
                  img={event.img}
                  alt={event.title}
               >
                  {event.description}
               </EventCard>
            ))}
         </div>
      </section>
   );
};

const News = () => {
   const news = [
      {
         title: "Enchentes em São Paulo",
         date: "12/04/2023",
         img: "enchente_01.jpg",
         href: "/noticias",
      },
      {
         title: "Seca no Nordeste",
         date: "11/04/2023",
         img: "seca_01.jpg",
         href: "/noticias-2",
      },
      {
         title: "Enchentes e deslizamentos no Sudeste",
         date: "09/05/2023",
         img: "enchente_02.jpg",
         href: "/noticias-3",
      },
   ];

   return (
      <section id="news" className="container-xl mx-auto mb-4">
         <h2 className="text-center mb-4">Últimas notícias</h2>
         <div className="d-flex flex-wrap gap-4">
            {news.map((news) => (
               <NewsCard
                  key={news.title}
                  title={news.title}
                  date={news.date}
                  img={news.img}
                  alt={news.title}
                  href={news.href}
               >
                  {news.description}
               </NewsCard>
            ))}
         </div>
         <div className="text-center mt-4">
            <a href="#" className="btn btn-primary fs-5 fw-600" id="ver-mais">
               Ver mais {"->"}
            </a>
         </div>
      </section>
   );
};

const Partners = () => {
   return (
      <section
         id="partners"
         className="container-fluid bg-secondary-subtle py-4 mb-4"
      >
         <h2 className="text-center mb-4">Parceiros</h2>
         <div className="container-xl mx-auto row row-cols-auto justify-content-between justify-content-sm-around row-gap-3 fw-bold fs-5">
            {[...Array(5)].map((k, v) => (
               <Image
                  key={v}
                  src={`/assets/parceiro${v + 1}.png`}
                  alt="Parceiro"
                  width={200}
                  height={20}
                  className="d-block"
               />
            ))}
         </div>
      </section>
   );
};

export default Home;