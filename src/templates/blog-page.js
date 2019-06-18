import React from 'react'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

export const BlogPageTemplate = ({
  image,
  imagetext,
  main,
}) => (
      <div>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: '#f40',
              color: 'white',
              padding: '1rem',
            }}
          >
            {imagetext}
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
        </div>
    )
BlogPageTemplate.propTypes = {
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      imagetext: PropTypes.object,
      main: PropTypes.object,
      excerpt: PropTypes.string,
    }
    
    const BlogPage = ({ data }) => {
      const { frontmatter } = data.markdownRemark
    
      return (
        <Layout>
          <BlogPageTemplate
            image={frontmatter.image}
            imagetext={frontmatter.imagetext}
            main={frontmatter.main}
          />
        </Layout>
      )
    }


BlogPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    })
  })
}

export default BlogPageTemplate

export const blogPageQuery = graphql`
  query BlogPageTemplate {
    markdownRemark(frontmatter: {templateKey: {eq: "blog-page"}}) {
      frontmatter {
        imagetext {
          text
          backgroundcolor
        }
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        main {
          heading
          text
        }
      }
    }
    markdownRemark(frontmatter: {templateKey: {eq: "blog-page"}}) {
      frontmatter {
        imagetext {
          text
          backgroundcolor
        }
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        main {
          heading
          text
        }
      }
    }
  }
`
