<template>
    <div>
        <header>
            <header id="global-header">
                <a class="skip-navigation" href="#content"><span>サイトメニューを読み飛ばして本文へ移動</span></a>
                <div class="global-navigation container">
                    <div class="col">
                        <h1><router-link to="/">Vue Blog</router-link></h1>
                    </div>
                </div>
            </header>
        </header>
        <div id="content">
            <div class="content-header">
                <div class="content-navigation">
                    <ul class="content-navigation-list">
                        <li class="current"><router-link to="/">Blog</router-link></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
</style>