<template>
  <div class="wrapper">
    <div class="portfolio-photo"></div>
    <div class="container">
      <Header/>
      <div class="wrapper">
        <div class="inner">
          <AboutMe/>
          <Contact/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import Header from "@/components/Header";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
export default {
  name: 'App',
  components: {Contact, AboutMe, Header}
}
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    height: 100%;
  }

  .inner {
    /*height: 100%;*/
    margin: auto;
    max-width: 600px;
  }

  .portfolio-photo {
    display: none;

    @media (min-width: $tablet-width) {
      display: block;
      width: 50vw;
      height: 100vh;
      background-color: #006654;
      background-image: url("./assets/images/portfolio_photo@1.jpg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

      @media (min-resolution: $retina-dpi), (min-resolution: $retina-dppx) {
        background-image: url("./assets/images/portfolio_photo@2.jpg");
        background-size: cover;
      }
    }
  }

  .container {
    min-width: 320px;
    margin: 0 auto;
    padding: 20px;
    position: relative;

    @media (min-width: $tablet-width) {
      min-width: 50vw;
  }
}
</style>
