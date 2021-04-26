<template>
  <div>
    <div class="main__table">
      <v-data-table
        :headers="headers"
        :items="elements"
        class="elevation-1"
        hide-default-footer
        :page.sync="page"
        :items-per-page="itemsPerPage"
        @page-count="pageCount = $event"
        dense
      >
        <template v-slot:header>
          <tbody class="header-body">
            <tr>
              <th>
                <v-text-field dense outlined></v-text-field>
              </th>
              <th>
                <v-select
                  class="th__select"
                  dense
                  outlined
                  label="Все"
                ></v-select>
              </th>
              <th><v-text-field dense outlined></v-text-field></th>
              <th>
                <v-text-field
                  outlined
                  v-model="message1"
                  clearable
                  dense
                ></v-text-field>
              </th>
              <th><v-text-field dense outlined></v-text-field></th>
              <th><v-text-field dense outlined></v-text-field></th>
              <th>...</th>
              <th>...</th>
              <th class="calendar">
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      outlined
                      dense
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    color="var(--v-accent-base)"
                    v-model="date"
                    @input="menu2 = false"
                  ></v-date-picker>
                </v-menu>
              </th>
              <th>
                <v-select
                  class="th__select"
                  outlined
                  dense
                  label="Все"
                ></v-select>
              </th>
              <th>
                <v-text-field
                  outlined
                  v-model="message2"
                  clearable
                  dense
                ></v-text-field>
              </th>
              <th>
                <v-select
                  class="th__select"
                  dense
                  outlined
                  label="Все"
                ></v-select>
              </th>
              <th><v-text-field dense outlined></v-text-field></th>
            </tr>
          </tbody>
        </template>
      </v-data-table>
    </div>
    <div class="text-center pt-2">
      <v-pagination
        color="#B1B7C1"
        v-model="page"
        :length="pageCount"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 20,
      message1: " ",
      message2: " ",
      date: new Date().toISOString().substr(0, 10),
      menu2: false,
      element: {
        id: "714",
        status: "принята",
        address: "Сарыарқа проспект, 16",
        location: "...",
        location_num: "12",
        phone: "+7 (444) 444 44 44",
        description: "Текст описания",
        creation_date: "04.03.2021, 10:33:09",
        timing: "13:29:54",
        categories: "Лифтовое оборудование",
        worker: "Иванов Василий",
        sum: "Стоимость",
        grade: "0",
        accepted: "1",
      },
      element2: {
        id: "715",
        status: "не принята",
        address: "Сарыарқа проспект, 16",
        location: "...",
        location_num: "12",
        phone: "+7 (444) 444 44 44",
        description: "Текст описания",
        creation_date: "04.03.2021, 10:33:09",
        timing: "13:29:54",
        categories: "Лифтовое оборудование",
        worker: "Иванов Василий",
        sum: "Стоимость",
        grade: "0",
        accepted: "0",
      },
      elements: [],
    };
  },
  components: {},
  computed: {
    headers() {
      return [
        {
          text: "№ ID",
          align: "start",
          sortable: false,
          value: "id",
        },
        {
          text: "Статус",
          value: "status",
          sortable: false,
        },
        { text: "Адрес", sortable: false, value: "address" },
        { text: "Помещение", sortable: false, value: "location" },
        { text: "№ помещ.", sortable: false, value: "location_num" },
        { text: "Тел. заявителя", sortable: false, value: "phone" },
        { text: "Описание", sortable: false, value: "description" },
        { text: "Дата создания", sortable: false, value: "creation_date" },
        { text: "Срок исполнения", sortable: false, value: "timing" },
        { text: "Категория работ", sortable: false, value: "categories" },
        { text: "Исполнитель", sortable: false, value: "worker" },
        { text: "Стоимость", sortable: false, value: "sum" },
        { text: "Оценка", sortable: false, value: "grade" },
      ];
    },
  },
  mounted() {
    this.elements = [];
    for (let i = 0; i < 3; i++) {
      this.elements.push(this.element);
    }
    for (let i = 0; i < 6; i++) {
      this.elements.push(this.element2);
    }
    for (let i = 0; i < 2; i++) {
      this.elements.push(this.element);
    }
    for (let i = 0; i < 89; i++) {
      this.elements.push(this.element2);
    }
  },
};
</script>

<style lang="scss">
.main__table {
  width: 100%;
  display: flex;
  justify-content: center;
  overflow-x: scroll;
  .v-data-table {
    width: 98% !important;
    .v-data-table__wrapper {
      table {
        thead,
        tbody,
        tfoot {
          tr {
            th {
              font-size: 9px !important;
            }
            td {
              font-size: 9px !important;
            }
          }
        }
        thead {
          tr {
            th {
              padding-left: 6px;
              padding-right: 2px;
              &:nth-child(1),
              &:nth-child(13) {
                width: 0% !important;
              }
              &:nth-child(2),
              &:nth-child(5),
              &:nth-child(7),
              &:nth-child(8),
              &:nth-child(11),
              &:nth-child(12) {
                width: 7%;
              }
              &:nth-child(3) {
                width: 12%;
              }
              &:nth-child(4),
              &:nth-child(6),
              &:nth-child(9),
              &:nth-child(10) {
                width: 10%;
              }
            }
          }
        }
        tbody {
          th {
            padding-top: 4px;
            vertical-align: middle;
            border-bottom: 1px solid #d8dbe0;
            margin-bottom: 4px;
            padding-left: 2px;
            padding-right: 2px;
          }

          .th__select .v-input__slot {
            height: 33px !important;
          }
        }
      }
    }
    .mdi-menu-down::before {
      height: 20px;
      width: 0px;
    }

    .mdi-close::before {
      height: 20px;
      width: 0px;
    }

    .v-icon {
      font-size: 15px;
    }
  }

  .v-input {
    height: 36px;
    &__slot {
      min-height: 2vh !important;
      font-size: 10px !important;
      border-color: #d8dbe0 !important;
      fieldset {
        border-color: #d8dbe0;
      }
    }
    .v-label {
      font-size: 10px !important;
      top: 25%;
    }
  }
}

.header-body {
  border-bottom: 1px solid;
}
</style>
