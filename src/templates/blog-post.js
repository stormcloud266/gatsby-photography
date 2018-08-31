import React from 'react'
import { graphql } from 'gatsby'
import BlogHeader from '../components/BlogHeader'
import Footer from '../components/Footer'

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <div className="BlogPost">
      {console.log(data)}
      <BlogHeader
        title={post.frontmatter.title}
        subtitle={post.frontmatter.description}
        img={post.frontmatter.featuredImage.childImageSharp.sizes.src}
        blogPost={true}
      />
      <div className="BlogPost__content">
        <div className="content__inner" dangerouslySetInnerHTML={{__html: post.html}} />
      </div>

      <Footer />
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path }}) {
      html
      frontmatter {
        path
        title
        date
        description
        featuredImage {
          childImageSharp{
             sizes(maxWidth: 1000) {
               ...GatsbyImageSharpSizes
           }
         }
        }
      }
    }
  }
`
