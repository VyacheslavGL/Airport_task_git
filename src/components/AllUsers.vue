<template>
    <v-container>
        <v-card
                class="mx-auto"
                max-width="900"
                outlined
        >
            <v-card-title>
                Сотрудники
                <v-spacer/>
                <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Введите ФИО сотрудника"
                        single-line
                        hide-details
                />
            </v-card-title>

            <v-data-table
                    :headers="headers"
                    :items="$store.state.users"
                    :search="search"
                    :footer-props="{
                         'items-per-page-options': [10, 20, 30, 40, 50]
                     }"
                    :custom-sort="customSort"
                    @click:row="clicked"
            >

                <template v-slot:item.image="{ item }">
                    <div class="p-2">
                        <v-img :src="item.picture.medium" height="100px" width="100px" alt="User Photo"/>
                    </div>
                </template>

                <template slot="items" scope="{ item }">
                    <td>{{ item.image }}</td>
                    <td>{{ item.fullName }}</td>
                    <td>{{ item.birthday }}</td>
                </template>

                <template v-slot:no-data>
                    <v-alert :value="true" color="error" icon="mdi-alert-outline">Извините, здесь нечего показывать :(
                    </v-alert>
                </template>

                <template v-slot:no-results>
                    <v-alert
                            :value="true"
                            color="error"
                            icon="mdi-alert-outline"
                    >Ваш поиск по запросу "{{ search }}" не дал никаких результатов.
                    </v-alert>
                </template>
            </v-data-table>
        </v-card>
    </v-container>
</template>

<script>

    import {ADD_USER_INFO} from "../store/action.types";

    export default {
        name: "AllUsersNew",
        data: () => ({
            expanded: ['Donut'],
            search: '',
            headers: [
                {
                    text: 'Фото',
                    align: 'left',
                    sortable: false,
                    value: 'image',
                },
                {text: 'ФИО', value: 'fullName'},
                {text: 'Дата рождения', value: 'birthday'},
            ],
            propsUser: [],
        }),
        methods: {
            clicked(value) {
                this.$store.dispatch(ADD_USER_INFO, value);
                this.$router.push({name: 'user', params: {name: value.fullName}});
                this.expanded.push(value)
            },
            customSort(items, index, isDescending) {
                items.sort((a, b) => {
                    if (index[0] === 'birthday') {
                        if (isDescending[0] !== false) {
                            return Date.parse(a.dob.date) <= Date.parse(b.dob.date) ? -1 : 1;
                        } else {
                            return Date.parse(b.dob.date) <= Date.parse(a.dob.date) ? -1 : 1;
                        }
                    } else {
                        if (isDescending[0] === false) {
                            return a[index] < b[index] ? -1 : 1;
                        } else {
                            return b[index] < a[index] ? -1 : 1;
                        }
                    }
                });

                return items;
            },
        },
    }
</script>

<style scoped>

</style>