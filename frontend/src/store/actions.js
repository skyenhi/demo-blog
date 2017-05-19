import Vue from 'vue'
import { API_ROOT } from '../config'

export default {
  getAllArticles ({commit}) {
  return Vue.http.get(API_ROOT + '/posts')
     .then(response => response.json())
  .then(articles => {
    commit('set_all_articles', articles)
    }).catch((err) => { console.log(err) })
  }
}