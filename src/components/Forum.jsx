import styles from "../assets/css/forum.module.css";
import React from "react";


function Forum() {
  const handleNewForum = () => {
    window.location.href = "./register";
  };

  return (
    <>
      <div className={styles.escuro}>
        <nav className="fechado">
          <header>
            <div id="logo">
              <img id="img" src="../assets/images/icone-2.png" alt="logo" />
              <p className="texto">Libraries & Dragons</p>
            </div>
            <i
              id="alternar"
              className={styles.fa | styles.a | styles.chevron | styles.right}
            ></i>
          </header>
          <div id="barra-menu">
            <div id="menu">
              <li id="caixa-pesquisa" className={styles.lista}>
                <i
                  className={styles.fa | styles.fa | styles.search | styles.icones}
                  aria-hidden="true"
                ></i>
                <input id="pesquisa" type="text" placeholder="Pesquisar..." />
              </li>{" "}
              <ul id="links-menu">
                <li className={styles.link | styles.navegacao | styles.lista}>
                  <a href="principal.html">
                    {" "}
                    <i
                      className={styles.fa | styles.fa | styles.home | styles.icones}
                      aria-hidden="true"
                    ></i>
                    <span className={styles.texto}>Página Inicial</span>
                  </a>
                </li>
                <li className={styles.link | styles.navegacao | styles.lista}>
                  <a href="#anuncios">
                    {" "}
                    <i
                      className={
                        styles.fa | styles.fa | styles.bullhorn | styles.icones
                      }
                      aria-hidden="true"
                    ></i>
                    <span className={styles.texto}>Anúncios</span>
                  </a>
                </li>
                <li className={styles.link | styles.navegacao | styles.lista}>
                  <a href="#duvidas">
                    {" "}
                    <i
                      className={
                        styles.fa |
                        styles.fa | styles.question | styles.circleo |
                        styles.icones
                      }
                      aria-hidden="true"
                    ></i>
                    <span className={styles.texto}>Dúvidas</span>
                  </a>
                </li>
                <li className={styles.link | styles.navegacao | styles.lista}>
                  <a href="#sugestoes-ideias">
                    {" "}
                    <i
                      className={
                        styles.fa | styles.fa | styles.envelope | styles.o | styles.icones
                      }
                      aria-hidden="true"
                    ></i>
                    <span className={styles.texto}>Sugestões & Ideias</span>
                  </a>
                </li>
                <li className={styles.link | styles.navegacao | styles.lista}>
                  <a href="#bugs">
                    {" "}
                    <i
                      className={styles.fa | styles.fa | styles.bug | styles.icones}
                      aria-hidden="true"
                    ></i>
                    <span className={styles.texto}>Relatório de Bugs</span>
                  </a>
                </li>
                <li className={styles.link | styles.navegacao | styles.lista}>
                  <a href="#off-topic">
                    {" "}
                    <i
                      className={
                        styles.fa | styles.fa | styles.commenting | styles.o | styles.icones
                      }
                      aria-hidden="true"
                    ></i>
                    <span className={styles.texto}>Off-Topic Geral</span>
                  </a>
                </li>{" "}
              </ul>
            </div>
            <div id="conteudo-inferior">
              <li className={styles.lista}>
                <a href="login.html">
                  <i
                    className={
                      styles.fa | styles.fa | styles.sign | styles.out | styles.icones
                    }
                  ></i>
                  <span className={styles.texto}>Sair</span>
                </a>
              </li>{" "}
              <li id="modo" className={styles.lista}>
                <div id="sol-lua">
                  <i
                    id="lua"
                    className={
                      styles.fa | styles.fa | styles.moon | styles.o | styles.icones
                    }
                  ></i>
                  <i
                    id="sol"
                    className={
                      styles.fa | styles.fa | styles.sun | styles.o | styles.icones
                    }
                  ></i>
                </div>
                <span className={styles.texto | styles.texto | styles.modo}>
                  Modo Escuro
                </span>
                <div id="botao-alternar">
                  <span id="botao"></span>
                </div>
              </li>
            </div>
          </div>
        </nav>
        <main>
          <div id="container">
            <section id="anuncios">
              <div className={styles.cabecalho}>
                <div className={styles.titulo}>
                  <h1>
                    <a href="#">Anúncios</a>
                  </h1>
                  <button className="criar-forum" onClick={handleNewForum}>
                    <i className="fa fa-plus icones"></i>
                  </button>
                </div>
                <p>Notas do Patch & Destaques da Comunidade</p>
              </div>
              <ul className={styles.lista | styles.foruns}>
                <li className={styles.link | styles.forum}>
                  <i className={styles.fa | styles.fa | styles.thumb | styles.tack}></i>
                  <a href="discussao.html">Lançamento do Libraries & Dragons</a>
                </li>
                <hr />
                <li className={styles.link | styles.forum}>
                  <i className={styles.fa | styles.fa | styles.thumb | styles.tack}></i>
                  <a href="#">Título</a>
                </li>
                <hr />
                <li className={styles.link | styles.forum}>
                  <i className={styles.fa | styles.fa | styles.thumb | styles.tack}></i>
                  <a href="#">Título</a>
                </li>
                <hr />
                <li className={styles.link | styles.forum}>
                  <i className={styles.fa | styles.fa | styles.thumb | styles.tack}></i>
                  <a href="#">Título</a>
                </li>
                <hr />
              </ul>
            </section>
            <section id="duvidas">
              <div className={styles.cabecalho}>
                <div className={styles.titulo}>
                  <h1>
                    <a href="#">Dúvidas</a>
                  </h1>
                  <button
                    className={styles.criar | styles.forum}
                    onClick={handleNewForum}
                  >
                    <i
                      className={styles.fa | styles.fa | styles.plus | styles.icones}
                    ></i>
                  </button>
                </div>
                <p>
                  Compartilhe Dicas, Truques ou Peça Orientação - Discussão
                  específica para o uso da aplicação Libraries & Dragons
                </p>
              </div>
              <ul id="lista-foruns"></ul>
            </section>
            <section id="sugestoes-ideias">
              <div className={styles.cabecalho}>
                <div className={styles.titulo}>
                  <h1>
                    <a href="#">Sugestões & Ideias</a>
                  </h1>
                  <button
                    className={styles.criar | styles.forum}
                    onClick={handleNewForum}
                  >
                    <i
                      className={styles.fa | styles.fa | styles.plus | styles.icones}
                    ></i>
                  </button>
                </div>
                <p>
                  Votação Ativada - Envie Possíveis Melhorias para a Comunidade
                </p>
                <ul id="lista-foruns"></ul>
              </div>
            </section>
            <section id="bugs">
              <div className={styles.cabecalho}>
                <div className={styles.titulo}>
                  <h1>
                    <a href="#">Relatório de Bugs</a>{" "}
                  </h1>
                  <button
                    className={styles.criar | styles.forum}
                    onClick={handleNewForum}
                  >
                    <i
                      className={styles.fa | styles.fa | styles.plus | styles.icones}
                    ></i>
                  </button>
                </div>
                <p>
                  Relatar & Obter Ajuda com Problemas da Aplicação & Bugs de
                  Novos Recursos para o Site Principal
                </p>
                <ul id="lista-foruns"></ul>
              </div>
            </section>
            <section id="off-topic">
              <div className={styles.cabecalho}>
                <div className={styles.titulo}>
                  <h1>
                    <a href="#">Off-Topic Geral</a>
                  </h1>
                  <button
                    className={styles.criar | styles.forum}
                    onClick={handleNewForum}
                  >
                    <i
                      className={styles.fa | styles.fa | styles.plus | styles.icones}
                    ></i>
                  </button>
                </div>
                <p>Faça uma pausa da aplicação</p>
                <ul id="lista-foruns"></ul>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default Forum;
