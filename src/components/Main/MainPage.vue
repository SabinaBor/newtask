<template>
  <v-container>
    <v-row>
      <v-col xl="9" lg="9" md="12" sm="12" xs="12">
        <Top />
      </v-col>
      <v-col xl="12" lg="12" md="12" sm="12" xs="12">
        <MainTable />
      </v-col>
      <v-col xl="4" lg="4" md="6" sm="12" xs="12"></v-col>
    </v-row>
  </v-container>
</template>

<script>
import Top from "./Top";
import MainTable from "./MainTable";
// import CreateModal from "./CreateModal";
export default {
  name: "MainPage",
  components: {
    Top,
    MainTable,
    // CreateModal
  },
};
</script>

<style scoped>
.v-main__wrap {
  background: #e5e5e5;
}

.container {
  margin: 0;
  padding-left: 0;
  padding-right: 0;
  max-width: 100%;
}
</style>
