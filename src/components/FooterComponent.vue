<template>
  <div class="main">
    <!-- ======= Contato ======= -->
    <section id="contato">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="contact-left-content">
              <div class="section-title mb-4 text-left">
                <span class="subtitle text-uppercase"></span>
                <p></p>
              </div>
              <div class="contact-address">
                <div
                  class="contact-address-details d-flex align-items-center mb-3"
                >
                  <div class="address-icon text-center">
                    <font-awesome-icon
                      icon="fa-solid fa-location-dot"
                      style="font-size: 3em"
                    />
                  </div>
                  <div class="address-details ms-3">
                    <p class="mb-0" style="font-size: 20px">
                      Endereço:VENIDA PEDRO SAMPAIO, Nº 385 DIVINO SALVADOR,
                      CEP: 62130-000
                    </p>
                  </div>
                </div>
                <div
                  class="contact-address-details d-flex align-items-center mb-3"
                >
                  <div class="address-icon text-center">
                    <font-awesome-icon
                      icon="fa-solid fa-envelope"
                      style="font-size: 3em"
                    />
                  </div>
                  <div class="address-details ms-3">
                    <p class="mb-0" style="font-size: 20px">
                      E-Mail: gabinete@meruoca.ce.gov.br
                    </p>
                  </div>
                </div>
                <div
                  class="contact-address-details d-flex align-items-center mb-3"
                >
                  <div class="address-icon text-center">
                    <font-awesome-icon
                      icon="fa-solid fa-phone"
                      style="font-size: 45px"
                    />
                  </div>
                  <div class="address-details ms-3">
                    <p class="mb-0" style="font-size: 20px">
                      Telefone: (88) 3649-1136
                    </p>
                  </div>
                </div>
                <div class="contact-address-details d-flex align-items-center">
                  <div class="address-icon text-center">
                    <font-awesome-icon
                      icon="fa-solid fa-check"
                      style="font-size: 45px"
                    />
                  </div>
                  <div class="address-details ms-3">
                    <p class="mb-0" style="font-size: 20px">
                      CNPJ: 07.598.683/0001-70
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                class="img-fluid w-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.1908996922366!2d-40.45794497170903!3d-3.5433914349887212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7eae8b5a5960ef5%3A0xfb001c05102a76e1!2sPrefeitura%20Municipal%20de%20Meruoca!5e0!3m2!1spt-BR!2sbr!4v1666897166509!5m2!1spt-BR!2sbr"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- End Contato -->

    <div>
      <footer id="footer">
        <div class="container py-4">
          <div class="copyright">
            &copy; 2022
            <a
              style="color: #00a859 !important"
              href="https://plugwin.net/"
              target="_blank"
              ><strong><span>Plugwin Sistemas.</span></strong></a
            >
            Todos os direitos reservados
          </div>
        </div>
      </footer>
      <!-- End Footer -->
    </div>


  </div>
</template>


<script>
export default {
  name: "FooterComponent",
};
</script>



<style>
#contato {
    background-image: url(../assets/cidade.jpg);
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: multiply;
    color: white;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  </style>