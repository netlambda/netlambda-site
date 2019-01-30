const parseFilepath = require('parse-filepath')
const path = require('path')
const slash = require('slash')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Airtable' && node.table === 'CMS') {
    // const fileNode = getNode(node.parent)
    // const parsedFilePath = parseFilepath(fileNode.relativePath)

    // const slug = `/${parsedFilePath.dir}`
    const { slug } = node.data
    console.log('================', `/blog/${slug}`)
    createNodeField({ node, name: 'slug', value: `/blog/${slug}` })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blog-post-template.js')
    resolve(
      graphql(
        `
          {
            allAirtable(filter: { table: { eq: "CMS" } }) {
              edges {
                node {
                  id
                  table
                  data {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          result.errors.forEach(error => {
            console.log(error)
          })

          reject(result.errors)
        }
        // console.log(
        //   '==================---------------',
        //   JSON.stringify(result.data, null, 2)
        // )
        result.data.allAirtable.edges.forEach(edge => {
          createPage({
            path: `${edge.node.data.slug}`,
            component: slash(blogPostTemplate),
            context: {
              slug: edge.node.data.slug,
            },
          })
        })
      })
    )
  })
}
