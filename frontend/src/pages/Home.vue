<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide><img src="/app/img/slide/img_slide_1.jpg" alt="photo" width="100%"></swiper-slide>
      <swiper-slide><img src="/app/img/photo-4-camille-1140x700.jpg" alt="photo" width="100%"></swiper-slide>
      <swiper-slide><img src="/app/img/photo-5-camille-1140x700.jpg" alt="photo" width="100%"></swiper-slide>
      <swiper-slide><img src="/app/img/photo-6-camille-1140x700.jpg" alt="photo" width="100%"></swiper-slide>
      <swiper-slide><img src="/app/img/photo-7-camille-1140x700.jpg" alt="photo" width="100%"></swiper-slide>
      <swiper-slide><img src="/app/img/photo-8-camille-1140x700.jpg" alt="photo" width="100%"></swiper-slide>
      <swiper-slide><img src="/app/img/photo-9-camille-1140x700.jpg" alt="photo" width="100%"></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <div class="intro">
      <h2>Do Yoga, Be Happy…</h2>
      <p>Take pause from your busy city life to relax and enjoy one of Bee’s delicious yoga classes. Just Be Yoga Shala, conveniently located in the heart of Saigon just a couple blocks from the backpackers district, invites you to drop in, move your asana and get your yoga on today.</p>
      <p>Choose from hatha, ashtanga-inspired vinyasa, yin, toning and core, or partner yoga. Or book a private training session with Bee, either in the shala or in the comfort of your own home.</p>
      <p>Shala is Sanskrit for home, and Just Be Yoga Shala is your home to feel the personal transformative power of yoga. It is Bee’s mission to inspire her students to live their yoga. By allowing yourself to be wholly authentic, you make your entire life a place for yoga. She has a heart-centered approach to teaching in order to make sure that each student gets the most out of their practice. Come by and try a class for yourself!</p>
    </div>
    <div class="posts-list">
      <article class="subchapter media-left media-not-sm" v-for="(article, index) in computedArticles">
        <div class="image">
          <img src="/app/img/img_post_item_2.jpg" alt="">
        </div>
        <div class="text">
          <div class="meta">
            <span class="tag"><a href="#" rel="category tag">Life</a></span>
            <span class="small date">March 11, 196(^^)</span>
          </div>
          <div class="header"><router-link v-bind:to="'/articles/'+article.id">{{ article.title }}</router-link></div>
          <div class="content">{{ article.body }}</div>
          <div class="btn btn-ghost-main read-more"><router-link v-bind:to="'/articles/'+article.id">Continue Reading</router-link></div>
        </div>
      </article>
      <ul class="col list-inline">
        <li v-for="n in numOfPages"><a href="" @click.prevent="setPage(n)">{{n}}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapState}   from 'vuex'
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  export default {
    components: {
      swiper,
      swiperSlide
    },
    data () {
    return {
      currentPage: 1,
      perPage: 15,
      swiperOption: {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        autoplay: 3000,
        spaceBetween: 30,
        loop: true,
        effect: 'fade'
      }
    }
  },

  created () {
    this.getArticleList()
  },
  computed: {
    ...mapState(['articles']),
    offset() {
      return ((this.currentPage - 1) * this.perPage);
    },
    limit() {
      return (this.offset + this.perPage);
    },
    numOfPages() {
      return Math.ceil(this.articles.length / this.perPage);
    },
    computedArticles() {
      if (this.offset > this.articles.length) {
        this.currentPage = this.numOfPages;
      }
      return this.articles.slice(this.offset, this.limit);
    }
  },
  methods: {
  ...mapActions(['getArticleList']),
            setPage(n) {
      this.currentPage = n;
    }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>