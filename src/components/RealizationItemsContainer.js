import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import { Row, Col } from 'antd';

class RealizationItemsContainer extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Row gutter={32}>
        {posts &&
          posts.map(({ node: post }) => (
            <Col sm={24} md={12} lg={8}>
              <div key={post.id}>
                <article>
                  <header>
                    {post.frontmatter.featuredimage ? (
                      <div>
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                          }}
                        />
                      </div>
                    ) : null}
                    <p>
                      <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                      <span> &bull; </span>
                      <span>{post.frontmatter.date}</span>
                    </p>
                  </header>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link to={post.fields.slug}>Keep Reading →</Link>
                  </p>
                </article>
              </div>
            </Col>
          ))}
      </Row>
    );
  }
}

RealizationItemsContainer.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "realization-item" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
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
                    fluid(maxWidth: 240, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <RealizationItemsContainer data={data} count={count} />}
  />
);
