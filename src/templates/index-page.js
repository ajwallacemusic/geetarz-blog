import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  imagetext,
  main,
  featured
}) => (
  <div>
    
    <div className="full-width-image margin-top-0"
    style={{
        backgroundImage: `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image})`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
    }}
>
<div 
        className="full-width-image margin-top-0"
        style={{
            background: 'rgba(0, 0, 0, 0.25)',
            backgroundPosition: `top left`,
            //backgroundAttachment: `fixed`,
        }}
    >
      <div columns>
      <div column is-1>
        <h1
          className="has-text-centered is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            backgroundColor: imagetext.text ? imagetext.backgroundcolor : 'white',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {imagetext.text}
        </h1>
      </div>
      </div>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="columns">
                  <div className="column is-12">
                    <h2 className="is-size-2">{main.heading}</h2>
                    <p>{main.text}</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column" is-12>
                  <h3 className="has-text-weight-normal is-size-2">
                    Featured
                  </h3>
                  <Features gridItems={featured} />
                  </div>
                </div>
                <div className="columns">
                <div className="column is-12">
                  <h3 className="has-text-weight-normal is-size-2">
                    Latest Stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  imagetext: PropTypes.object,
  main: PropTypes.object,
  excerpt: PropTypes.string,
  featured: PropTypes.object
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const {edges} = data.allMarkdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        imagetext={frontmatter.imagetext}
        main={frontmatter.main}
        featured={edges}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.shape({
        node: PropTypes.shape({
          excerpt: PropTypes.string,
          frontmatter: PropTypes.object
        })
      })
    })
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
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
    markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
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
    allMarkdownRemark(filter: {frontmatter: {featuredpost: {eq: true}}}) {
      edges {
        node {
          excerpt
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 1090, quality: 50) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
