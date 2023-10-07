const Example2 = () => {
   return (
      <div className="text-center">
         <p>
            Exemplo de uma página dentro do <code>/example</code>
         </p>
         <p style={{ maxWidth: 750, margin: "auto" }}>
            Acho que também é possível adicionar apenas a pasta com um nome
            (tipo <code>example</code>), e dentro dela um arquivo{" "}
            <code>index.jsx</code>, daí este toma o nome da pasta. Mas não
            cheguei a testar isso ainda
         </p>
      </div>
   );
};

export default Example2;
