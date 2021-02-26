import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import { Row, Col } from 'antd';

export const RealizationItemTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section>
      {helmet || ''}
      <Row type="flex" align="middle">
        <Col>
          <h1>{title}</h1>
          <p>{description}</p>
          <PostContent content={content} />
          {tags && tags.length ? (
            <div style={{ marginTop: '4rem' }}>
              <h4>Tags</h4>
              <ul>
                {tags.map((tag) => (
                  <li key={tag + `tag`}>
                    <Link to={`/tags/${kebabCase(tag)}`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Col>
      </Row>
    </section>
  );
};

RealizationItemTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const RealizationItem = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <RealizationItemTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`} />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

RealizationItem.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default RealizationItem;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
