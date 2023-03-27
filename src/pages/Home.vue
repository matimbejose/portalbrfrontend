<template>
  <div class="main">
    <HeaderComponent />
    <div class="content">
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
        <div class="container">
          <div class="row gx-5 justify-content-center">
            <div class="col-sm-6 col-lg-3">
              <div class="icon-box text-center">
                <font-awesome-icon
                  :icon="['fas', 'circle-exclamation']"
                  style="font-size: 50px"
                />
                <h3><a class="title" href="#">Portal da Transparência</a></h3>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3">
              <div class="icon-box text-center">
                <font-awesome-icon
                  icon="fa-solid fa-money-bill"
                  style="font-size: 50px"
                />
                <h3><a class="title" href="#">Gestão Fiscal LRF</a></h3>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3">
              <div class="icon-box text-center">
                <font-awesome-icon
                  icon="fa-regular fa-message"
                  style="font-size: 50px"
                />
                <h3><a class="title" href="#">Ouvidoria Municipal</a></h3>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3">
              <div class="icon-box text-center">
                <font-awesome-icon
                  icon="fa-solid fa-exclamation"
                  style="font-size: 50px"
                />
                <h3>
                  <a href="#" class="title">Acesso a Informação</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- /MENUS -->

      <!-- Noticias -->
      <div class="container">
        <div class="section-title">
          <h2>NOTÍCIAS</h2>
          <h3>Fique <span>Informado!</span></h3>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div
              id="carouselExampleCaptions"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item">
                  <img
                    src="/assets/img/01.png"
                    class="d-block w-100 rounded float-start"
                    alt="..."
                  />
                </div>
                <div class="carousel-item active">
                  <img
                    src="/assets/img/01.png"
                    class="d-block w-100 rounded float-start"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="/assets/img/01.png"
                    class="d-block w-100 rounded float-start"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div
            class="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="card bg-light mb-3 rounded float-start">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-3">
                    <img
                      src="/assets/img/01.png"
                      class="rounded float-start img-fluid"
                    />
                  </div>
                  <div class="col-md-8">
                    <i class="bi bi-calendar3"></i> 18/10/2022

                    <h5 class="text-left">18 DE OUTUBRO - DIA DO MÉDICO!</h5>

                    <p style="display: inline-block; align: top">
                      Nossas felicitações neste dia para todos aqueles que
                      cuidam da nossa saúde [...]
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="card bg-light mb-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-3">
                    <img
                      src="/assets/img/01.png"
                      class="rounded float-start img-fluid"
                    />
                  </div>
                  <div class="col-md-8">
                    <i class="bi bi-calendar3"></i> 18/10/2022

                    <h5 class="text-left">18 DE OUTUBRO - DIA DO MÉDICO!</h5>

                    <p style="display: inline-block; align: top">
                      Nossas felicitações neste dia para todos aqueles que
                      cuidam da nossa saúde [...]
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="card bg-light mb-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-3">
                    <img
                      src="/assets/img/01.png"
                      class="rounded float-start img-fluid"
                    />
                  </div>
                  <div class="col-md-8">
                    <i class="bi bi-calendar3"></i> 18/10/2022

                    <h5 class="text-left">18 DE OUTUBRO - DIA DO MÉDICO!</h5>

                    <p style="display: inline-block; align: top">
                      Nossas felicitações neste dia para todos aqueles que
                      cuidam da nossa saúde [...]
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" class="btn btn-success d-block w-100 mb-3">
              <i class="bi bi-newspaper me-2"></i> Ver todas as Notícias
            </a>
          </div>
        </div>
        <!--/ Noticias -->
      </div>
    </div>
    <FooterComponent />
  </div>
</template>


<script>
import FooterComponent from "../components/FooterComponent.vue";
import HeaderComponent from "../components/HeaderComponent.vue";

export default {
  name: "Home",
  components: {
    FooterComponent,
    HeaderComponent,
  },
};
</script>


<style>
.content {
  min-height: 100vh;
  margin: -60px 0 -40px;
  padding: 60px 0 40px;
  box-sizing: border-box;
}

.section-title h2 {
  font-size: 13px;
  letter-spacing: 1px;
  font-weight: 700;
  padding: 8px 20px;
  margin: 0;
  background-color: rgb(231, 241, 253);
  background-position-x: 0%;
  background-position-y: 0%;
  background-repeat: repeat;
  background-attachment: scroll;
  background-image: none;
  background-size: auto;
  background-origin: padding-box;
  background-clip: border-box;
  color: #da4849;
  display: inline-block;
  text-transform: uppercase;
  border-radius: 50px;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Roboto", sans-serif;
}

.section-title h3 span {
  color: #DA4849;
}

*, ::after, ::before {
  box-sizing: border-box;
}

.section-title h3 {
  font-size: 32px;
  font-weight: 700;
}


section-title {
  text-align: center;
}



</style>
