<template>
  <section class="breadcrumbs">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <h2><span class="badge badge-success">PORTAL DE LICITAÇÕES</span></h2>
        <ol>
          <li>
            <a href="/">
              <font color="#fff">Inicio</font>
            </a>
          </li>
          <li>
            <a href="/">
              <font color="#fff">Acesso a Informação</font>
            </a>
          </li>
          <li>Portal de Licitações</li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script>
</script>
 
<style>
.breadcrumbs {
  padding: 20px 0;
  background-color: #da4849;
  min-height: 40px;
}

.breadcrumbs h2 {
  font-size: 26px;
  font-weight: 300;
  margin: 0;
  color: rgb(255, 255, 255);
}

.breadcrumbs ol {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 12px;
  color: rgb(245, 236, 1);
}

.breadcrumbs ol {
  list-style: none;
  font-size: 12px;
  color: rgb(245, 236, 1);
}

.breadcrumbs ol li + li {
  padding-left: 10px;
}

.breadcrumbs ol {
  list-style: none;
  font-size: 12px;
  color: rgb(245, 236, 1);
}

.breadcrumbs ol li + li::before {
  display: inline-block;
  padding-right: 10px;
  color: rgb(253, 253, 252);
  content: "/";
}

.align-items-center {
  align-items: center !important;
}

.justify-content-between {
  justify-content: space-between !important;
}

.container, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
  max-width: 1320px;
}
</style>