<template v-slot:default="dialog">
  <v-card>
    <v-toolbar class="modal__header" color="background">
      <v-btn id="btnfirst" class="active" color="#F5F5F5" @click="activeBtn(0)"
        >Заявка от жителя</v-btn
      >
      <v-btn id="btnsecond" color="#F5F5F5" @click="activeBtn(1)"
        >Внутренняя заявка</v-btn
      >
      <BlackClose @click="closeDialog" />
    </v-toolbar>
    <v-card-text>
      <v-form v-if="btn1Active">
        <v-container>
          <v-row>
            <v-col cols="4">
              <p>Телефон заявителя</p>
              <v-text-field
                outlined
                dense
                v-model="phone"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="5">
              <p>Дополнительный телефон</p>
              <v-text-field outlined dense v-model="extra_phone"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <p>Адрес</p>
              <v-select
                outlined
                dense
                v-model="defaultSelected1"
                :items="address"
                item-text="name"
                item-value="id"
                required
              ></v-select>
            </v-col>
            <v-col cols="4">
              <p>Тип помещения</p>
              <v-select
                outlined
                dense
                v-model="defaultSelected2"
                :items="location_type"
                item-text="name"
                item-value="id"
                required
              ></v-select>
            </v-col>
            <v-col cols="4">
              <p>Номер помещения</p>
              <v-text-field
                outlined
                dense
                v-model="location_number"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <p>Категории работ</p>
              <div class="categories">
                <v-btn
                  @click="chooseCategory(id)"
                  v-for="(item, id) in categories.slice(0, 6)"
                  :key="id"
                  >{{ item }}</v-btn
                >
                <Expand v-if="!expanded" @click="expanded = true" />
                <template v-if="expanded">
                  <v-btn
                    @click="chooseCategory(id + 6)"
                    v-for="(item, id) in categories.slice(6)"
                    :key="id + 6"
                    >{{ item }}</v-btn
                  >
                </template>
              </div>
              <v-textarea solo></v-textarea>
            </v-col>
            <v-col cols="12">
              <div class="btn-group">
                <v-dialog
                  v-model="dialog2"
                  class="select-worker__dialog"
                  max-width="600"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on"
                      ><WorkerSelect />Назначить исполнителя</v-btn
                    >
                  </template>
                  <SelectWorkerModal @dialogClosed="closeDialog2" />
                </v-dialog>
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on"
                      ><ChooseDate /> {{ worker_date }}</v-btn
                    >
                  </template>
                  <v-list class="select-date__menu">
                    <v-subheader>Срок исполнения <BlackClose /></v-subheader>
                    <v-list-item
                      v-for="(dt, index) in dates"
                      :key="index + 222"
                    >
                      <v-list-item-title>{{ dt }}</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-btn> <ChooseDate /> Выберите дату </v-btn>
                    </v-list-item>
                  </v-list>
                </v-menu>

                <v-checkbox v-model="checkbox" label="Платная"></v-checkbox>
              </div>
              <div class="content-group">
                <v-btn v-for="(worker, id) in worker_names" :key="id + 111"
                  >{{ worker }} <RedClose
                /></v-btn>
              </div>
            </v-col>
          </v-row>
          <div class="modal__bottom">
            <v-file-input
              truncate-length="15"
              label="Прикрепить"
              class="file__input"
              outlined
            ></v-file-input>
            <v-btn @click="closeDialog" color="accent">Сохранить</v-btn>
          </div>
        </v-container>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import Expand from "../../assets/svg/expand.svg";
import RedClose from "../../assets/svg/redclose.svg";
import BlackClose from "../../assets/svg/blackclose.svg";
import WorkerSelect from "../../assets/svg/workerselect.svg";
import ChooseDate from "../../assets/svg/choosedate.svg";
import SelectWorkerModal from "./SelectWorkerModal";

export default {
  name: "Dialog",
  components: {
    Expand,
    RedClose,
    BlackClose,
    WorkerSelect,
    ChooseDate,
    SelectWorkerModal,
  },
  data() {
    return {
      phone: "+7 777 654 32 10",
      extra_phone: "+7",
      location_number: "60",
      btn1Active: true,
      btn2Active: false,
      expanded: false,
      chosen_date: null,
      menu3: false,
      worker_date: "12 апреля 2021",
      checkbox: null,
      dialog2: false,
      defaultSelected1: {
        name: "Жанибек Керей хандар 16",
        id: 1,
      },
      address: [
        {
          name: "Жанибек Керей хандар 16",
          id: 1,
        },
        {
          name: "Жанибек Керей хандар 17",
          id: 2,
        },
        {
          name: "Жанибек Керей хандар 18",
          id: 3,
        },
      ],
      defaultSelected2: {
        name: "Квартира",
        id: 1,
      },
      location_type: [
        {
          name: "Квартира",
          id: 1,
        },
        {
          name: "Жилой дом",
          id: 2,
        },
        {
          name: "Офис",
          id: 3,
        },
      ],
      categories: [
        "Сантехника",
        "Электрика",
        "Уборка",
        "Благоустройство",
        "Отопление",
        "Домофон",
        "Гарантийные работы",
        "Видеонаблюдение",
        "Ремонтные работы",
        "Вентиляция",
        "Плотнические работы",
        "Дезинфекция и дератизация",
        "Пожарная безопасность",
        "Лифтовое оборудование",
        "Охрана",
        "Прочее",
      ],
      worker_names: [
        "Жунусов Нурлан",
        "Каримов Толеугали",
        "Сагандыков Жанабай",
      ],
      dates: ["Сегодня", "Завтра", "6 апреля", "7 апреля", "8 апреля"],
    };
  },
  methods: {
    activeBtn(id) {
      if (id == 0) {
        document.getElementById("btnfirst").classList.add("active");
        document.getElementById("btnsecond").classList.remove("active");
        this.btn1Active = true;
        this.btn2Active = false;
      } else {
        document.getElementById("btnsecond").classList.add("active");
        document.getElementById("btnfirst").classList.remove("active");
        this.btn1Active = false;
        this.btn2Active = true;
      }
    },
    closeDialog() {
      this.$emit("dialogClosed", false);
    },
    closeDialog2(val) {
      this.dialog2 = val;
    },
    chooseCategory(id) {
      for (let i = 0; i < this.categories.length; i++) {
        if (i != id) {
          document.querySelectorAll(".categories .v-btn")[i].classList.remove("activeCategory");
        } else {
          document.querySelectorAll(".categories .v-btn")[id].classList.add("activeCategory");
        }
      }
    },
  },
};
</script>

<style lang="scss">
.active {
  background: var(--v-accent-base) !important;
}
.v-toolbar {
  height: 9vh;
  box-shadow: none !important;
  &__content {
    align-items: flex-end;
    padding: 0px 16px !important;
    button {
      color: #fefefe !important;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      box-shadow: none !important;
      text-transform: none !important;
    }
    button:nth-child(2) {
      background: none !important;
      color: #8a93a2 !important;
    }
  }
}

.modal__header {
  position: relative;
  svg {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
}

.v-form {
  p {
    color: #363636;
    margin-bottom: 2%;
  }
  .row:first-child {
    .col {
      padding-bottom: 0;
    }
  }
  .row:nth-child(2) {
    .col {
      padding-top: 0;
      padding-bottom: 0;
    }
  }
  .v-text-field input,
  .v-select__selection--comma {
    font-size: 2vh !important;
    color: #4f5d73;
  }
  .v-input {
    &__slot {
      fieldset {
        border-color: #f1f1f1;
      }
    }
  }
  .categories {
    background: #f5f5f5;
    border-radius: 4px;
    button {
      box-shadow: none;
      background: #fefefe !important;
      margin: 1% !important;
      font-size: 1.7vh !important;
      font-weight: 350;
    }
  }

  .v-textarea {
    .v-input {
      &__slot {
        box-shadow: none !important;
        border: 1px solid #f1f1f1 !important;
        margin: 1% 0 !important;
      }
    }
  }
}

.btn-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  button,
  label {
    font-size: 1.7vh !important;
  }
  button {
    box-shadow: none !important;
    background: #fff !important;
    width: 30% !important;
    border-bottom-left-radius: 0%;
    border-bottom-right-radius: 0%;
    span {
      svg {
        margin-right: 3% !important;
      }
    }
  }
  button:first-child {
    background: #f5f5f5 !important;
    width: 40% !important;
  }
  .v-input {
    width: 30% !important;
  }
}
.content-group {
  background: #f5f5f5;
  margin-top: -2.4vh;
  button {
    box-shadow: none;
    background: #fefefe !important;
    margin: 1% !important;
    font-size: 1.7vh !important;
    font-weight: 350;
    span {
      svg {
        margin-left: 2% !important;
      }
    }
  }
}

.modal__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5%;
  .file__input {
    fieldset {
      border: none !important;
    }
  }
}

.activeCategory {
  border: 1px solid;
  border-color: #2EB85C;
}

.select-date__menu {
.v-subheader {
  font-size: 2.7vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    margin-left: 10%;
    cursor: pointer;
  }
}
.v-list-item {
  background: #F0F0F0;
  margin-bottom: 2px;
  padding: 0 25px;
  &:last-child {
    background: none;
    button {
      box-shadow: none;
      background: none;
      font-size: 2.5vh;
      font-weight: 400;
      color: #363636;
      width: 100%;
      padding: 0;
      span {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
}
</style>
