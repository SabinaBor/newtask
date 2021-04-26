<template>
  <div class="main__top__content">
    <v-dialog v-model="dialog" max-width="750" max-height="100%">
      <template v-slot:activator="{ on, attrs }">
        <v-btn outlined class="mr-5" v-bind="attrs" v-on="on"
          ><Plus class="mx-2" />СОЗДАТЬ</v-btn
        >
      </template>
      <CreateModal @dialogClosed="closeDialog" />
    </v-dialog>
    <div class="main__top__calendar">
      <p>от</p>
      <Calendar :date="date" />
    </div>
    <div class="main__top__calendar">
      <p>до</p>
      <Calendar :date="date" />
    </div>
    <Search class="mr-5" />
    <v-btn class="remove__filter__btn" outlined>Сбросить фильтр</v-btn>
    <v-btn outlined><Excel class="mr-2" />Экспорт</v-btn>
  </div>
</template>

<script>
import Plus from "../../assets/svg/plus.svg";
import Search from "../../assets/svg/search.svg";
import Calendar from "./Calendar";
import Excel from "../../assets/svg/excel.svg";
import CreateModal from "./CreateModal";
export default {
  name: "Top",
  components: {
    Plus,
    Calendar,
    Search,
    Excel,
    CreateModal,
  },
  data() {
    return {
      date: null,
      menu: false,
      modal: false,
      menu2: false,
      modalOpened: false,
      dialog: false,
    };
  },
  methods: {
    openModal() {
      this.modalOpened = true;
    },
    closeDialog(val) {
      this.dialog = val;
    },
  },
};
</script>

<style scoped>
button {
  background: var(--v-accent-base) !important;
  color: var(--v-text-base) !important;
  font-size: 1.5vh !important;
  text-transform: none !important;
  border-color: var(--v-accent-base) !important;
}

.main__top__content {
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.main__top__calendar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main__top__calendar p {
  margin: 0 2vh 0 0;
}

.remove__filter__btn {
  background: none !important;
  border-color: var(--v-accent-base) !important;
  color: var(--v-accent-base) !important;
}
</style>
