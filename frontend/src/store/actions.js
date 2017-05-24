import Vue from 'vue'
import { API_ROOT } from '../config'


export default {
  getAllArticles ({commit}) {
  return Vue.http.get(API_ROOT + '/posts')
     .then(response => response.json())
  .then(articles => {
    commit('set_all_articles', articles)
    }).catch((err) => { console.log(err) })
  },

  getArticle ({commit, state}, aid) {
    return Vue.http.get(API_ROOT + '/posts/' + aid)
        .then(response => {
      commit('set_article', response.data)
      document.title = state.article.title
    }).catch((err) => { console.log(err) })
  },

  getAllComments ({commit}, aid) {
    return Vue.http.get(API_ROOT + '/comments?postId=' + aid)
            .then(response => response.json())
  .then(comments => {
      commit('set_comments', comments)
    }).catch((err) => { console.log(err) })
  }
}