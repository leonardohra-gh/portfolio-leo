/** @type {import('next').NextConfig} */

// if we are using github pages, we need to set up the images on public folder
const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

const nextConfig = 
{
    // This is necessary for github pages, github actions, it seems
    output: 'export',
    assetPrefix: assetPrefix,
    basePath: basePath,
}

module.exports = nextConfig
