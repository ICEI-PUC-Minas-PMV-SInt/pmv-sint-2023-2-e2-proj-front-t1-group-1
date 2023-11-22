import Image from "next/image";

const Example = () => {
   return (
      <main className="container-xl row mx-auto content-main mt-4 row">
         <Description />
         <Stats />
      </main>
   );
};

const Description = () => {
   return (
      <div className="col-lg-7">
         <Image
            src="/assets/incendio_01.jpg"
            width={727}
            height={349}
            alt="Evento alt tag que vai mudar depois lalalala"
            className="rounded-3 d-block mb-3"
         />
         <span className="d-inline-block py-1 px-2 bg-secondary-subtle rounded-2">
            Enchentes
         </span>
         <span className="d-inline-block px-4 text-end">
            Publicado em 12/04/2023
         </span>
         <h1 className="my-4">Fusce placerat purus vitae commodo</h1>
         <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
            quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
         </p>
      </div>
   );
};

const Stats = () => {
   const stats = [
      {
         icon: "/assets/icon-estatisticas-dinheiro.svg",
         title: "Dinheiro",
         value: "R$ 70K",
      },
      {
         icon: "/assets/icon-estatisticas-alimentos.svg",
         title: "Alimentos",
         value: "7.000",
      },
      {
         icon: "/assets/icon-estatisticas-roupas.svg",
         title: "Roupas",
         value: "600",
      },
      {
         icon: "/assets/icon-estatisticas-medicamentos.svg",
         title: "Medicamentos",
         value: "1200",
      },
      {
         icon: "/assets/icon-estatisticas-construcoes.svg",
         title: "Construções",
         value: "125",
      },
   ];

   return (
      <div
         className="col-lg-5 bg-secondary-subtle rounded-2 py-4 position-sticky"
         style={{ height: "fit-content", top: "1rem" }}
      >
         <h2 className="px-2 mb-4">Arrecadados</h2>
         <div className="row row-cols-md-2 gap-4 mb-4">
            {stats.map((stat) => (
               <div
                  key={stat.title}
                  className="row row-cols-2 align-items-center"
               >
                  <Image
                     src={stat.icon}
                     alt={stat.title}
                     width={30}
                     height={30}
                     className="d-block"
                  />
                  <div>
                     <div className="h2 mb-0 fs-5">{stat.value}</div>
                     <span className="fs-6 fw-medium">{stat.title}</span>
                  </div>
               </div>
            ))}
         </div>
         <div className="row px-4 align-items-center">
            <a href="#" className="btn btn-primary col-10">
               Doar teste
            </a>
            <button className="btn col-2">
               <Image
                  src="/assets/icon-evento-favoritar.svg"
                  alt="Favoritar evento"
                  width={30}
                  height={30}
               />
            </button>
         </div>
      </div>
   );
};

export default Example;
