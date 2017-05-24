import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home.vue';
import Articles from '../pages/Articles.vue';
import Article from '../pages/Article.vue';
import About from '../pages/About.vue';
import GroupTraining from '../pages/GroupTraining.vue';
import Contact from '../pages/Contact.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    {path: '/articles', name: 'articles', component: Articles},
    {path: '/articles/:id', name: 'article', component: Article},
    {path: '/about', name: 'about', component: About},
    {path: '/group-training', name: 'grouptraining', component: GroupTraining},
    {path: '/contact', name: 'contact', component: Contact},
    {path: '*', redirect: '/home/'}
  ],
});
