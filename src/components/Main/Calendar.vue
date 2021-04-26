<template>
  <v-menu
    v-model="menu2"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn outlined v-bind="attrs" v-on="on"
        ><span v-if="date">{{ date }}</span
        ><span v-if="!date">гг-мм-дд</span><CalIcon
      /></v-btn>
    </template>
    <v-date-picker color="var(--v-accent-base)" v-model="date" @input="menu2 = false"></v-date-picker>
  </v-menu>
</template>

<script>
import CalIcon from "../../assets/svg/calendar.svg";
export default {
  name: "Calendar",
  props: ["date"],
  components: {
    CalIcon,
  },
  data() {
    return {
      menu2: false,
    };
  },
};
</script>

<style scoped>
button {
  background: #fefefe!important;
  border-color: #d8dbe0!important;
  color: #4f5d73!important;
  font-weight: 300!important;
  font-size: 1.5vh!important;
  width: 20vh!important;
}

button span:first-child {
    margin-right: 2vh;
}
</style>
