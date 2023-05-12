<template>
  <div class="main">
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