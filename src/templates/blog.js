import React from "react";
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


export const query = graphql`
    query ($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
        title
        publishedDate(formatString: "MMMM Do, YYYY")
        body {
            raw
            references {
            gatsbyImageData(
                layout: CONSTRAINED
                quality: 80
                formats: [WEBP, AUTO]
                placeholder: BLURRED
            )
            contentful_id
            }
        }
        sys {
            contentType {
            sys {
                id
            }
            }
        }
        }
    }  
    `

const Blog = (props) => {

    const richTextImages = {}

    props.data.contentfulBlogPost.body.references.map(reference => (
        richTextImages[reference.contentful_id] = {
            "image": reference.gatsbyImageData, "alt": reference.title
        }
    ))
    
    const Bold = ({ children }) => <span className="bold">{children}</span>
    const Text = ({ children }) => <p className="align-center">{children}</p>

    const options = {
        renderMark: {
            [MARKS.BOLD]: text => <Bold>{text}</Bold>,
          },
          renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
            [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
              const imageData = richTextImages[node.data.target.sys.id];
              const image = getImage(imageData.image)
              return (
                <div>
                  <GatsbyImage className={picture} image={image} alt={imageData.alt}/>
                </div>
              )
            },
          },
    }

    return (
        <Layout>
            <div>
                {documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw), options)}
            </div>
        </Layout>
    )
}

export default Blog;