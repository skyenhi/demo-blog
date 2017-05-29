export default {
  articleList: (state) => {
    const articles = state.articles.map(article => {
      let newArticle = {}
      for (let i in article) { newArticle[i] = article[i] }
    return newArticle
    })
    return articles
  }
}