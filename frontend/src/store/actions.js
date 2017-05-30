import Vue from 'vue'
import { API_ROOT } from '../config'

export default {
  getArticleList ({commit}) {
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
  },
  getAlbums ({commit}, aid) {
    return Vue.http.get(API_ROOT + '/albums?userId=' + aid)
      .then(response => response.json())
      .then(albums => {
        commit('set_albums', albums)
      }).catch((err) => { console.log(err) })
  },
  getPhotos ({commit}, aid) {
    return Vue.http.get(API_ROOT + '/photos?albumId=' + aid)
      .then(response => response.json())
      .then(photos => {
        commit('set_photos', photos)
      }).catch((err) => { console.log(err) })
  }
}