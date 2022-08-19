const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // 須回傳promise物件，因為graphql查詢為非同步事件。
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allContentfulPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        
        // 根據抓到的文章slug來創建文章頁面，並且使用我們的post-template.js樣板
        const posts = result.data.allContentfulPost.edges
        posts.forEach((post) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: path.resolve('./src/components/post-template.js'),
            // 將slug傳遞過去，作為頁面抓取文章資料的識別符(當然，這裡創建頁面的同時把所需要的資料一次傳過去也是另一種方法)
            context: {
              slug: post.node.slug
            },
          })
        })
      })
    )
  })
}