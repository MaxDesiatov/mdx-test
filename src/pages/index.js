import { Link } from 'gatsby'

import Layout from '../components/layout'
import MDXRenderer from 'gatsby-mdx/mdx-renderer';

export const pageQuery = graphql`
  query BasicWithQuery {
    allMdx {
      edges {
        node {
          id
          code {
            body
          }
        }
      }
    }
  }
`

export default function({ __mdxScope, data: {allMdx: {edges}} }) {
  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
      {edges.map(({node: {id, code}}) => 
        <MDXRenderer
          key={id}
          scope={__mdxScope}>{code.body}</MDXRenderer>) }
    </Layout>
  );
}
