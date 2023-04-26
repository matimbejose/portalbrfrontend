<template>
  <div class="main">
    <!-- ======= Contato ======= -->
    <section id="contato" class="contato" style="padding: 30px 0px 30px">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="contact-left-content">
              <div class="contact-address">
                <div
                  class="contact-address-details d-flex align-items-center mb-3"
                >
                  <div class="address-icon text-center">
                    <font-awesome-icon
                      class="IconFooter"
                      icon="fa-solid fa-location-dot"
                    />
                  </div>
                  <div class="address-details">
                    <li class="mb-0">
                      Endereço:VENIDA PEDRO SAMPAIO, Nº 385 DIVINO SALVADOR,
                      CEP: 62130-000
                    </li>
                  </div>
                </div>

                <div
                  class="contact-address-details d-flex align-items-center mb-3"
                >
                  <div class="address-icon text-center">
                    <font-awesome-icon
                      class="IconFooter"
                      icon="fa-solid fa-envelope"
                    />
                  </div>
                  <div class="address-details">
                    <li class="mb-0">E-Mail: gabinete@meruoca.ce.gov.br</li>
                  </div>
                </div>

                <div
                  class="contact-address-details d-flex align-items-center mb-3"
                >
                  <div class="address-icon text-center">
                    <font-awesome-icon
                      class="IconFooter"
                      icon="fa-solid fa-phone"
                    />
                  </div>
                  <div class="address-details">
                    <li class="mb-0">Telefone: (88) 3649-1136</li>
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
.col-md-6 {
  flex: 0 0 auto;
  width: 50%;
}

#contato .container {
  position: relative;
}

.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);
}

.contact-address-details {
  width: 100%;
  margin-bottom: 15px;
  padding-bottom: 25px;
  display: inline-block;
  border-bottom: 1px solid #fff;
}

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

.text-center {
  text-align: center !important;
}

.address-details li {
  font-size: 20px;
  color: #fff;
  display: block;
}

.IconFooter {
  font-size: 30px;
  padding-right: 10px;
}
</style>