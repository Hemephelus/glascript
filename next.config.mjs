// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig


/** @type {import('next').NextConfig} */
/**const nextConfig = {
    experimental: {
      mdxRs: true,
    },
  }
   
  const withMDX = require('@next/mdx')()
  module.exports = withMDX(nextConfig)*/

  
import nextMDX from '@next/mdx'

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: []
  }
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    appDir: true,
    mdxRs: true
  },
  images: {
    domains: ['github.com', 'lh3.googleusercontent.com']
  }
}

export default withMDX(nextConfig)
  