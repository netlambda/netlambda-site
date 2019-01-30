/* eslint-disable */
import React from 'react'
import unified from 'unified'
import markdown from 'remark-parse'
import html from 'remark-html'
import { Link, Timestamp } from '../../components/Misc'
import { Box } from '@rebass/emotion'
import { css } from '@emotion/core'

const linkStyles = css`
  box-shadow: none;
`

const BlogIndex = props => {
  const { edges } = props.data.allAirtable
  return (
    <Box>
      <Box
        width={[1, 1, 720]}
        m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
        px={[3, 3, 0]}
      >
        <h1>Blog</h1>
        <Box>
          {edges &&
            Array.isArray(edges) &&
            edges
              .filter(post => post.node.data.title.length > 0)
              .map(i => {
                return i.node.data
              })
              .map((post, index) => {
                return (
                  <Box key={post.slug}>
                    <Link to={`/${post.slug}`} className={linkStyles}>
                      <Timestamp>{post.date}</Timestamp>
                      <h3>{post.title}</h3>
                      <div
                        style={{
                          backgroundImage: 'url(' + post.image[0].url + ')',
                          backgroundSize: '100%',
                          backgroundPosition: 'center',
                          width: '100%',
                          height: '15rem',
                        }}
                      />
                      <p
                        style={{
                          marginTop: '1rem',
                          marginBottom: '2rem',
                        }}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: String(
                              unified()
                                .use(markdown)
                                .use(html)
                                .processSync(
                                  post.PostMarkdown.split(/\s+/)
                                    .slice(0, 35)
                                    .join(' ')
                                )
                            ),
                          }}
                        />
                      </p>
                    </Link>
                  </Box>
                )
              })}
        </Box>
      </Box>
    </Box>
  )
}

export const pageQuery = graphql`
  query BlogQuery {
    allAirtable(filter: { table: { eq: "CMS" } }) {
      edges {
        node {
          id
          table
          data {
            slug
            title
            PostMarkdown
            image {
              url
            }
            date
          }
        }
      }
    }
  }
`
/* eslint-enable */

export default BlogIndex
