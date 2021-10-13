import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/Layout"
import * as blogStyle from "./index.module.scss"
import { Card, Heading } from 'rebass'

const IndexPage = () => {
  return (
    <Layout>
        <div className={blogStyle.cards}>

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
