import styles from "../assets/css/form.module.css";
import React from "react";

function FormLogin() {
  const handleLogin = () => {
    console.log("Login clicked");
  };

  const handleRegister = () => {
    window.location.href = "cadastro.html";
  };

  return (
    <>
      <main>
        <form>
          <h1>
            Iniciar sessão no
            <br />
            Libraries & Dragons
          </h1>
          <hr />
          <div className={styles.container}>
            <div>
              <label for="email">Endereço de e-mail</label>
              <input
                id="email"
                type="email"
                placeholder="usuário@rpg.net"
                required
              />
            </div>
            <div>
              <label for="senha">Senha</label>
              <input
                id="senha"
                type="password"
                placeholder="••••••••••"
                required
              />
            </div>
            <div>
              <button
                className={styles.login | styles.btn1}
                onClick={handleLogin}
              >
                <i className={styles.fa_lock}></i> Iniciar Sessão
              </button>
              <p>ou</p>
              <button
                className={styles.registro | styles.btn2}
                onClick={handleRegister}
              >
                Criar uma conta
              </button>
  
              <p id="esqueceu-senha">
                <a href="#">Esqueceu sua senha?</a>
              </p>
            </div>
          </div>
        </form>
      </main>
    </>
  );
  
}

export default FormLogin;
