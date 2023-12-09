import { React } from "react-dom";
import styles from "../assets/css/register.module.css";

function FormRegister() {
  const handleRedirectToPage = () => {
    window.location.href = './';
  }

  return (
    <>
      <form action="/" method="post">
        <h1>Criar uma conta</h1>
        <p id="descricao">
          Bem-vindo ao Libraries & Dragons! Preencha o formulário abaixo para
          criar a sua conta grátis.
        </p>
        <hr />
        <div className={styles.container}>
          <div>
            <label htmlFor="primeiro-nome">Primeiro Nome</label>
            <input
              id="primeiro-nome"
              type="text"
              placeholder="Nome"
              name="nome"
              required
            />
          </div>
          <div>
            <label htmlFor="ultimo-nome">Último Nome</label>
            <input
              id="ultimo-nome"
              type="text"
              placeholder="Sobrenome"
              name="sobrenome"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Endereço de e-mail</label>
            <input
              id="email"
              type="email"
              placeholder="usuário@rpg.net"
              name="email"
              required
            />
          </div>
          <div>
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              type="password"
              placeholder="••••••••••"
              name="senha"
              required
            />
          </div>
          <div>
            <label htmlFor="confirmacao-senha">Confirmação da Senha</label>
            <input
              id="confirmacao-senha"
              type="password"
              placeholder="••••••••••"
              required
            />
          </div>
          <div>
            <input
              type="submit"
              value="Criar uma Conta"
              className={styles.registro | styles.btn1}
            />
            <p>ou</p>
            <button className={styles.login | styles.btn2} onClick={handleRedirectToPage}>
              Iniciar Sessão
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default FormRegister;
