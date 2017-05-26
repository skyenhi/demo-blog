<template>
    <header>
        <div id="global-navigation" class="container">
            <div class="header-logo text-center"><router-link to="/"><img src="/app/img/logo.png" alt="logo"/></router-link></div>
            <div class="sidebar-menu">
                <a @click="showAside = !showAside">
                    <span class="push-overlay" v-show="showAside"></span>
                    <span id="global-menu-btn" v-show="!showAside"></span>
                </a>
            </div>
            <transition name="slide-fade">
                <nav  v-if="showAside">
                    <ul>
                        <li @click="showAside = !showAside"><router-link :to="'/'">Home</router-link></li>
                        <li @click="showAside = !showAside"><router-link :to="'/group-training'">Group Training</router-link></li>
                        <li @click="showAside = !showAside"><router-link :to="'/articles'">Blog</router-link></li>
                        <li @click="showAside = !showAside"><router-link :to="'/about'">About Bee</router-link></li>
                        <li @click="showAside = !showAside"><router-link :to="'/contact'">Contact</router-link></li>
                    </ul>
                </nav>
            </transition>
            <div class="col global-menu">
                <ul class="list-inline menu">
                    <li><router-link :to="'/'">Home</router-link></li>
                    <li><router-link :to="'/group-training'">Group Training</router-link></li>
                    <li><router-link :to="'/articles'">Blog</router-link></li>
                    <li><router-link :to="'/about'">About Bee</router-link></li>
                    <li><router-link :to="'/contact'">Contact</router-link></li>
                </ul>
            </div>
        </div>
    </header>
</template>


<script>
    export default {
        data() {
            return {
                showAside: false,
            }
        },
        methods: {
            goBack() {
                this.$router.back();
            }
        }
    };
</script>
