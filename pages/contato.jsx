import { Button } from "@/components/primitives/button";

const Contato = () => {
    return (
        <main className="container-xl row row-cols-lg-2 mx-auto align-content-center my-5">
        <section className="order-lg-1">
          <h1 style={{fontSize: '2.5rem'}}>Envie sua mensagem</h1>
          <form id="contact" className="input-group">
            <div>
              <label>Nome</label>
              <input type="text" className="form-control" placeholder="Seu nome" />
            </div>
            <div>
              <label>E-mail</label>
              <input type="text" className="form-control" placeholder="seu-email@email.com" />
            </div>
            <div>
              <label>Celular</label>
              <input type="text" className="form-control" placeholder="(99) 99999-9999" />
            </div>
            <div>
              <label>Assunto</label>
              <input type="text" className="form-control" placeholder="Ex: Ser doador" />
            </div>
            <div>
              <label>Mensagem</label>
              <textarea className="form-control" placeholder="Sua mensagem aqui..."></textarea>
            </div>
      
            <div style={{marginTop: "2rem"}}>
            <Button
            type="submit"
            customWidth
            className="btn-primary btn-login fw-medium"
            aria-label="Enviar">
                Enviar
            </Button>
            </div>
          </form>
        </section>
        <section className="order-lg-0">
          <div>
            <div className="fw-bold">Endereço</div>
            <p>Rua Alabama, 715, Netuno</p>
          </div>
          <div>
            <div className="fw-bold">Telefone</div>
            <p>(99) 9999-9999</p>
          </div>
          <div>
            <div className="fw-bold">E-mail</div>
            <p>relacionamento@maossolidarias.org</p>
          </div>
          <div>
            <iframe frameborder="0"
              src="https://www.google.com/maps/embed/v1/place?q=Nettuno,+Roma,+Itália&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
          </div>
        </section>
      </main>
    )
 };
 
 export default Contato;