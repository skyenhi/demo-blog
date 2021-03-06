export default {
  // articles
  set_all_articles: (state, articles) => {
    state.articles = articles
  },
  // article
  set_article: (state, article) => {
    state.article = article
  },
  // comment
  set_comments: (state, comments) => {
    state.comments = comments
  },
  // user
  set_user: (state, user) => {
    state.user = user
  },
  // albums
  set_albums: (state, albums) => {
    state.albums = albums
  },
  // photos
  set_photos: (state, photos) => {
    state.photos = photos
  }
}
