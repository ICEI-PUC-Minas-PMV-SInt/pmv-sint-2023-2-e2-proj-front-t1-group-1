import { EventCard } from "@/components/composed/event-card";

const Events = () => {
   const EventCategories = [
      "Alagamentos",
      "Deslizamentos",
      "Enchentes",
      "Incêndios",
      "Secas",
      "Outros",
   ];

   return (
      <main className="container-xl row mx-auto text-center text-lg-start content-main">
         <h1 className="text-center my-4 fw-bold">Nossos eventos</h1>
         <p className="fs-4 text-center mb-4">
            Aliquam auctor enim vel neque bibendum, a laoreet elit hendrerit.
            Integer magna risus, maximus ut tempus ut, efficitur quis neque.
            Donec.
         </p>
         <div className="d-flex justify-content-around">
            {EventCategories.map((category) => (
               <Categories key={category}>{category}</Categories>
            ))}
         </div>
         <Cards />
      </main>
   );
};

const Categories = ({ children }) => {
   return (
      <a href="#" className="event-category">
         <div />
         <span>{children}</span>
      </a>
   );
};

const Cards = () => {
   const events = [
      {
         title: "Incêndio em Poços de Caldas",
         description: "Contibua com o que puder para sanar os danos",
         img: "incendio_01.jpg",
         goal: 100,
         donated: 50,
      },
      {
         title: "Incêndio na Comunidade",
         description: "Faça uma doação agora e ajude as comunidades afetadas",
         img: "incendio_02.jpg",
         goal: 100,
         donated: 50,
      },
      {
         title: "Ajude o Cerrado",
         description: "Faça uma doação agora e ajude as comunidades afetadas",
         img: "incendio_03.jpg",
         goal: 100,
         donated: 50,
      },
      {
         title: "Apoie a Natureza",
         description: "Faça uma doação agora e ajude as comunidades afetadas",
         img: "incendio_04.jpg",
         goal: 100,
         donated: 50,
      },
      {
         title: "Ajude vítimas na Bahia",
         description: "Faça uma doação agora e ajude as comunidades afetadas",
         img: "incendio_05.jpeg",
         goal: 100,
         donated: 50,
      },
      {
         title: "Não abandone SP",
         description: "Faça uma doação agora e ajude as comunidades afetadas",
         img: "incendio_06.png",
         goal: 100,
         donated: 50,
      },
      {
         title: "#ContraQueimadas",
         description: "Faça uma doação agora e ajude as comunidades afetadas",
         img: "incendio_07.jpg",
         goal: 100,
         donated: 50,
         
      },
      {
         title: "Ajude o Pará",
         description: "Faça uma doação agora e ajude as comunidades afetadas",
         img: "incendio_08.jpg",
         goal: 100,
         donated: 50,
         
      },
   ];

   return (
      <section id="events" className="container-xl mx-auto my-4">
         <div className="row row-cols-auto gap-4 justify-content-evenly my-5">
            {events.map((event) => (
               <EventCard
                  key={event.title}
                  title={event.title}
                  description={event.description}
                  img={event.img}
                  alt={event.title}
                  href="/evento/evento-exemplo"
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

export default Events;
