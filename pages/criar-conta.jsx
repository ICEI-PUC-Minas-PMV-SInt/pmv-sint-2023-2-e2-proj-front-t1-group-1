import React from 'react';
import Link from "next/link";
import { Button } from '@/components/primitives/button';
import Image from 'next/image';

const Login = () => {
    return (
        <div className="container-fluid" id="container-main">
    <div className="row">
      <div className="col-lg-5 col-sm-12 create">
      <Link href="/">
            <Image
               src="/assets/maos.png"
               width={56}
               height={56}
               alt="Mãos Solidárias"
            />
         </Link>
        <h1 className="title">Crie sua conta!</h1>
        <p>Cadastre-se com uma rede:</p>
        <div className="box-social-media">
          <div className="button-media">
          <Image
               src="/assets/gmail.png"
               width={20}
               height={20}
               alt="logo gmail"
            />
            <p>Google</p>
          </div>
          <div className="button-media">
          <Image
               src="/assets/facebook.png"
               width={20}
               height={20}
               alt="logo facebook"
            />
            <p>Facebook</p>
          </div>
        </div>
        <p>ou cadastre-se com um email:</p>
        <div className="form-floating input-float my-3">
          <input type="text" className="form-control" id="inputCPF" placeholder="Seu E-mail" />
          <label className="label-float" for="inputCPF">E-mail</label>

        </div>
        <div className="form-floating input-float">
          <input type="password" className="form-control" id="password" placeholder="Senha" />
          <label className="label-float" for="password">Senha</label>
        </div>
        <div className="remember-me">
          <div className="form-check form-check-inline checkbox-payment">
            <input className="form-check-input" type="checkbox" id="check-payment" value="option1" />
            <label className="form-check-label" for="check-payment">Receber nossas atualizações</label>
          </div>
        </div>
        <Link href="/Login">
         <Button
         customWidth
            className="btn-primary btn-login fw-medium"
            aria-label="Fazer log-in"
         >
            Entrar
         </Button>
      </Link>
    
        <p className="account">
          Já tem uma conta? <a style={{ textDecoration: 'none' }} href="criar-conta.html">  <Link href="/login" className='link'><span>Entrar na minha conta</span> </Link></a>
        </p>
     
      
      </div>

      <div className="col-lg-7 col-sm-12 bg-success box-image">
        <h2>Juntos, transformamos</h2>
        <h2>dor em esperança!</h2>
        <p>Acesse sua conta agora para acompanhar suas doações!</p>
      </div>
    </div>
  </div>
    )
 };
 
 export default Login;
 