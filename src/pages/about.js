import React from 'react'
import Layout from '../components/Layout'
import { graphql, useStaticQuery } from 'gatsby'


const About = () => {

    const data = useStaticQuery(graphql`
    query {
        contentfulAboutSection {
          aboutPage {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    `)

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: data.contentfulAboutSection.aboutPage.childMarkdownRemark.html }} />
        </Layout>
    )
}

export default About;