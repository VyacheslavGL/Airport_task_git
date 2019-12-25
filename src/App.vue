<template>
    <v-app>
        <v-app-bar
                app
                color="primary"
                dark
        >
            <div class="hidden-sm-and-down">
                <div class="d-flex align-center ">
                    <v-icon large>mdi-contact-phone</v-icon>
                    <h2 class="ml-2">Телефонный справочник</h2>
                </div>
            </div>

            <v-spacer></v-spacer>
            <v-btn text to="/">
                <v-icon>mdi-account-supervisor-outline</v-icon>
                <span class="mr-2">Сотрудники</span>
            </v-btn>

        </v-app-bar>

        <v-content>
            <router-view/>
        </v-content>
    </v-app>
</template>

<script>

    import {LOAD_USERS} from "./store/action.types";

    export default {
        name: 'App',
        async created() {
            await this.$store.dispatch(LOAD_USERS)
        }
    };
</script>
