<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="light">
      <b-navbar-brand to="/">
        <img src="../../assets/img/logo.png" alt="">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <!--          <b-nav-item to="/">Home</b-nav-item>-->
          <b-nav-item to="/SomeForm">Some Form</b-nav-item>
          <b-nav-item to="/Location">Location</b-nav-item>
          <b-nav-item-dropdown :text="dropDown" right :style="styleObject">
            <b-dropdown-item to="/OficiuB" :style="linkColor">Oficiu ceva</b-dropdown-item>
            <b-dropdown-item to="/OficiuC" :style="linkColor">Oficiu altvceva</b-dropdown-item>
            <b-dropdown-item to="/CumFunctioneaza" :style="linkColor">Cum Functioneaza</b-dropdown-item>
            <b-dropdown-item to="/DespreNoi" :style="linkColor">Despre Noi</b-dropdown-item>
            <b-dropdown-item to="/ParerileClientilor" :style="linkColor">Parerile Clientilor</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/SearchFor">Search For</b-nav-item>
          <b-nav-item to="/Contact"> Contact</b-nav-item>

        </b-navbar-nav>

        <!-- Right aligned nav items -->
<!--        <b-navbar-nav class="ml-auto">-->
<!--          <b-nav-form>-->
<!--            <b-form-input size="sm" class="mr-sm-2" style="width: 40%" placeholder="Search"-->
<!--                         ></b-form-input>-->
<!--            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search-->
<!--            </b-button>-->
<!--          </b-nav-form>-->


<!--        </b-navbar-nav>-->
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      dropDown: 'INFORMATII UTILE',
      styleObject: {
        color: 'green',
        fontSize: '14px',
        fontWeight: 'normal'
      },
      linkColor: {
        fontSize: '14px',
        backgroundColor: 'transparent',
        transition: '0.2s',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        fontWeight: 'normal',
        // color: 'red'
      },

    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html {
  font-family: 'Open-sans', sans-serif;
}
img {
  height: 32px;
  width: 32px;
}
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0 50px;
}

li {
  display: inline-block;
  margin: 0 10px;
}

#nav a,
#nav a.active {
  /*color: black;*/
  color: #232323;
  /*position: relative;*/
  /*display: block;*/
  font-size: 14px;
  font-weight: normal;
  /*font-weight: 600;*/
  /*padding: 21px 0.5rem;*/
  letter-spacing: 0.9px;
  text-transform: uppercase;
  -webkit-transition-duration: 200ms;
  -o-transition-duration: 200ms;
  transition-duration: 200ms;
}

#nav a.exact {
  color: var(--green-2);
  font-size: 14px;
}

.navbar-toggler, .navbar-toggler:active, .navbar-toggler:hover {
  color: black;
  background-color: var(--clr-gr1-5);
  /*border-color: var(--clr-mc);*/
  /*border: var(--clr-mc) 2px solid;*/
  outline: none;
}

@media screen and (max-width: 1600px) {
  a.nav-link {
    font-size: 14px;
  }
}

@media screen and (max-width: 1366px) {
  a.nav-link {
    font-size: 12px;
  }
}

@media screen and (max-width: 768px) {
  a.nav-link {
    font-size: 11px;
  }
}
</style>
