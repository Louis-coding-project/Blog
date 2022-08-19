import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import '../scss/styles.scss'
import Layout from './layout'
import { graphql } from "gatsby"


const PostPage = (props) => {
    const post = props.data.contentfulPost
    return (
    <Layout>
      <header className="masthead" style={{backgroundImage: `url('${post.image.file.url}')`}}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="post-heading">
                <h1>{post.title}</h1>
                <h2 className="subheading">{post.subTitle}</h2>
                <span className="meta">Posted by {post.author.name} on {post.publishDate}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <article style={{minHeight: "500px"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto content-area" dangerouslySetInnerHTML={{
                  __html: post.body.childMarkdownRemark.html,
                }}>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )}
  export default PostPage
  
  export const pageQuery = graphql`
    query PostBySlug($slug: String!) {
      contentfulPost(slug: { eq: $slug }) {
        contentful_id
        title
        subTitle
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        image {
          file {
            url
          }
        }
        author {
          name
        }
        tags
        body {
          childMarkdownRemark {  
            html
          }
        }
      }
    }
  `