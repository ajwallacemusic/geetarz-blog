import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { Link } from 'gatsby'


const FeatureGrid = ({ gridItems }) => (

    <div className="columns is-multiline">
      {gridItems.map(({node}) => (
          <div className="is-parent column is-6" key={node.id}>
            <article
              className={`blog-list-item tile is-child box notification ${
                node.frontmatter.featuredpost ? 'is-featured' : ''
              }`}
            >
              <header>
                {node.frontmatter.featuredimage ? (
                  <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: node.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${
                          node.frontmatter.title
                        }`,
                      }}
                    />
                  </div>
                ) : null}
                <p className="post-meta">
                  <Link
                    className="title has-text-primary is-size-4"
                    to={node.fields.slug}
                  >
                    {node.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <span className="subtitle is-size-5 is-block">
                    {node.frontmatter.date}
                  </span>
                </p>
              </header>
              <p>
                {node.excerpt}
                <br />
                <br />
                <Link className="button" to={node.fields.slug}>
                  Keep Reading →
                </Link>
              </p>
            </article>
          </div>
        ))}
    </div>
  )



//   <div className="columns is-multiline">
//     {node.map(item => (
//       <div key={item.text} className="column is-6">
//         <section className="section">
//           <div className="has-text-centered">
//             <div
//               style={{
//                 width: '240px',
//                 display: 'inline-block',
//               }}
//             >
//               <PreviewCompatibleImage imageInfo={item} />
//             </div>
//           </div>
//           <p>{item.text}</p>
//         </section>
//       </div>
//     ))}
//   </div>
// )

FeatureGrid.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default FeatureGrid
