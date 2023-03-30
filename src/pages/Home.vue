<template>
  <div class="content">
    <HeaderComponent />

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
    <section id="noticias" class="about section-bg">
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
                    <font-awesome-icon
                      icon="fa-solid fa-calendar-days"
                    />18/10/2022
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
                    <font-awesome-icon
                      icon="fa-solid fa-calendar-days"
                    />18/10/2022

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
                    <font-awesome-icon
                      icon="fa-solid fa-calendar-days"
                    />18/10/2022

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
              <font-awesome-icon :icon="['fas', 'newspaper']" /> Ver todas as
              Notícias
            </a>
          </div>
        </div>
      </div>
    </section>
    <!--/ Noticias -->

    <!--- Videos ------>
    <section>
      <div class="container aos-init aos-animate" data-aos="fade-up">
        <div class="section-title">
          <h2>Videos</h2>
          <h3>Vídeos relacionados a <span> gestão</span></h3>
        </div>
        <div class="row">
          <div class="col-md-8">
            <iframe
              id="videoPrincipal"
              src="https://www.youtube.com/embed/dXJEWO36Pp0"
              style="border: none; overflow: hidden; border-radius: 10px"
              scrolling="no"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              width="100%"
              height="420"
              frameborder="0"
            ></iframe>
          </div>

          <div class="col-md-4">
            <div class="row">
              <div class="col-md-12">
                <iframe
                  id="video2"
                  src="https://www.youtube.com/embed/dXJEWO36Pp0"
                  style="border: none; overflow: hidden; border-radius: 10px"
                  scrolling="no"
                  allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  width="100%"
                  height="207"
                  frameborder="0"
                ></iframe>
              </div>

              <div class="col-md-12">
                <iframe
                  id="video3"
                  src="https://www.youtube.com/embed/dXJEWO36Pp0"
                  style="border: none; overflow: hidden; border-radius: 10px"
                  scrolling="no"
                  allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  width="100%"
                  height="207"
                  frameborder="0"
                ></iframe>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <a href="#" class="btn btn-success d-block w-100 mb-3">
              <font-awesome-icon :icon="['fas', 'video']" /> Ver todos os Videos
            </a>
          </div>
        </div>
      </div>
    </section>
    <!--- end videos---->

    <!----Publicacao LRF----->
    <section class="container aos-init aos-animate" data-aos="fade-up">
      <div class="section-title">
        <h2>Publicações</h2>
        <h3>Informações dos últimos <span> LRF</span></h3>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="card" style="padding: 8px 0 10px 0">
            <ul class="nav nav-tabs" role="tablist" style="padding-left: 10px">
              <li
                class="active button hvr-sweep-to-right rounded float-start"
                style="padding: 10px 15px; font-size: 14px"
                rel="#lrfs"
              >
                <font-awesome-icon icon="fa-solid fa-file-circle-plus" /> LRF
              </li>
              <li
                class="button hvr-sweep-to-right rounded float-start"
                style="padding: 10px 15px; font-size: 14px"
                rel="#rreo"
              >
               <font-awesome-icon icon="fa-solid fa-file-circle-plus" />  RREO
              </li>
              <li
                class="button hvr-sweep-to-right rounded float-start"
                style="padding: 10px 15px; font-size: 14px"
                rel="#rgf"
              >
               <font-awesome-icon icon="fa-solid fa-file-circle-plus" />  RGF
              </li>
              <li
                class="button hvr-sweep-to-right rounded float-start"
                style="padding: 10px 15px; font-size: 14px"
                rel="#prgfin"
              >
               <font-awesome-icon icon="fa-solid fa-file-circle-plus" />  PRGFIN
              </li>
              <li
                class="button hvr-sweep-to-right rounded float-start"
                style="padding: 10px 15px; font-size: 14px"
                rel="#ppa"
              >
               <font-awesome-icon icon="fa-solid fa-file-circle-plus" />  PPA
              </li>
              <li
                class="button hvr-sweep-to-right rounded float-start"
                style="padding: 10px 15px; font-size: 14px"
                rel="#loa"
              >
               <font-awesome-icon icon="fa-solid fa-file-circle-plus" />  LOA
              </li>
              <li
                class="button hvr-sweep-to-right rounded float-start"
                style="padding: 10px 15px; font-size: 14px"
                rel="#ldo"
              >
               <font-awesome-icon icon="fa-solid fa-file-circle-plus" />  LDO
              </li>
            </ul>
            <div id="tab-flex-column" class="tab-content tab-space">
              <div
                class="tab-pane active"
                id="lrfs"
                style="width: 100%; padding-right: 15px; padding-left: 15px"
              >
                <div
                  class="list-group"
                  style="margin-bottom: 5px; margin-top: 5px"
                >
                  <a href="#" class="list-group-item">
                    <div class="row">
                      <div class="col-md-8" style="line-height: 1.5">
                        <strong style="padding-right: 5px; font-size: 14px">
                          RREO - RELATÓRIO RESUMIDO DA EXECUÇÃO ORÇAMENTÁRIA
                        </strong>
                      </div>
                      <div
                        class="col-md-4"
                        style="padding-left: 15px; font-size: 14px"
                      >
                        <i class="bi bi-calendar-check-fill"></i> 4º
                        BIMESTRE/2022
                        <span
                          class="lrfDataExercicio"
                          style="float: right; font-size: 14px"
                        >
                          <i
                            style="padding-left: 10px"
                            class="bi bi-calendar3"
                          ></i>
                          30/09/2022
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  class="list-group"
                  style="margin-bottom: 5px; margin-top: 5px"
                >
                  <a href="#" class="list-group-item">
                    <div class="row">
                      <div class="col-md-8" style="line-height: 1.5">
                        <strong style="padding-right: 5px; font-size: 14px">
                          RGF - RELATÓRIO DE GESTÃO FISCAL</strong
                        >
                      </div>
                      <div
                        class="col-md-4"
                        style="padding-left: 15px; font-size: 14px"
                      >
                        <i class="bi bi-calendar-check-fill"></i> 2°
                        QUADRIMESTRE/2022
                        <span
                          class="lrfDataExercicio"
                          style="float: right; font-size: 14px"
                        >
                          <i
                            style="padding-left: 10px"
                            class="bi bi-calendar3"
                          ></i>
                          30/09/2022
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  class="list-group"
                  style="margin-bottom: 5px; margin-top: 5px"
                >
                  <a href="#" class="list-group-item">
                    <div class="row">
                      <div class="col-md-8" style="line-height: 1.5">
                        <strong style="padding-right: 5px; font-size: 14px">
                          RREO - RELATÓRIO RESUMIDO DA EXECUÇÃO
                          ORÇAMENTÁRIA</strong
                        >
                      </div>
                      <div
                        class="col-md-4"
                        style="padding-left: 15px; font-size: 14px"
                      >
                        <i class="bi bi-calendar-check-fill"></i> 3º
                        BIMESTRE/2022
                        <span class="lrfDataExercicio" style="float: right">
                          <i
                            style="padding-left: 10px"
                            class="bi bi-calendar3"
                          ></i>
                          27/07/2022
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  class="list-group"
                  style="margin-bottom: 5px; margin-top: 5px"
                >
                  <a href="#" class="list-group-item">
                    <div class="row">
                      <div
                        class="col-md-8"
                        style="line-height: 1.5; font-size: 14px"
                      >
                        <strong style="padding-right: 5px">
                          LDO - LEI DE DIRETRIZES ORÇAMENTÁRIA</strong
                        >
                      </div>
                      <div
                        class="col-md-4"
                        style="padding-left: 15px; font-size: 14px"
                      >
                        <i class="bi bi-calendar-check-fill"></i> ANUAL/2023
                        <span class="lrfDataExercicio" style="float: right">
                          <i
                            style="padding-left: 10px"
                            class="bi bi-calendar3"
                          ></i>
                          15/06/2022
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  class="list-group"
                  style="margin-bottom: 5px; margin-top: 5px"
                >
                  <a href="#" class="list-group-item">
                    <div class="row">
                      <div
                        class="col-md-8"
                        style="line-height: 1.5; font-size: 14px"
                      >
                        <strong style="padding-right: 5px">
                          RREO - RELATÓRIO RESUMIDO DA EXECUÇÃO
                          ORÇAMENTÁRIA</strong
                        >
                      </div>
                      <div
                        class="col-md-4"
                        style="padding-left: 15px; font-size: 14px"
                      >
                        <i class="bi bi-calendar-check-fill"></i> 2º
                        BIMESTRE/2022
                        <span class="lrfDataExercicio" style="float: right">
                          <i
                            style="padding-left: 10px"
                            class="bi bi-calendar3"
                          ></i>
                          25/05/2022
                        </span>
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  class="list-group"
                  style="margin-bottom: 5px; margin-top: 5px"
                >
                  <a href="#" class="list-group-item">
                    <div class="row">
                      <div
                        class="col-md-8"
                        style="line-height: 1.5; font-size: 14px"
                      >
                        <strong style="padding-right: 5px">
                          RGF - RELATÓRIO DE GESTÃO FISCAL</strong
                        >
                      </div>
                      <div
                        class="col-md-4"
                        style="padding-left: 15px; font-size: 14px"
                      >
                        <i class="bi bi-calendar-check-fill"></i> 1°
                        QUADRIMESTRE/2022
                        <span class="lrfDataExercicio" style="float: right">
                          <i
                            style="padding-left: 10px"
                            class="bi bi-calendar3"
                          ></i>
                          25/05/2022
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-12">
                <a href="#" class="btn btn-success d-block w-100 mb-3">
                  <font-awesome-icon icon="fa-solid fa-file-circle-plus" /> Ver
                  todos os Videos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-----End Publicao LRF----->

    <!--- Publicao como tal----->

        <section class="container aos-init aos-animate" data-aos="fade-up">
            <div class="section-title">
                <h2>PUBLICAÇÕES</h2>
                <h3>Informações das <span>últimas publicações</span></h3>

            </div>

            <div class="row aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                <div class="col-md-6">
                    <div class="card" style="padding: 8px 0 10px 0;">
                        <ul class="nav nav-tabs" role="tablist" style=" padding-left: 10px;">
                            <li class="active button hvr-sweep-to-right rounded float-start" style="padding:10px 15px; font-size: 14px;" rel="#lrfs"> <i class="bi bi-file-earmark-plus-fill"></i> PORTARIAS</li>
                            <li class="button hvr-sweep-to-right rounded float-start" style="padding:10px 15px; font-size: 14px;" rel="#rreo"> <i class="bi bi-file-earmark-plus-fill"></i> DIÁRIAS</li>



                        </ul>
                        <div id="tab-flex-column" class="tab-content tab-space">
                            <div class="tab-pane active" style="width: 100%; padding-right: 15px; padding-left: 15px;">
                                <div class="list-group" style="margin-bottom: 5px; margin-top: 5px;">
                                    <a href="#" class="list-group-item">
                                        <div class="row">
                                            <div class="col-md-12" style="line-height: 1.500;">
                                                <strong style="padding-right: 5px; padding-left: 5px; font-size: 14px;"> EXONERAÇÃO: 03.10.01/2022 </strong> <button type="button" class="btn btn-danger" style="padding:2px 15px; font-size: 10px; margin-top:-5px;">NOVO</button>
                                                <p style="padding-right: 5px; padding-left: 5px; font-size: 13px;">Exoneração, Agente: Barbara Xavier de Andrade, Cargo: Coordenação de Proteção Social e Especial, Secretaria: Secretaria de Infraestrutura e Urbanismo</p>

                                            </div>
                                            <div class="col-md-12" style=" font-size: 14px; margin-top:-10px;">
                                                <span>
                                                    <i style="padding-left: 5px;" class="bi bi-calendar3"></i> 30/09/2022

                                                </span>
                                            </div>

                                        </div>

                                    </a>
                                </div>

                                <div class="list-group" style="margin-bottom: 5px; margin-top: 5px;">
                                    <a href="#" class="list-group-item">
                                        <div class="row">
                                            <div class="col-md-12" style="line-height: 1.500;">
                                                <strong style="padding-right: 5px; padding-left: 5px; font-size: 14px;"> EXONERAÇÃO: 03.10.01/2022 </strong>
                                                <p style="padding-right: 5px; padding-left: 5px; font-size: 13px;">Exoneração, Agente: Barbara Xavier de Andrade, Cargo: Coordenação de Proteção Social e Especial, Secretaria: Secretaria de Infraestrutura e Urbanismo</p>

                                            </div>
                                            <div class="col-md-12" style=" font-size: 14px; margin-top:-10px;">
                                                <span>
                                                    <i style="padding-left: 5px;" class="bi bi-calendar3"></i> 30/09/2022

                                                </span>
                                            </div>

                                        </div>

                                    </a>
                                </div>

                                <div class="list-group" style="margin-bottom: 5px; margin-top: 5px;">
                                    <a href="#" class="list-group-item">
                                        <div class="row">
                                            <div class="col-md-12" style="line-height: 1.500;">
                                                <strong style="padding-right: 5px; padding-left: 5px; font-size: 14px;"> EXONERAÇÃO: 03.10.01/2022 </strong>
                                                <p style="padding-right: 5px; padding-left: 5px; font-size: 13px;">Exoneração, Agente: Barbara Xavier de Andrade, Cargo: Coordenação de Proteção Social e Especial, Secretaria: Secretaria de Infraestrutura e Urbanismo</p>

                                            </div>
                                            <div class="col-md-12" style=" font-size: 14px; margin-top:-10px;">
                                                <span>
                                                    <i style="padding-left: 5px;" class="bi bi-calendar3"></i> 30/09/2022

                                                </span>
                                            </div>

                                        </div>

                                    </a>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <a href="#" class="button hvr-sweep-to-right rounded float-start text-center" style="padding:10px 0px; font-size: 14px; width:98%;"><i class="bi bi-file-earmark-plus-fill"></i> Ver todas as Portarias</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card" style="padding: 8px 0 10px 0;">
                        <ul class="nav nav-tabs" role="tablist" style=" padding-left: 10px;">

                            <li class="button hvr-sweep-to-right rounded float-start" style="padding:10px 15px; font-size: 14px;" rel="#prgfin"> <i class="bi bi-file-earmark-plus-fill"></i> DECRETOS</li>
                            <li class="button hvr-sweep-to-right rounded float-start" style="padding:10px 15px; font-size: 14px;" rel="#ppa"> <i class="bi bi-file-earmark-plus-fill"></i> OUTRAS PUBLICAÇÕES</li>

                        </ul>
                        <div id="tab-flex-column" class="tab-content tab-space">
                            <div class="tab-pane active" style="width: 100%; padding-right: 15px; padding-left: 15px;">
                                <div class="list-group" style="margin-bottom: 5px; margin-top: 5px;">
                                    <a href="#" class="list-group-item">
                                        <div class="row">
                                            <div class="col-md-12" style="line-height: 1.500;">
                                                <strong style="padding-right: 5px; padding-left: 5px; font-size: 14px;"> EXONERAÇÃO: 03.10.01/2022 </strong> <button type="button" class="btn btn-danger" style="padding:2px 15px; font-size: 10px; margin-top:-5px;">NOVO</button>
                                                <p style="padding-right: 5px; padding-left: 5px; font-size: 13px;">Exoneração, Agente: Barbara Xavier de Andrade, Cargo: Coordenação de Proteção Social e Especial, Secretaria: Secretaria de Infraestrutura e Urbanismo</p>

                                            </div>
                                            <div class="col-md-12" style=" font-size: 14px; margin-top:-10px;">
                                                <span>
                                                    <i style="padding-left: 5px;" class="bi bi-calendar3"></i> 30/09/2022

                                                </span>
                                            </div>

                                        </div>

                                    </a>
                                </div>

                                <div class="list-group" style="margin-bottom: 5px; margin-top: 5px;">
                                    <a href="#" class="list-group-item">
                                        <div class="row">
                                            <div class="col-md-12" style="line-height: 1.500;">
                                                <strong style="padding-right: 5px; padding-left: 5px; font-size: 14px;"> EXONERAÇÃO: 03.10.01/2022 </strong>
                                                <p style="padding-right: 5px; padding-left: 5px; font-size: 13px;">Exoneração, Agente: Barbara Xavier de Andrade, Cargo: Coordenação de Proteção Social e Especial, Secretaria: Secretaria de Infraestrutura e Urbanismo</p>

                                            </div>
                                            <div class="col-md-12" style=" font-size: 14px; margin-top:-10px;">
                                                <span>
                                                    <i style="padding-left: 5px;" class="bi bi-calendar3"></i> 30/09/2022

                                                </span>
                                            </div>

                                        </div>

                                    </a>
                                </div>

                                <div class="list-group" style="margin-bottom: 5px; margin-top: 5px;">
                                    <a href="#" class="list-group-item">
                                        <div class="row">
                                            <div class="col-md-12" style="line-height: 1.500;">
                                                <strong style="padding-right: 5px; padding-left: 5px; font-size: 14px;"> EXONERAÇÃO: 03.10.01/2022 </strong>
                                                <p style="padding-right: 5px; padding-left: 5px; font-size: 13px;">Exoneração, Agente: Barbara Xavier de Andrade, Cargo: Coordenação de Proteção Social e Especial, Secretaria: Secretaria de Infraestrutura e Urbanismo</p>

                                            </div>
                                            <div class="col-md-12" style=" font-size: 14px; margin-top:-10px;">
                                                <span>
                                                    <i style="padding-left: 5px;" class="bi bi-calendar3"></i> 30/09/2022

                                                </span>
                                            </div>

                                        </div>

                                    </a>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <a href="#" class="button hvr-sweep-to-right rounded float-start text-center" style="padding:10px 0px; font-size: 14px; width:98%;"><i class="bi bi-file-earmark-plus-fill"></i> Ver todos os Decretos</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <!---End Plublicao ---->



    <!--- Plublicao de Licitacao--->

        <section class="container aos-init aos-animate" data-aos="fade-up">

            <div class="section-title">
                <h2>PUBLICAÇÕES</h2>
                <h3>Informações das <span>últimas licitações e contratos</span></h3>

            </div>

            <div class="row aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                <div class="col-md-6" id="licitacoes">
                    <div class="card" style="padding: 8px 0 10px 0;">
                        <ul class="nav nav-tabs" role="tablist" style=" padding-left: 10px;">
                            <li class="active button hvr-sweep-to-right rounded float-start" style="padding:10px 15px; font-size: 14px;" rel="#lrfs"> <i class="bi bi-file-earmark-plus-fill"></i> LICITAÇÕES</li>

                        </ul>
                        <div id="tab-flex-column" class="tab-content tab-space">
                            <div class="tab-pane active" style="width: 100%; padding-right: 15px; padding-left: 15px;">
                                <div class="list-group" style="margin-bottom: 5px; margin-top: 5px;">
                                    <a href="#" class="list-group-item">
                                        <div class="row">
                                            <div class="col-md-12" style="line-height: 1.500;">
                                                <strong style="padding-right: 5px; padding-left: 5px; font-size: 14px;"> INEXIGIBILIDADE: 0310.001/2022/2022 - MENOR PREÇO </strong> <button type="button" class="btn btn-danger" style="padding:2px 15px; font-size: 10px; margin-top:-5px;">NOVO</button>
                                                <p style="padding-right: 5px; padding-left: 5px; font-size: 13px;">CONTRATAÇÃO ARTISTICA CULTURAL DA BANDA NODA DE CAJÚ, PARA APRESENTAÇÃO NO DIA 12 DE NOVEMBRO DE 2022, NA FESTA DE ANIVERSÁRIO DE 137 ANOS DO MUNICIPIO DE MERUOCA-CE.</p>

                                            </div>
                                            <div class="col-md-12" style=" font-size: 14px; margin-top:-10px;">
                                                <span>
                                                    <i style="padding-left: 5px;" class="bi bi-calendar3"></i> Publicação: 03/10/2022


                                                </span>
                                            </div>

                                        </div>

                                    </a>
                                </div>

                                <div class="list-group" style="margin-bottom: 5px; margin-top: 5px;">
                                    <a href="#" class="list-group-item">
                                        <div class="row">
                                            <div class="col-md-12" style="line-height: 1.500;">
                                                <strong style="padding-right: 5px; padding-left: 5px; font-size: 14px;">DISPENSA: 0310.001/2022/2022 - MENOR PREÇO </strong>
                                                <p style="padding-right: 5px; padding-left: 5px; font-size: 13px;">LOCAÇÃO DE UM VENTILADOR MECÂNICO BIBAP (CONTÍNUO) E UM MONITOR DE PARÃMETROS COM OXÍMETRO DE PULSO, JUNTO A SECRETARIA DE SAÚDE DO MUNICÍPIO DE MERUOCA-CE.</p>

                                            </div>
                                            <div class="col-md-12" style=" font-size: 14px; margin-top:-10px;">
                                                <span>
                                                    <i style="padding-left: 5px;" class="bi bi-calendar3"></i> Publicação: 03/10/2022

                                                </span>
                                            </div>

                                        </div>

                                    </a>
                                </div>

                                <div class="list-group" style="margin-bottom: 5px; margin-top: 5px;">
                                    <a href="#" class="list-group-item">
                                        <div class="row">
                                            <div class="col-md-12" style="line-height: 1.500;">
                                                <strong style="padding-right: 5px; padding-left: 5px; font-size: 14px;"> DISPENSA: 3009.001/2022/2022 - MENOR PREÇO </strong>
                                                <p style="padding-right: 5px; padding-left: 5px; font-size: 13px;">PRESTAÇÃO DE SEVIÇO NO FORNECIMENTO DE ESPAÇO PARA REALIZAÇÃO DAS ATIVIDADES SOCIOEDUCARTIVAS DO SERVIÇO DE CONVIVÊNCIA E FORTALECIMENO DE VÍNCULOS, TODAS AS QUARTAS-FEIRAS, FICANDO EXCLUSIVO PARA SECRETARIA DE INCLUSÃO E PROMOÇÃO SOCIAL DO MUNICÍ [...]</p>

                                            </div>
                                            <div class="col-md-12" style=" font-size: 14px; margin-top:-10px;">
                                                <span>
                                                    <i style="padding-left: 5px;" class="bi bi-calendar3"></i> Publicação: 30/09/2022

                                                </span>
                                            </div>

                                        </div>

                                    </a>
                                </div>



                            </div>

                        </div>
                        <div class="col-md-12">
                            <a href="#" class="button hvr-sweep-to-right rounded float-start text-center" style="padding:10px 0px; font-size: 14px; width:98%;"><i class="bi bi-file-earmark-plus-fill"></i> Ver todas as Licitações</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6" id="contratos">
                    <div class="card" style="padding: 8px 0 10px 0;">
                        <ul class="nav nav-tabs" role="tablist" style=" padding-left: 10px;">
                            <li class="button hvr-sweep-to-right rounded float-start" style="padding:10px 15px; font-size: 14px;" rel="#rreo"> <i class="bi bi-file-earmark-plus-fill"></i> CONTRATOS</li>
                        </ul>
                        <div id="tab-flex-column" class="tab-content tab-space">
                            <div class="tab-pane active" style="width: 100%; padding-right: 15px; padding-left: 15px;">
                                <div class="list-group" style="margin-bottom: 5px; margin-top: 5px;">
                                    <a href="#" class="list-group-item">
                                        <div class="row">
                                            <div class="col-md-12" style="line-height: 1.500;">
                                                <strong style="padding-right: 5px; padding-left: 5px; font-size: 14px;"> INEXIGIBILIDADE: 0310.001/2022/2022 - MENOR PREÇO </strong> <button type="button" class="btn btn-danger" style="padding:2px 15px; font-size: 10px; margin-top:-5px;">NOVO</button>
                                                <p style="padding-right: 5px; padding-left: 5px; font-size: 13px;">CONTRATAÇÃO ARTISTICA CULTURAL DA BANDA NODA DE CAJÚ, PARA APRESENTAÇÃO NO DIA 12 DE NOVEMBRO DE 2022, NA FESTA DE ANIVERSÁRIO DE 137 ANOS DO MUNICIPIO DE MERUOCA-CE.</p>

                                            </div>
                                            <div class="col-md-12" style=" font-size: 14px; margin-top:-10px;">
                                                <span>
                                                    <i style="padding-left: 5px;" class="bi bi-calendar3"></i> Publicação: 03/10/2022


                                                </span>
                                            </div>

                                        </div>

                                    </a>
                                </div>

                                <div class="list-group" style="margin-bottom: 5px; margin-top: 5px;">
                                    <a href="#" class="list-group-item">
                                        <div class="row">
                                            <div class="col-md-12" style="line-height: 1.500;">
                                                <strong style="padding-right: 5px; padding-left: 5px; font-size: 14px;">DISPENSA: 0310.001/2022/2022 - MENOR PREÇO </strong>
                                                <p style="padding-right: 5px; padding-left: 5px; font-size: 13px;">LOCAÇÃO DE UM VENTILADOR MECÂNICO BIBAP (CONTÍNUO) E UM MONITOR DE PARÃMETROS COM OXÍMETRO DE PULSO, JUNTO A SECRETARIA DE SAÚDE DO MUNICÍPIO DE MERUOCA-CE.</p>

                                            </div>
                                            <div class="col-md-12" style=" font-size: 14px; margin-top:-10px;">
                                                <span>
                                                    <i style="padding-left: 5px;" class="bi bi-calendar3"></i> Publicação: 03/10/2022

                                                </span>
                                            </div>

                                        </div>

                                    </a>
                                </div>

                                <div class="list-group" style="margin-bottom: 5px; margin-top: 5px;">
                                    <a href="#" class="list-group-item">
                                        <div class="row">
                                            <div class="col-md-12" style="line-height: 1.500;">
                                                <strong style="padding-right: 5px; padding-left: 5px; font-size: 14px;"> DISPENSA: 3009.001/2022/2022 - MENOR PREÇO </strong>
                                                <p style="padding-right: 5px; padding-left: 5px; font-size: 13px;">PRESTAÇÃO DE SEVIÇO NO FORNECIMENTO DE ESPAÇO PARA REALIZAÇÃO DAS ATIVIDADES SOCIOEDUCARTIVAS DO SERVIÇO DE CONVIVÊNCIA E FORTALECIMENO DE VÍNCULOS, TODAS AS QUARTAS-FEIRAS, FICANDO EXCLUSIVO PARA SECRETARIA DE INCLUSÃO E PROMOÇÃO SOCIAL DO MUNICÍ [...]</p>

                                            </div>
                                            <div class="col-md-12" style=" font-size: 14px; margin-top:-10px;">
                                                <span>
                                                    <i style="padding-left: 5px;" class="bi bi-calendar3"></i> Publicação: 30/09/2022

                                                </span>
                                            </div>

                                        </div>

                                    </a>
                                </div>



                            </div>
                            <div class="col-md-12">
                                <a href="#" class="button hvr-sweep-to-right rounded float-start text-center" style="padding:10px 0px; font-size: 14px; width:98%;"><i class="bi bi-file-earmark-plus-fill"></i> Ver todos os Contratos</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <!---- End Publicao de licitações  ---->

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
:root {
  font-family: "Open Sans", sans-serif;
  color: #444444;
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

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Roboto", sans-serif;
}

.section-title h3 span {
  color: #da4849;
}

*,
::after,
::before {
  box-sizing: border-box;
}

.section-title h3 {
  font-size: 32px;
  font-weight: 700;
}

.section-title {
  text-align: center;
}

.section-bg {
  background-color: #f6f9fe;
}

section {
  padding: 60px 0;
  overflow: hidden;
}
</style>
