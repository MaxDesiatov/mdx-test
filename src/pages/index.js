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
  return edges.map(({node: {id, code}}) => 
        <MDXRenderer key={id} scope={__mdxScope}>{code.body}</MDXRenderer>);
}
