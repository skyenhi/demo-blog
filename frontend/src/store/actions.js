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

  getArticle ({commit}, aid) {
    return Vue.http.get(API_ROOT + '/posts/' + aid)
        .then(response => {
      commit('set_article', response.data)
    }).catch((err) => { console.log(err) })
  },

  getAllComments ({commit}, aid) {
    return Vue.http.get(API_ROOT + '/comments?postId=' + aid)
            .then(response => response.json())
  .then(comments => {
      commit('set_comments', comments)
    }).catch((err) => { console.log(err) })
  },

  getUser ({commit}, aid) {
    return Vue.http.get(API_ROOT + '/users/' + aid)
            .then(response => {
      commit('set_user', response.data)
    }).catch((err) => { console.log(err) })
  }
}