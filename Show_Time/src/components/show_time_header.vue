<script setup>
import { RouterLink } from 'vue-router';

</script>
<template>
    <header>
        <nav class="container">
            <div class="branding">
                <img src="../assets/logo.png" alt="">
                <RouterLink to="/about">SHOW TIME</RouterLink>
            </div>

            <ul class="nav-routes">
                <RouterLink to="/">Vote</RouterLink>
                <RouterLink to="/login">Log In</RouterLink>
            </ul>

        </nav>
    </header>
</template>


<style lang="scss" scoped>
header {
    background-color: rgb(72, 4, 46)!important;

    nav {
        display: flex;
        align-items: center;
        padding: 10px 10px;

        .branding {
            display: flex;
            align-items: center;
            gap: 8px;

            img {
                max-width: 50px;
            }

            a {
                text-decoration: none;
                color: rgb(255, 255, 255);
                transition: all .5s;
                font-size: 25px;
            }
        }

        .nav-routes {
            display: flex;
            flex: 1;
            justify-content: flex-end;
            gap: 30px;
            list-style: none;

            a {
                text-decoration: none;
                color: rgb(255, 255, 255);
                transition: all .5s;
            }
        }
        .nav-routes :hover {
            font-size: 25px;
        }
    }
}
</style>