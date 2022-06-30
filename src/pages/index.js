import * as React from "react"
import Layout from "../components/Layout"
import * as blogStyle from "./index.module.scss"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { v4 as uuidv4 } from 'uuid'

const IndexPage = () => {

  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
      edges {
        node {
          title
          slug
          publishedDate(formatString: "MMMM Do, YYYY")
          shortDescription
          titleImage {
            gatsbyImageData(
              layout: CONSTRAINED
              quality: 80
              formats: [WEBP, AUTO]
              placeholder: BLURRED
            )
            title
          }
        }
      }
    }
  }
  `)

  return (
    <Layout>
        <div className={blogStyle.cards}>
          {data.allContentfulBlogPost.edges.map(edge =>
              <div className={blogStyle.cardItem} key={uuidv4()}>
                  <div className={blogStyle.text} key={uuidv4()}>
                    <Link to={`/blog/${edge.node.slug}`} key={uuidv4()}>
                      <h1 key={uuidv4()}>{edge.node.title}</h1>
                      <p key={uuidv4()}>{edge.node.shortDescription}</p>
                    </Link>
                  </div>
                  <div className={blogStyle.picture}>
                    <Link to={`/blog/${edge.node.slug}`} key={uuidv4()}>
                      <GatsbyImage className={blogStyle.actualPicture} image={getImage(edge.node.titleImage.gatsbyImageData)} alt={edge.node.titleImage.title} key={uuidv4()} />
                    </Link>
                  </div>
              </div>
          )}
        </div>
    </Layout>
  )
}

export default IndexPage
