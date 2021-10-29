<h1 align="center">Welcome to this minimal Blog Website 🤗</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
</p>

> A Blog Website for a freelance writer. It has a minimal look and focuses on the content. Feel free to use this as a template for your own blog website.  

This blog is built with [Gatsby](https://www.gatsbyjs.com/) and [React](https://reactjs.org/) to create a super fast website. It is hooked up to the [Contentful](https://www.contentful.com/) Content Management System and gets the data by Graphql queries. \
I built this website from scratch after completing a couple of tutorials about Gatsby, so I was eager to create my own project with Gatsby, which is super fun to use in my opinion once you get the hang on it.

### 💫 Have a look at the [live Version](https://lena-writes.netlify.app/)

## 🚀 Usage

1.  **Clone the project**

    After cloning the project you can run the following commands.

    ```shell
    # install the packages
    npm install
    ```

2.  **Start developing.**

    start it up:

    ```shell
    cd gatsby-blog-simple
    npm run develop
    ```
    or
    
    ```shell
    cd gatsby-blog-simple
    gatsby develop
    ```


3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000! \
    Graphiql can be accessed by running http://localhost:8000/___graphql

    You need a Contentful Account to use the graphql Queries the way I did. In Contentful you create the content models that fit your project, and query the content from Contentful by using the built in GraphiQl UI. Then you use these queries in your code.
    
    In Contentful create an access Token. Then create a ```.env.development``` and a ```.env.production``` file in the src folder, paste the following lines in there and add your Contentful Access:
    
    ```shell
    CONTENTFUL_SPACE_ID=
    CONTENTFUL_ACCESS_TOKEN=
    ```


4.  **Learn more about Gatsby**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

