import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/Layout"
import * as blogStyle from "./index.module.scss"
import { graphql, useStaticQuery, Link } from "gatsby";
import { Card, Heading } from 'rebass'

const IndexPage = () => {

  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
      edges {
        node {
          title
          slug
          publishedDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
  `)

  return (
    <Layout>
        <div className={blogStyle.cards}>
          {data.allContentfulBlogPost.edges.map(edge => 
              <div className={blogStyle.cardItem}>
                  <div className={blogStyle.text}>
                    <Link to={`/blog/${edge.node.slug}`}>
                      <h1>{edge.node.title}</h1>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fungit blanditiis quia accusamus harum molestiae voluptate soluta.</p>
                      <p>{edge.node.publishedDate}</p>
                    </Link>
                  </div>
                  <div className={blogStyle.picture}>
                    <Link to={`/blog/${edge.node.slug}`}>
                      <StaticImage src="../images/photo1.jpg" />
                    </Link>
                  </div>
              </div>
          )}
          <div className={blogStyle.cardItem}>
            <div className={blogStyle.text}>
              <h1>This is the title of this</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fungit blanditiis quia accusamus harum molestiae voluptate soluta.</p>
            </div>
            <div className={blogStyle.picture}>
              <StaticImage src="../images/photo1.jpg" />
            </div>
          </div>

          <div className={blogStyle.cardItem}>
            <div className={blogStyle.text}>
              <h1>This is the title of this</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fungit blanditiis quia accusamus harum molestiae voluptate soluta.</p>
            </div>
            <div className={blogStyle.picture}>
              <StaticImage src="../images/gaming.png" />
            </div>
          </div>

          <div className={blogStyle.cardItem}>
            <div className={blogStyle.text}>
              <h1>This is the title of this</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fungit blanditiis quia accusamus harum molestiae voluptate soluta.</p>
            </div>
            <div className={blogStyle.picture}>
              <StaticImage src="../images/food.png" />
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default IndexPage
