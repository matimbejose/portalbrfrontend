<template>
  <div
    class="sempreNoTompo"
    style="position: fixed; top: 0; left: 0; right: 0; z-index: 100"
  >
    <section
      id="topbar"
      class="d-flex align-items-center"
      style="background-color: #00a859 !important"
    >
      <div
        class="container d-sm-flex justify-content-center justify-content-md-between"
      >
        <div class="contact-info d-flex align-items-center">
          <i class="bi bi-telephone-fill d-flex align-items-center ms-3">
            <font-awesome-icon icon="fa-solid fa-phone" />
            <a href="tel:"><span>(88) 3649-1136</span></a>
          </i>
          <i class="bi bi-info-circle-fill d-flex align-items-center ms-3">
            <font-awesome-icon icon="fa-solid fa-circle-exclamation" />
            <a href="#">Transparência</a></i
          >
          <i class="bi bi-chat-fill d-flex align-items-center ms-3">
            <font-awesome-icon icon="fa-solid fa-volume-off" />
            <a href="#"> Ouvidoria</a></i
          >
          <i class="bi bi-info-square-fill d-flex align-items-center ms-3">
            <font-awesome-icon icon="fa-solid fa-mobile-screen-button" />
            <a href="#">E-sic</a></i
          >
        </div>
        <div class="social-links d-none d-md-flex align-items-center">
          <a
            href="https://www.facebook.com/pmmeruoca"
            target="_blank"
            class="facebook"
            ><i class="fa fa-facebook-official" aria-hidden="true"></i
          ></a>
          <a
            href="https://www.instagram.com/prefeiturademeruoca/"
            target="_blank"
            class="instagram"
            ><i class="fa fa-instagram" aria-hidden="true"></i
          ></a>
          <a
            href='https://www.youtube.com/c/pmmeruoca"'
            target="_blank"
            class="youtube"
            ><i class="fa fa-youtube-play" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- Navigation -->
    <nav
      id="navabar"
      class="navbar navbar-expand-lg navbar-white bg-white sticky-top"
    >
      <div class="container">
        <a @click.prevent="goToHome()" class="navbar-brand" href="#">
          <img src="../assets/logo.png" alt="logo" height="70" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                PREFEITURA
              </a>

              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li><a class="dropdown-item" href="#">PREFEITO E VICE</a></li>
                <li>
                  <a class="dropdown-item" href="#">GALERIA DE GESTORES</a>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                O MUNICÍPIO
              </a>

              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li><a class="dropdown-item" href="#">VEICULOS</a></li>
                <li><a class="dropdown-item" href="#">SIMBOLOS</a></li>
                <li><a class="dropdown-item" href="#">CONSELHOS</a></li>
                <li><a class="dropdown-item" href="#">GUIA DO MUNICIPIO</a></li>
                <li>
                  <a class="dropdown-item" href="#">DADOS DO MUNICIPIO</a>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                SECRETARIAS
              </a>

              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a class="dropdown-item" href="#"
                    >CONTROLADORIA GERAL DO MUNICIPIO</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#">GABINEITE DO PREFEITO</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    >PROCURADORIA DO MUNICIPIO</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#">SECRETARIA DE EDUCAÇÃO</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">SECRETARIA DE SAUDE</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    >SECRETARIA DE ADMINISTRAÇÃO PLANEJAMENTO E GESTÃO</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#">SECRETARIA DE FINANÇAS</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    >SECRETARIA DE INCLUSÃO E PROMOÇÃO SOCIAL</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    >SECRETARIA DE INFRAESTRUTURA E URBANISMO</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    >SECRETARIA DE MEIO AMBIENTE, RECURSOS HIDRICOS E
                    AGROPECUÁRIA</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    >SECRETARIA DE TURISMO, CULTURA, ESPORTE E JUVENTUDE</a
                  >
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                LRF – CONTAS PÚBLICAS
              </a>

              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a class="dropdown-item" href="#">LRF – CONTAS PÚBLICAS </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    >RGF – RELATÓRIO DE GESTÃO FISCAL</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    >RREO – RELATÓRIO RESUMIDO DA EXECUÇÃO ORÇAMENTÁRIA
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    >LOA – LEI ORÇAMENTÁRIA ANUAL</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    >LDO – LEI DE DIRETRIZES ORÇAMENTÁRIA</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#">PPA – PLANO PLURIANUAL</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    >PCG – PRESTAÇÃO DE CONTA DE GOVERNO</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#">PPA – PLANO PLURIANUAL</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    >PCS – PRESTAÇÃO DE CONTAS DE GESTÃO</a
                  >
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                TRANSPARÊNCIA
              </a>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                PUBLICAÇÕES
              </a>

              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li><a class="dropdown-item" href="#">LEIS</a></li>
                <li>
                  <a
                    @click.prevent="goToLicitacoes()"
                    class="dropdown-item"
                    href="#"
                    >LICITAÇÃO</a
                  >
                </li>
                <li></li>
                <li>
                  <a class="dropdown-item" href="#">LRF CONTAS PÚBLICAS</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">PCG</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">PCS</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">PORTARIAS</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">LEIS</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">OUTRAS</a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                SERVIÇOS
              </a>

              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a class="dropdown-item" href="#">NOTA FISCAL ELETRÔNICA</a>
                </li>
                <li><a class="dropdown-item" href="#">CONTRACHEQUE</a></li>
                <li></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- End navihation -->
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "HeaderComponent",

  data() {
    return {
      dados: {},
    };
  },

  methods: {
    loadDate() {
      axios
        .get(
          "https://itransparencia.com.br/v2/entidade/?url=http://camarameruoca.ce.gov.br"
        )
        .then((response) => {
          this.dados = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    goToLicitacoes() {
      this.$router.push("/licitacoes");
    },
    goToHome() {
      this.$router.push("/");
    },
  },

  mounted() {
    this.loadDate();
  },
};
</script>


<style>
/* mobil navMenu */
.navbar-mobile {
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(9, 9, 9, 0.9);
  transition: 0.3s;
  z-index: 999;
}
.navbar-mobile ul {
  display: block;
  position: absolute;
  top: 55px;
  right: 15px;
  bottom: 15px;
  left: 15px;
  padding: 10px 0;
  background-color: #00a859;
  overflow-y: auto;
  transition: 0.3s;
}

/* customize the drop down menu */
.dropdown:hover .dropdown-menu {
  display: block;
}
/* customize the  nav bar */
#navabar {
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
}

#topbar .social-links a:hover {
  color: white;
}

#topbar .social-links a {
  color: rgba(255, 255, 255, 0.7);
  line-height: 0;
  margin: 10px;
}

#topbar {
  background: #106eea;
  background-color: rgb(16, 110, 234);
  height: 40px;
  font-size: 12px;
  transition: all 0.5s;
  color: #fff;
  padding: 0;
}

#topbar .contact-info i a,
#topbar .contact-info i span {
  padding-left: 5px;
  color: #fff;
  text-decoration: none;
}

*,
::after,
::before {
  box-sizing: border-box;
}

#topbar .contact-info i a {
  line-height: 0;
}

#topbar .contact-info i {
  font-style: normal;
  color: #fff;
}

#topbar {
  font-size: 12px;
  color: #fff;
}

.navbar a,
.navbar a:focus {
  font-size: 12px;
  font-weight: 600;
}
.navbar a:hover,
.navbar .active,
.navbar .active:focus,
.navbar li:hover > a {
  color: #da4849;
}

/* trocou as fontes da navBar para bold */
.navbar a,
.navbar a:focus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3px;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  position: relative;
}

.navbar .dropdown ul a {
  padding: 10px 20px;
  font-weight: 400;
}

.navbar a,
.navbar a:focus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3px;
  font-size: 12px;
  font-weight: 600;
  color: #444444;
  white-space: nowrap;
  transition: 0.3s;
  position: relative;
}
</style>
