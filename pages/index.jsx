import Head from "next/head";
import { Button } from "@/components/primitives/button";
import Image from "next/image";
import Link from "next/link";
import { EventCard } from "@/components/composed/event-card";
import { NewsCard } from "@/components/composed/news-card";
import { Title } from "@/components/primitives/title";
import { DescriptionTitle } from "@/components/primitives/description-title";
import { useEffect, useState } from "react";


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
            <link rel="icon" href="/maos.ico" />
         </Head>
         <Main />
         <Partners />
         <Stats />
         <Events />
         <News />
      </>
   );
};

const Main = () => {
   return (
      <main className="container-fluid row container-home my-0 mb-5">
         <div className="my-auto col-12 col-lg-6 sm-mt-3">
            <Title sizeFont={'3rem'} ti>
               Desastres naturais não escolhem suas vítimas.
            </Title>
            <p className="description-main">
               Todos nós podemos ser afetados, ajude-nos a oferecer suporte às
               pessoas que precisam.
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start">
               <Button href="#" className="btn btn-primary btn-main">
                  Doar agora
               </Button>
            </div>
         </div>
         <div className="col-lg-6 text-center">
            <Image
               src="/assets/capa.svg"
               alt="Desastres naturais"
               id="solidarity"
               width={550} 
               height={550} 
               // layout="responsive"  
            />
         </div>
      </main>
   );
};

const Stats = () => {

   const [values, setValues] = useState({});

   const stats = [
      {
         icon: "/assets/comida.svg",
         size: '80px', 
         title: "Alimentos",
         value: "2000",
      },
      {
         icon: "/assets/roupa.svg",
         title: "Roupas",
         size: '80px', 
         value: "6000",
      },
      {
         icon: "/assets/medicamento.svg",
         title: "Medicamentos",
         size: '80px', 
         value: "3697",
      },
      {
         icon: "/assets/chapeu.svg",
         title: "Construções",
         size: '80px', 
         value: "895",
      },
   ];

   useEffect(() => {
      const updateValues = () => {
         setValues((prevValues) => {
           const updatedValues = {};
           stats.forEach((stat) => {
             const currentValue = prevValues[stat.title.toLowerCase()] || 0;
             const increment = 15; 
             const newValue = Math.min(currentValue + increment, parseInt(stat.value, 10));
             updatedValues[stat.title.toLowerCase()] = Math.round(newValue); 
           });
           return updatedValues;
         });
       };
   
       const intervalId = setInterval(updateValues, 100); 
   
       return () => clearInterval(intervalId);
    }, [stats]);

   return (
      <section id="stats" className="container-fluid">
        
         <div className="row">
           
            <div className="col-md-6 my-auto">
            <DescriptionTitle description="Mãos solidárias" />
       
            <Title weightFont={600} sizeFont={'2rem'} marginTop={'0'}>
               Um pouco sobre as arrecadações
            </Title>
            <p>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tenetur corporis harum distinctio, nisi commodi incidunt perspiciatis vel, possimus voluptate reprehenderit ab perferendis obcaecati assumenda, animi magnam aliquam pariatur. Odit!
               Accusamus veniam, nesciunt illum, laudantium impedit molestiae debitis optio architecto eligendi nulla, earum assumenda tenetur! Iure incidunt sequi alias itaque, aut aliquam doloremque ducimus molestias, impedit error perspiciatis at iusto?</p>
           
            </div>
            <div className="col-md-6 d-flex flex-wrap row-gap-5">
               
            {stats.map((stat) => (
        <div key={stat.title} className="col-6 ">
          <div className="card-collection d-flex flex-column align-items-center ">
            <img src={stat.icon} alt={stat.title} height={stat.size} />
            <h3 className="title-collection">{stat.title}</h3>
            <p className="value-collection">+{values[stat.title.toLowerCase()] || 0}</p>
          </div>
        </div>
      ))}
           
            </div>
         </div>
        
         {/* <div className="container-xl mx-auto row row-cols-auto justify-content-start justify-content-sm-around row-gap-3">
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
         </div> */}
      </section>
   );
};

const Events = () => {
   const events = [
      {
         title: "Incêndio em Poços de Caldas",
         description: "Contibua com o que puder para sanar os danos",
         img: "incendio_01.jpg",
         goal: 200   ,  
         donated: 200,
      },
      {
         title: "Incêndio na Comunidade",
         description: "Faça uma doação agora e ajude as comunidades afetadas",
         img: "incendio_02.jpg",
         goal: 200   ,
         donated: 20,
      },
      {
         title: "Ajude o Cerrado",
         description: "Faça uma doação agora e ajude as comunidades afetadas",
         img: "incendio_03.jpg",
         goal: 200   ,
         donated: 20,
      },
      {
         title: "Apoie a Natureza",
         description: "Faça uma doação agora e ajude as comunidades afetadas",
         img: "incendio_04.jpg",
         goal: 200   ,
         donated: 20,
      },
      {
         title: "Ajude vítimas na Bahia",
         description: "Faça uma doação agora e ajude as comunidades afetadas",
         img: "incendio_05.jpeg",
         goal: 200   ,
         donated: 20,
      },
      {
         title: "Não abandone SP",
         description: "Faça uma doação agora e ajude as comunidades afetadas",
         img: "incendio_06.png",
         goal: 200   ,
         donated: 20,
      },
      {
         title: "#ContraQueimadas",
         description: "Faça uma doação agora e ajude as comunidades afetadas",
         img: "incendio_07.jpg",
         goal: 200   ,
         donated: 20,
      },
      {
         title: "Ajude o Pará",
         description: "Faça uma doação agora e ajude as comunidades afetadas",
         img: "incendio_08.jpg",
         goal: 100   ,
         donated: 50,
      },
   ];

   return (
      <section id="events" className="container-fluid mx-auto my-4">
        
         <Title weightFont={600} sizeFont={'2rem'} marginTop={'0'}>
               Eventos
            </Title>
         <div className="row row-cols-auto gap-4 justify-content-around my-3 px-0">
            {events.map((event) => (
               <EventCard
                  key={event.title}
                  title={event.title}
                  description={event.description}
                  img={event.img}
                  alt={event.title}
                  goal={event.goal}
                  donated={event.donated}
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
         <Title weightFont={600} sizeFont={'2rem'} marginTop={'0'}>
         Últimas notícias
            </Title>
         <div className="d-flex flex-wrap gap-3">
            {news.map((news) => (
               <NewsCard
               className='px-0'
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
            <a href="#" className="btn btn-primary fw-700" id="ver-mais">
               Mais notícias
            </a>
         </div>
      </section>
   );
};

const Partners = () => {
   return (
      <section
         id="partners"
         className="container-fluid py-2 mb-5"
      >


         {[...Array(5)].map((_, v) => (
      <div key={v} className="d-block part">
        <Image
          src={`/assets/parceiro${v + 1}.svg`}
          alt={`Parceiro ${v + 1}`}
          width={150}
          height={40}
          className="part1"

        />
        <Image
          src={`/assets/part${v + 1}.svg`}
          alt={`Parceiro ${v + 1}`}
          width={150}
          height={40}
          className="part2"

        />
      </div>
    ))}
  
      </section>
   );
};

export default Home;
