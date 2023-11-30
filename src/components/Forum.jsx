import styles from "../assets/css/forum.module";
import React from "react";

function Forum() {
    return (
        <>
<div className={styles.escuro}>

<nav class="fechado">
    <header>
        <div id="logo">
            <img id="img" src="../assets/icone-2.png" alt="logo" />
            <p class="texto">Libraries & Dragons</p>
        </div>
        <i id="alternar" className={styles.fa | styles.a-chevron-right}></i>
    </header>
    <div id="barra-menu">
        <div id="menu">
            <li id="caixa-pesquisa" class={styles.lista}><i class={styles.fa | styles.fa-search | styles.icones} aria-hidden="true"></i><input id="pesquisa" type="text" placeholder="Pesquisar..." /></li>
            <ul id="links-menu">
                <li className={styles.link-navegacao | styles.lista}><a href="principal.html"> <i className={styles.fa | styles.fa-home | styles.icones} aria-hidden="true"></i><span className={styles.texto}>Página Inicial</span></a></li>

                <li className={styles.link-navegacao | styles.lista}><a href="#anuncios"> <i className={styles.fa | styles.fa-bullhorn | styles.icones} aria-hidden="true"></i><span className={styles.texto}>Anúncios</span></a></li>
                
                <li className={styles.link-navegacao | styles.lista}><a href="#duvidas"> <i className={styles.fa | styles.fa-question-circleo | styles.icones} aria-hidden="true"></i><span className={styles.texto}>Dúvidas</span></a></li>
                
                <li className={styles.link-navegacao | styles.lista}><a href="#sugestoes-ideias"> <i className={styles.fa | styles.fa-envelope-o | styles.icones} aria-hidden="true"></i><span className={styles.texto}>Sugestões & Ideias</span></a></li>
                
                <li className={styles.link-navegacao | styles.lista}><a href="#bugs"> <i className={styles.fa | styles.fa-bug | styles.icones} aria-hidden="true"></i><span className={styles.texto}>Relatório de Bugs</span></a></li>
                
                <li className={styles.link-navegacao | styles.lista}><a href="#off-topic"> <i className={styles.fa | styles.fa-commenting-o | styles.icones} aria-hidden="true"></i><span className={styles.texto}>Off-Topic Geral</span></a></li>
            </ul>
        </div>
        <div id="conteudo-inferior">
            <li className={styles.lista}><a href="login.html"><i className={styles.fa | styles.fa-sign-out | styles.icones}></i><span className={styles.texto}>Sair</span></a></li>
            <li id="modo" className={styles.lista}>
                <div id="sol-lua">
                    <i id="lua" className={styles.fa | styles.fa-moon-o | styles.icones}></i>
                    <i id="sol" className={styles.fa | styles.fa-sun-o | styles.icones}></i>
                </div>
                <span className={styles.texto | styles.texto-modo}>Modo Escuro</span>
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
            ##################### Alterar Aqui Abaixo #####################
            <div class="cabecalho">
                <div class="titulo">
                    <h1><a href="#">Anúncios</a></h1>
                    <button class="criar-forum" onclick="location.href = 'criar_forum.html'"><i class="fa fa-plus icones"></i></button>
                </div>
                <p>Notas do Patch & Destaques da Comunidade</p>
            </div>
            <ul class="lista-foruns">
                <li class="link-forum"><i class="fa fa-thumb-tack"></i><a href="discussao.html">Lançamento do Libraries & Dragons</a></li>
                <hr>
                <li class="link-forum"><i class="fa fa-thumb-tack"></i><a href="#">Título</a></li>
                <hr>
                <li class="link-forum"><i class="fa fa-thumb-tack"></i><a href="#">Título</a></li>
                <hr>
                <li class="link-forum"><i class="fa fa-thumb-tack"></i><a href="#">Título</a></li>
                <hr>
            </ul>
        </section>
        <section id="duvidas">
            <div class="cabecalho">
                <div class="titulo">
                    <h1><a href="#">Dúvidas</a></h1>
                    <button class="criar-forum" onclick="location.href = 'criar_forum.html'"><i class="fa fa-plus icones"></i></button>
                </div>
                <p>Compartilhe Dicas, Truques ou Peça Orientação - Discussão específica para o uso da aplicação Libraries & Dragons</p>
            </div>
            <ul id="lista-foruns">
                
            </ul>
        </section>
        <section id="sugestoes-ideias">
            <div class="cabecalho">
                <div class="titulo">
                    <h1><a href="#">Sugestões & Ideias</a></h1>
                    <button class="criar-forum" onclick="location.href = 'criar_forum.html'"><i class="fa fa-plus icones"></i></button>
                </div>
                <p>Votação Ativada - Envie Possíveis Melhorias para a Comunidade</p>
                <ul id="lista-foruns">
                
                </ul>
            </div>
        </section>
        <section id="bugs">
            <div class="cabecalho">
                <div class="titulo">
                    <h1><a href="#">Relatório de Bugs</a> </h1>
                    <button class="criar-forum" onclick="location.href = 'criar_forum.html'"><i class="fa fa-plus icones"></i></button>
                </div>
                <p>Relatar & Obter Ajuda com Problemas da Aplicação & Bugs de Novos Recursos para o Site Principal</p>
                <ul id="lista-foruns">
                
                </ul>
            </div>
        </section>
        <section id="off-topic">
            <div class="cabecalho">
                <div class="titulo">
                    <h1><a href="#">Off-Topic Geral</a></h1>
                    <button class="criar-forum" onclick="location.href = 'criar_forum.html'"><i class="fa fa-plus icones"></i></button>
                </div>
                <p>Faça uma pausa da aplicação</p>
                <ul id="lista-foruns">
                
                </ul>
            </div>
        </section>
    </div>
    </main>

    </div>
        </>
    )
}

export default forum;