import { Button } from "@/components/primitives/button";
import { InputFloat } from "@/components/primitives/input/input";
import { Title } from "@/components/primitives/title/style";

const Contato = () => {
  return (
    <main className="container-xl row row-cols-lg-2 mx-auto align-content-center my-5">
      <section className="order-lg-1">
        <Title marginTop="0">Envie sua mensagem!</Title>

        <form id="contact" className="my-3">
        <InputFloat
            type="text"
            id="nome"
            name="nome"
            placeholder=""
            information="Nome"
          />
        <InputFloat
            type="text"
            id="e-mail"
            name="e-mail"
            placeholder=""
            information="E-mail"
          />
        <InputFloat
            type="text"
            id="celular"
            name="celular"
            placeholder=""
            information="Celular"
          />
        <InputFloat
            type="text"
            id="assunto"
            name="assunto"
            placeholder=""
            information="Assunto"
          />
        

          <div className="form-floating input-float my-1">
            <textarea
              className="form-control"
              placeholder="Sua mensagem aqui...">
            </textarea>

            <label className="label-float" htmlFor="message">
              Mensagem
            </label>
          </div>
        </form>

        {/* Fim do componente */}
        

        <div style={{ marginTop: "2rem" }}>
          <Button
            type="submit"
            customWidth
            className="btn-primary btn-login fw-medium"
            aria-label="Enviar"
          >
            Enviar
          </Button>
        </div>
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
          <iframe
            frameborder="0"
            src="https://www.google.com/maps/embed/v1/place?q=Nettuno,+Roma,+Itália&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default Contato;
