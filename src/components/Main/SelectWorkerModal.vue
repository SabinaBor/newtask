<template v-slot:default="dialog">
  <v-card>
    <v-toolbar class="select-worker__modal" color="white">
      <h1>Исполнители</h1>
      <BlackClose @click="closeDialog" />
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="3">
              <p>ФИО</p>
              <v-text-field outlined dense v-model="fio"></v-text-field>
            </v-col>
            <v-col cols="3">
              <p>Должность</p>
              <v-select
                outlined
                dense
                v-model="defaultSelected"
                :items="items"
                item-text="name"
                item-value="id"
              ></v-select>
            </v-col>
            <v-col cols="3">
              <p>Телефон</p>
              <v-text-field outlined dense v-model="phone"></v-text-field>
            </v-col>
            <v-col cols="3">
              <p>Текущие заявки</p>
              <v-text-field
                outlined
                dense
                v-model="applications"
              ></v-text-field>
            </v-col>
          </v-row>
          <div class="worker__list">
            <v-row v-for="(wk, id) in workers" :key="id + 333">
              <v-col cols="3">{{ wk.name }}</v-col>
              <v-col cols="3">{{ wk.work_type }}</v-col>
              <v-col cols="3">{{ wk.phone }}</v-col>
              <v-col cols="3">{{ wk.applications }}</v-col>
            </v-row>
          </div>
        </v-container>
      </v-form>
      <div class="select-worker__bottom">
        <v-btn @click="closeDialog" class="select-worker__btn" color="accent">Назначить</v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import BlackClose from "../../assets/svg/blackclose.svg";

export default {
  name: "Dialog",
  components: { BlackClose },
  data() {
    return {
      fio: null,
      phone: "+7",
      applications: null,
      defaultSelected: {
        name: "Все",
        id: 1,
      },
      items: [
        {
          name: "Все",
          id: 1,
        },
      ],
      workers: [
        {
          name: "Кусаинова Бахрам",
          work_type: "Сантехник",
          phone: "+7 777 654 32 10",
          applications: "3 заявки",
          chosen: 0,
        },
        {
          name: "Дарадур Николай",
          work_type: "Электрик",
          phone: "+7 777 654 32 10",
          applications: "3 заявки",
          chosen: 0,
        },
        {
          name: "Сыздыков Аскар",
          work_type: "Сантехник",
          phone: "+7 777 654 32 10",
          applications: "2 заявки",
          chosen: 0,
        },
        {
          name: "Матаев Амангельды",
          work_type: "Электрик",
          phone: "+7 777 654 32 10",
          applications: "2 заявки",
          chosen: 0,
        },
        {
          name: "Жунусов Нурлан",
          work_type: "Сантехник",
          phone: "+7 777 654 32 10",
          applications: "1 заявки",
          chosen: 1,
        },
        {
          name: "Каримов Толеугали",
          work_type: "Сантехник",
          phone: "+7 777 654 32 10",
          applications: "1 заявки",
          chosen: 1,
        },
        {
          name: "Сармантаев Махмут",
          work_type: "Сантехник",
          phone: "+7 777 654 32 10",
          applications: "1 заявки",
          chosen: 0,
        },
        {
          name: "Кущанов Таскара",
          work_type: "Электрик",
          phone: "+7 777 654 32 10",
          applications: "1 заявки",
          chosen: 0,
        },
        {
          name: "Сагандыков Жанабай",
          work_type: "Электрик",
          phone: "+7 777 654 32 10",
          applications: "1 заявки",
          chosen: 1,
        },
        {
          name: "Кущанов Таскара",
          work_type: "Электрик",
          phone: "+7 777 654 32 10",
          applications: "1 заявки",
          chosen: 0,
        },
      ],
    };
  },
  methods: {
    closeDialog() {
      this.$emit('dialogClosed', false);
    }
  },
  mounted() {
    for(let i = 0; i < this.workers.length; i++){
      if(this.workers[i].chosen == 1){
        document.querySelectorAll(".worker__list .row")[i].classList.add("chosen");
      }
    }
  }
};
</script>

<style lang="scss">
.select-worker__modal {
  position: relative;
  .v-toolbar__content {
    align-items: center;
  }
  h1 {
    font-weight: 300;
    font-size: 3vh !important;
  }
  svg {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
}

.v-form {
  p {
    font-size: 2vh;
  }
}

.worker__list {
  border-bottom: 1px solid #f1f1f1;
  height: 50vh;
  overflow-y: scroll;
  margin-bottom: 3%;
  .row {
    border-bottom: 1px solid #f1f1f1;
    padding: 0 4px;
    .col {
      font-size: 1.7vh !important;
    }
    &:first-child, &:nth-child(2){
      padding-top: 12px;
      padding-bottom: 12px;
    }
  }
}

.select-worker__bottom {
  display: flex;
  justify-content: flex-end;
}

.chosen {
  background: #F0F0F0;
}
</style>
