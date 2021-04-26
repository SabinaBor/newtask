<template>
  <v-app>
    <Header @clicked="onClickHeader" />
    <v-main>
      <MainPage v-if="page1Clicked" />
    </v-main>
  </v-app>
</template>

<script>
import MainPage from "./components/Main/MainPage";
import Header from "./components/Header/Header";

export default {
  name: "App",
  data(){
    return {
      page1Clicked: true,
    }
  },
  components: {
    MainPage,
    Header,
  },
  methods: {
    onClickHeader(pageClicked) {
      this.page1Clicked = pageClicked;
    }
  }
};
</script>

<style scoped>
.v-application {
  background-color: var(--v-background-base) !important;
}
.v-data-table > .v-data-table__wrapper > table > tbody > tr > th,
.v-data-table > .v-data-table__wrapper > table > thead > tr > th,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > th,
table.v-table thead th {
  font-size: 10px !important;
}
</style>
