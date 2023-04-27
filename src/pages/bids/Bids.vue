<template>
  <div class="content">

    <HeaderComponentVue />
     <!-- ======= PRIMEIRO BLOCO DE MENUS  =======  -->
    <section id="menu" class="featured-services" style="padding: 60px 0 30px 0">
      <div class="container aos-init aos-animate" data-aos="fade-up">
        <div class="container">
          <center>
            <div class="row">
              <div class="col-6 col-sm">
                <a href="licitacaolista">
                  <div
                    class="icon-box aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div class="icon">
                      <i class="fa fa-gavel" aria-hidden="true"></i>
                    </div>
                    <h3 class="title">Licitações</h3>
                  </div>
                </a>
              </div>
              <div class="col-6 col-sm">
                <a href="dispensaeinexigibilidade">
                  <div
                    class="icon-box aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div class="icon">
                    <i class="fa fa-envelope-open-o" aria-hidden="true"></i>
                    </div>
                    <h4 class="title">Dispensas e inexigibilidade</h4>
                  </div>
                </a>
              </div>
              <div class="col-6 col-sm">
                <a href="atodeadesao">
                  <div
                    class="icon-box aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div class="icon">
                      <i class="fa fa-folder-open" aria-hidden="true"></i>
                    </div>
                    <h2 class="title">Ato de Adesão</h2>
                  </div>
                </a>
              </div>
              <div class="col-6 col-sm">
                <a href="chamamento">
                  <div
                    class="icon-box aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div class="icon"><i class="fa fa-users" aria-hidden="true"></i></div>
                    <h4 class="title">Chamamento Público</h4>
                  </div>
                </a>
              </div>
            </div>
          </center>
        </div>
      </div>
    </section>

     <!-- /PRIMEIRO BLOCO DE MENUS  -->


 <!-- ======= SEGUNDO BLOCO DE MENUS =======  -->
    <section id="menu" class="featured-services" style="padding: 0px 0 60px 0">
      <div class="container aos-init aos-animate" data-aos="fade-up">
        <div class="container">
          <center>
            <div class="row">
              <a href="contratos"> </a>
              <div class="col-6 col-sm">
                <a href="contratos">
                  <div
                    class="icon-box aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <div class="icon"><i class="fa fa-book" aria-hidden="true"></i></div>
                    <h3 class="title">Contratos</h3>
                  </div>
                </a>
              </div>
              <div class="col-6 col-sm">
                <a href="inidoneas">
                  <div
                    class="icon-box aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <div class="icon">
                      <i class="fa fa-lock" aria-hidden="true"></i>
                    </div>
                    <h4 class="title">Suspensas</h4>
                  </div>
                </a>
              </div>
              <div class="col-6 col-sm">
                <a href="atasregistro">
                  <div
                    class="icon-box aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="700"
                  >
                    <div class="icon">
                      <i class="fa fa-file" aria-hidden="true"></i>
                    </div>
                    <h2 class="title">Atas de Registro de Preço</h2>
                  </div>
                </a>
              </div>
              <div class="col-6 col-sm">
                <a href="lei14133">
                  <div
                    class="icon-box aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="800"
                  >
                    <div class="icon">
                      <i class="fa fa-check-square" aria-hidden="true"></i>
                    </div>
                    <h4 class="title">Contratação Direta</h4>
                  </div>
                </a>
              </div>
            </div>
          </center>
        </div>
      </div>
    </section>
     <!-- /SEGUNDO BLOCO DE MENUS   -->
  </div>
</template>



<script>
import HeaderComponentVue from '../../components/HeaderComponent.vue';

export default {
  name: "Bids",
  components: {
    HeaderComponentVue
    },

  data() {},
  methods: {},

  mounted() {},
};
</script>



<style>
@import url("Style.css");
</style>