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

    <!-- ======= Imagem Principal ======= -->
    <section id="hero" class="d-flex align-items-center">
      <div class="container py-5">
        <h1 class="text-center" style="margin-top: 30px">
          Bem vindo ao portal da
        </h1>
        <h1 class="text-center" style="margin-bottom: 70px">
          Prefeitura de Meruoca
        </h1>
        <center>
          <div class="col-sm-6">
            <div class="input-group">
              <input
                class="form-control"
                type="search"
                placeholder="Posso Ajudar Você?"
                aria-label="Search"
                style="border-right: none"
              />
              <div class="input-group-append">
                <button
                  type="button"
                  class="btn btn-success btn-lg btn-block"
                  style="padding: 15px; border-radius: 0px"
                >
                  Pesquisar
                </button>
              </div>
            </div>
          </div>
        </center>
        <!-- /Menu População -->
        <div
          id="search-course"
          class="search-course-section mt-5 rounded-top rounded-3"
          style="background-color: #00a859"
        >
          <div class="container">
            <div class="search-counter-up">
              <div class="row">
                <!-- /counter -->
                <div class="col-sm-3 mb">
                  <div class="counter-number">
                    <div class="col-sm">
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <font-awesome-icon
                          icon="fa-solid fa-users"
                          style="font-size: 40px"
                          class="order-1"
                        />
                        <p class="order-2 mb-0">13.000+</p>
                      </div>
                    </div>
                    <div class="border border-white border-2 h-80"></div>
                    <p style="font-size: 15px !important">População</p>
                  </div>
                </div>
                <!-- /counter -->

                <!-- /counter -->
                <div class="col-sm-2 mb">
                  <div class="counter-number">
                    <div class="col-sm">
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <font-awesome-icon
                          icon="fa-solid fa-house"
                          style="font-size: 40px"
                          class="order-1"
                        />
                        <p class="order-2 mb-0 ms-3">3</p>
                      </div>
                    </div>
                    <div class="border border-white border-2 h-80"></div>
                    <p style="font-size: 15px !important">Distritos</p>
                  </div>
                </div>

                <!-- /counter -->

                <div class="col-sm-2 mb">
                  <div class="counter-number">
                    <div class="col-sm">
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <font-awesome-icon
                          icon="fa-solid fa-users"
                          style="font-size: 40px"
                          class="order-1"
                        />
                        <p class="order-2 mb-0 ms-3">11</p>
                      </div>
                    </div>
                    <div class="border border-white border-2 h-80"></div>
                    <p style="font-size: 15px !important">Bairros</p>
                  </div>
                </div>

                <div class="col-sm-2 mb">
                  <div class="counter-number">
                    <div class="col-sm">
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <font-awesome-icon
                          icon="fa-solid fa-house"
                          style="font-size: 40px"
                          class="order-1"
                        />
                        <p class="order-2 mb-0 ms-3">137anos</p>
                      </div>
                    </div>
                    <div class="border border-white border-2 h-80"></div>
                    <p style="font-size: 15px !important">13 de Novembro</p>
                  </div>
                </div>

                <div class="col-sm-3 mb">
                  <div class="counter-number">
                    <div class="col-sm">
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <font-awesome-icon
                          icon="fa-solid fa-map-location-dot"
                          style="font-size: 40px"
                          class="order-1"
                        />
                        <p class="order-2 mb-0 ms-3">283.538,00</p>
                      </div>
                    </div>
                    <div class="border border-white border-2 h-80"></div>
                    <p style="font-size: 15px !important">Área</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--End /Menu População -->
      </div>
    </section>
    <!-- End Imagem Principal -->

    <!-- ======= MENUS ======= -->
    <section id="menu" class="featured-services py-5">
      <div class="container" data-aos="fade-up">
        <div class="row gx-5 justify-content-center">
          <div class="col-sm-6 col-lg-3">
            <div
              class="icon-box text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <font-awesome-icon
                :icon="['fas', 'circle-exclamation']"
                style="fontsize: 50px"
              />
              <h3 class="title"><a href="#">Portal da Transparência</a></h3>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div
              class="icon-box text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <font-awesome-icon
                icon="fa-solid fa-money-bill"
                style="fontsize: 50px"
              />
              <h3 class="title"><a href="#">Gestão Fiscal LRF</a></h3>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div
              class="icon-box text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <font-awesome-icon
                icon="fa-regular fa-message"
                style="fontsize: 50px"
              />
              <h3 class="title"><a href="#">Ouvidoria Municipal</a></h3>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div
              class="icon-box text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <font-awesome-icon
                icon="fa-solid fa-exclamation"
                style="fontsize: 50px"
              />
              <h3 class="title">
                <a href="#" class="d-inline text-decoration-none"
                  >Acesso a Informação</a
                >
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /MENUS -->
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
</style>
