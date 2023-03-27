<template>
  <div class="main">
    <!-- Navigation -->
    <nav
      style="position: fixed; top: 0; left: 0; right: 0"
      class="navbar navbar-expand-lg navbar-white bg-white static-top sticky-top"
    >
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="../assets/logo.png" alt="logo" height="36" />
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
          <ul class="navbar-nav me-auto">
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
                TRANSPARÊNCIA
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
                <li><a class="dropdown-item" href="#">LICITAÇÃO</a></li>
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
export default {
  name: "HeaderComponent",
};
</script>


<style>
#hero {
  background-image: url(../assets/cidade.jpg);
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: multiply;
  color: white;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

#search-course p {
  font-size: 30px;
  color: #fff;
}

.title {
  text-decoration: none;
  color: black;
  white-space: nowrap;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
}

.icon-box {
  position: relative;
  z-index: 1; 
}

.icon-box::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: #da4849;
  z-index: -1; 
  transition: height 0.2s ease-out;
}

.icon-box:hover::after {
  height: 100%;
}

.icon-box:hover {
  background-color: white;
  color: black;
}

.icon-box:hover a {
  color: white;
}

#hero h1 {
  margin: 0;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  color: #fff;
  font-family: "Poppins", sans-serif;
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

.navbar .dropdown ul a:hover,
.navbar .dropdown ul .active:hover,
.navbar .dropdown ul li:hover > a {
  color: #da4849;
}

navbar .dropdown ul a {
  padding: 10px 20px;
  font-weight: 400;
}

.navbar a:hover,
.navbar .active,
.navbar .active:focus,
.navbar li:hover > a {
  color: #da4849;
}
</style>
