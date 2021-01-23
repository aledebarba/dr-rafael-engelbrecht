import { useState, useEffect } from "react";
import HTMLHeader from "../components/htmlheader";
import Navbar from "../components/navbar";

import useScroll from '../components/useScroll'
export default function Home() {
  const [ menuSettings, setMenu ] = useState();
  useEffect(()=>{
    // get menu styles from css-root
    // this function needs to be inside an use effect
    // because document is certainly present inside it
    const styles = getComputedStyle(document.body);
    const color = styles.getPropertyValue('--white').trim();
    const inverse = styles.getPropertyValue('--blue').trim();
    const hover = styles.getPropertyValue('--red').trim();

    setMenu({
      scrollby: 400,
      items: [
      { text: "Home", href: "#top" },
      { text: "Áreas de atuação", href: "#areas" },
      { text: "Formação", href: "#formacao" },
      { text: "Publicação", href: "#publicacao" },
      { text: "Atendimento", href: "#atendimento" },
      { text: "Contato", href: "#call_to_action" },
    ],
    settings: {
      default: {
          height: '80px', bgColor: color, linkColor: inverse, linkHover: hover,
          menuIconColor: inverse, shadow: '0px 1px 3px 0px #00000055', 
          brand: {url: '/images/brand__menu-icon.png', width: '52px', height: '52px'},
          mobile: {bgcolor: color, height: '60px', brand: { url: '/images/brand__menu-icon.png', height: '52px', width: '52px'}
                  }
      },
      scrolled: {
          height: '60px', bgColor: inverse, linkColor: color, linkHover: 'navajowhite',
          menuIconColor: color, shadow: '0px 3px 6px 0px #00000055', 
          brand: {url: '/images/brand__menu-icon.png', width: '40px', height: '40px'},
          mobile: {bgcolor: color, height: '60px', brand: {url: '/images/brand__menu-icon.png',height: '52px', width: '52px'}}
      }
    }
    })
    },[]);
  return (
    <div className="content">
      <HTMLHeader/>
      {menuSettings && 
      <Navbar menuItems={menuSettings.items} settings={menuSettings.settings} scrollby={menuSettings.scrollby}/>
      }
      <div className="container-full hero" id="top">
        <div className="video__container">
          <video autoPlay muted loop>  
            <source src="http://rafaelengelbrecht.com.br/media/hero__endo-surgery.webm" type="video/webm"/>
            <source src="http://rafaelengelbrecht.com.br/media/hero__endo-surgery.mp4" type="video/mp4"/>
          </video>
        </div>
        <div className="container">
          <div className="row">
            <div className="col w50" >
              <h1>Dr Rafael Engelbrecht</h1>
              <h2>Cirurgião Vascular e Endovascular</h2>
                <h3>
                  <spam>CRM 156519</spam>
                  <spam>RQE 88339</spam>
                  <spam>RQE 883391</spam>
                </h3>
              <p>
                Rafael Engelbrecht é formado em <strong>Medicina</strong> pela Escola Paulista de
                Medicina - Universidade Federal de São Paulo e possui residência
                médica nas áreas de <strong>Cirurgia Geral</strong>, <strong>Cirurgia Vascular e Cirurgia
                Endovascular</strong> pela mesma Universidade.
              </p>
              <a href="#areas" className="button primary useScroll">
                Saiba mais
              </a>
            </div>
            <div className="col w50" >
              <img
                src="/images/hero__doctor-photo.png"
                alt="foto do dr rafael engelbrecht"
              />
            </div>
          </div>
        </div>
      </div>

      <div id="areas">
        <div className="container">
          <h1>Áreas de Atuação</h1>
          <h2>
            PRINCIPAIS ATUAÇÕES, TÉCNICAS E ÁREAS DE ATENDIMENTO ESPECIALIZADO
          </h2>
          <div className="row">
            <div className="col areas__text">
              <div className="area">
                <h3>Cirurgia Vascular e Endovascular</h3>
                <ul>
                  <li>Cirurgia Endovascular (minimamente invasiva)</li>
                </ul>
              </div>
              <div className="area">
                <h3>Doenças Venosas</h3>
                <ul>
                  <li>Insuficiência venosa</li>
                  <li>
                    Varizes, vasinhos - tratamento cirúrgico e escleroterapia
                  </li>
                  <li>Trombose venosa profunda (TVP), tromboflebite</li>
                </ul>
              </div>
              <div className="area">
                <h3>Doenças Arteriais</h3>
                <ul>
                  <li>Oclusão arterial crônica e aguda</li>
                  <li>Feridas/úlceras</li>
                </ul>
              </div>
              <div className="area">
                <h3>Infecções</h3>
                <ul>
                  <li>Erisipela</li>
                  <li>Celulite</li>
                </ul>
              </div>
              <div className="area">
                <h3>Outras áreas</h3>
                <ul>
                  <li>Cateteres: Port-o-cath, Permcath, PICC</li>
                  <li>Fístula arteriovenosa para hemodiálise</li>
                  <li>
                    Doenças linfáticas (congênitas, adquiridas e
                    pós-infecciosas)
                  </li>
                  <li>
                    Doenças/Síndromes reumatológicas e auto-imunes com
                    acometimento vascular
                  </li>
                  <li>Check-up vascula</li>
                </ul>
              </div>
              
              <a
                href="https://www.linkedin.com/in/rafael-engelbrecht-ba271961/"
                target="_blank"
                className="button secondary"
              >
                <img src="/images/icon__linkedin.svg" alt="logo do linkedin" />
                LinkedIn 
              </a>
            </div>
            <div className="col areas__ilustracao">
              <img src="/images/ilustracao__areas.png" />
            </div>
          </div>
        </div>
      </div>

      <div id="formacao">
        <div className="container">
          <h1>Formação Acadêmica</h1>
          <h2>
            CURSOS DE GRADUAÇÃO, PÓS GRADUAÇÃO, ESPECIALIZAÇÕES E RESIDÊNCIAS
          </h2>
          <div className="row">
            <div className="col w50">
              <div className="formacao__logos">
                <div className="logo-epm">
                  <img
                    src="/images/marca__epm.png"
                    alt="marca da escola paulista de medicina - escudo mostrando uma cobra enrolana num tronco de árvore"
                    
                  />
                </div>
                <div className="logo-unifesp">
                  <img
                    src="/images/marca__unifesp.png"
                    alt="marca da unifesp - fachada estilizada do prédio"
                  />
                </div>
              </div>
              <div className="row formacao__cursos">
                <ul>
                  <li>Graduação em Medicina</li>
                  <li>Residência em Cirurgia Geral</li>
                  <li>Residência em Cirurgia Vascular</li>
                  <li>Residência em Cirurgia Endovascular</li>
                </ul>
              </div>
            </div>
            <div className="col w50 formacao__detalhes">
              <p>
                Ganhador do <strong>2º Prêmio Emil Burihan</strong> da Sociedade
                Brasileira de Angiologia e Cirurgia Vascular no ano de 2016 (3º
                lugar).
              </p>
              <p>
                Possui experiência de trabalho no Hospital do Rim, com pacientes
                transplantados renais em vias de acesso para hemodiálise.{" "}
              </p>
              <p>
                Atualmente, trabalha como Cirurgião Vascular e Endovascular no
                Hospital 9 de Julho com pacientes internados, retaguarda de
                Pronto Socorro, cirurgias eletivas e consultas ambulatoriais.
              </p>
              <a
                href="http://lattes.cnpq.br/3009961818693674"
                target="_blank"
                className="button secondary"
              >
                <img
                  src="/images/icon__lattes.svg"
                  alt="marca da plataforma lattes"
                />
                Currículo Lattes
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="publicacao">
        <div className="container">
          <h1>Publicação</h1>
          <h2>
               Manual de Angiologia e Cirurgia Vascular e Endovascular (2020)
                - Editora Manole
          </h2>
          <div className="row">

            <div className="col w50 publicacao__livro">
              <img
                src="/images/livro.png"
                alt="capa do livro"                
              />
            </div>
            <div className="col w50 publicacao__text">
              
              <h3>Participações: </h3>
              <ul>
                <li>
                  <strong>Capítulo 6:</strong> Propedêutica linfática ao lado de Luis Carlos Uta
                  Nakano
                </li>
                <li>
                  <strong>Capítulo 74:</strong> Complicações das angioplastias de carótida ao
                  lado de Luis Carlos Uta Nakano
                </li>
                <li>
                  <strong>Capítulo 84:</strong> Angioplastia da veia cava inferior e do segmento
                  ileofemoral na insuficiência venosa crônicaao lado de Samuel
                  Tomaz Araújo e Ronald Luiz Gomes Flumignan.
                </li>
              </ul>
              <div className="buttons">
                <a href="https://www.manole.com.br/manual-de-angiologia-e-cirurgia-vascular-e-endovascular/p" target="_blank" className="button secondary">
                  <img src="/images/icon__book.svg" alt="icone de um livro" />
                  Ed. Manole
                </a>
                <a href="https://www.amazon.com.br/MANUAL-ANGIOLOGIA-CIRURGIA-VASCULAR-ENDOVASCULAR/dp/8520460100" target="_blank" className="button secondary">
                  <img src="/images/icon__book.svg" alt="icone de um livro" />
                  Amazon
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="atendimento">
        <div className="container">
          <h1>Locais de Atendimento</h1>
          <div className="row">
            <div className="col w25">
              <div className="atendimento__logo">
                <a
                  href="https://www.hospitaloswaldocruz.org.br/"
                  target="_blank"
                >
                  <img
                    src="/images/logo__haoc.svg"
                    alt="marca do hospital alemão oswaldo cruz"
                  />
                </a>
              </div>
              <h3>Hospital Alemão Oswaldo Cruz</h3>
            </div>
            <div className="col w25">
              <div className="atendimento__logo">
                <a href="https://www.hospitalsiriolibanes.org.br/Paginas/nova-home.aspx" target="_blank">
                  <img
                    src="/images/logo__hospital-sirio-libanes.svg"
                    alt="marca do hospital sírio libanês"
                  />
                </a>
              </div>
              <h3>Hospital Sírio Libanês</h3>
            </div>
            <div className="col w25">
              <div className="atendimento__logo">
                <a href="https://www.h9j.com.br/Paginas/default.aspx" target="_blank">
                  <img
                    src="/images/logo__hospital-9-de-julho.svg"
                    alt="marca do hospital 9 de julho"
                  />
                </a>
              </div>
              <h3>Hospital 9 de Julho</h3>
            </div>
            <div className="col w25">
              <div className="atendimento__logo">
                <a href="#call_to_action" tarket="_blank">
                  <img
                    src="/images/logo__consultorio.svg"
                    alt="marca do consultorio particular"
                  />
                </a>
              </div>
              <h3>Consultório Particular</h3>
            </div>
          </div>
        </div>

        <div id="call_to_action">
          <div className="cta__icon">
            <img src="/images/cta__contact.png" />
          </div>
          <div className="cta__message">
            <p>Por favor, sinta-se a vontade para ligar em nossa clínica e
            conversar com o pessoal da recepção. Seu atendimento será rápido e
            atencioso.</p>
            <a href="tel:+55-11-39959852">
              <img src="/images/icon__telephone.svg"/>11 3995-9852</a>
          </div>
          <div className="cta__address">
            <img src="/images/icon__place.svg" alt="alfinete de mapa" />
            <p>Rua Pamplona, 145 cj 134 Jardim Paulista São Paulo SP</p>
          </div>
          <div className="cta__button">
            <a href="tel:tel:+55-11-39959852" className="button primary">
              <img
                src="/images/icon__arrow-right-squared.svg"
                alt="seta apontando para esquerda"
              />
              Marque sua consulta
            </a>
          </div>
        </div>
      </div>

      <div id="footer">
        <div className="container">
          <img src="/images/brand__white.png" alt="marca do consultaorio" />
          <p>
            Esse site e seu conteúdo estão protegidos por leis de deireito
            autoral, tanto no brasil quanto no exterior. Antes de reproduzí-lo,
            no todo ou em parte, por favor entre em contato.
          </p>
          <a href="#top" className="useScroll">Voltar ao inicio</a>
        </div>
      </div>
    </div>
  );
}
