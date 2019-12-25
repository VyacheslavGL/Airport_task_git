<template>
    <v-container>
        <v-layout column>
            <h1>Сотрудник: {{$route.params.name}}</h1>
            <v-card
                    width="900"
                    class="my-6 mx-auto"
                    raised
            >
                <v-btn to=""
                       fab
                       class="ma-4"
                >
                    <img :src="user.picture.large" alt="User photo" width="70" tabindex="0">
                </v-btn>

                <v-card-title>ФИО: {{user.fullName}}</v-card-title>
                <v-card-text>Телефон: {{user.phone}}</v-card-text>
                <v-card-text>email: {{user.email}}</v-card-text>
            </v-card>
            <!--            <h3>{{$store.state.userinfo}}</h3>-->
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "User",
        data: () => ({
            user: [],
        }),
        created() {
            this.user = this.$store.state.userinfo;
        }
    }
</script>

<style scoped>
    img[tabindex="0"] {
        cursor: zoom-in;
    }
    img[tabindex="0"]:focus {
        position: fixed;
        z-index: 10;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: auto;
        height: auto;
        max-width: 99%;
        max-height: 99%;
        margin: auto;
        box-shadow: 0 0 20px #000, 0 0 0 1000px rgba(210,210,210,.4);
    }
    img[tabindex="0"]:focus,  /* убрать строку, если не нужно, чтобы при клике на увеличенное фото, оно возвращалось в исходное состояние */
    img[tabindex="0"]:focus ~ * {
        pointer-events: none;
        cursor: zoom-out;
    }
</style>