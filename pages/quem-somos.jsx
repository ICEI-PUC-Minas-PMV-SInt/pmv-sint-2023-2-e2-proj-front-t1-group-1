import Head from "next/head";
import Image from "next/image";
import TeamMember from "../components/composed/team-member";

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
         <Missao />
         <Valores />
         <Historia />
         <Time />
      </>
   );
};

const Missao = () => {
   return (
      <main class="container-xl row mx-auto text-center text-lg-start">
        <div class="nossa-missao">

            <div class="imagens-missao">
                <Image
                src="/assets/team-goals.gif"
                alt="foto1"
                width={500}
                height={500}/>
            </div>

            <div class="descricao-missao">

                <h1>Nossa Missão</h1>
                <h3>Nosso projeto tem como missão principal oferecer auxílio e suporte às pessoas afetadas por desastres
                    naturais. Acreditamos que em momentos de adversidade, é essencial unir forças para ajudar aqueles
                    que
                    mais precisam.</h3>
            </div>

        </div>
    </main>
   );
};

const Valores = () => {
   return (
      <div class="container-xl row mx-auto text-center text-lg-start">

        <div class="nossos-valores">
            <div class="descricao-valores">
                <h1 class="descricao-tit-valores">Nossos Valores</h1>
                <h3 class="descricao-subtit-valores">Nossos valores são fundamentados na compaixão, solidariedade e
                    comprometimento. Acreditamos na importância de agir com empatia e respeito, reconhecendo a dignidade
                    de
                    cada indivíduo afetado por desastres naturais.</h3>
            </div>

            <div class="imagens-valores">

                <Image
                src="/assets/about-us.gif" alt="foto3"
                width={500}
                height={500}/>

            </div>

        </div>
    </div>
   );
};

const Historia = () => {
   return (
      <div class="container-xl row mx-auto text-center text-lg-start">

        <div class="nossa-historia">

            <h1>Nossa História</h1>
            <h3>Somos um grupo de estudantes universitários que iniciou este projeto em 2023 com o objetivo de facilitar
                o
                processo de doação e ajudar pessoas afetadas por desastres naturais. Queremos ao longo dos anos,
                estabelecer
                parcerias com organizações locais e voluntários, buscando soluções inovadoras para promover a
                recuperação e
                resiliência das comunidades atingidas. <br /> Nossa história é guiada pela solidariedade e pelo
                compromisso de
                fazer a diferença na vida daqueles que enfrentam situações devastadoras. Junte-se a nós nessa causa
                humanitária e seja parte do movimento de auxílio às pessoas afetadas por desastres naturais.
            </h3>
        </div>
    </div>
   );
};


const teamMembers = [
  {
    name: "Jeff J. Rowley",
    role: "Development",
    github: "https://github.com/jeffrowley",
    linkedin: "https://www.linkedin.com/in/jeffrowley",
    imageSrc: "/assets/pessoa1.png",
    imageAlt: "pessoa1",
  },
  
  {
    name: "Helen L. Sanchez",
    role: "Development",
    github: "https://github.com/helensanchez",
    linkedin: "https://www.linkedin.com/in/helensanchez",
    imageSrc: "/assets/pessoa2.png",
    imageAlt: "pessoa2",
  },

  {
    name: "Heather W. Cola",
    role: "Development",
    github: "https://github.com/heathercola",
    linkedin: "https://www.linkedin.com/in/heathercola",
    imageSrc: "/assets/pessoa3.png",
    imageAlt: "pessoa3",
  },
  {
    name: "David D. Liu",
    role: "Development",
    github: "https://github.com/daviddliu",
    linkedin: "https://www.linkedin.com/in/daviddliu",
    imageSrc: "/assets/pessoa4.png",
    imageAlt: "pessoa4",
  },
  {
    name: "Brad C. Butler",
    role: "Development",
    github: "https://github.com/bradbutler",
    linkedin: "https://www.linkedin.com/in/bradbutler",
    imageSrc: "/assets/pessoa5.png",
    imageAlt: "pessoa5",
  },
  {
    name: "Scott I. Brown",
    role: "Development",
    github: "https://github.com/scottbrown",
    linkedin: "https://www.linkedin.com/in/scottbrown",
    imageSrc: "/assets/pessoa6.png",
    imageAlt: "pessoa6",
  },
];

const Time = () => (
  <div className="container-xl row mx-auto text-center text-lg-start content-main">
    <div className="nosso-time">
      <div className="container-time">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
      {/* Rest of your Time component */}
      <div class="barra-vertical"></div>


            <div class="descricao-time">
                <h1>Nosso Time</h1>
                <h3>Unindo forças para ajudar pessoas afetadas por desastres naturais, com comprometimento e paixão.
                    Junte-se a nós nessa jornada solidária. </h3>
            </div>
    </div>
  </div>
);
  


export default Home;
