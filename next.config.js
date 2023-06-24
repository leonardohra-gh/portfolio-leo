/** @type {import('next').NextConfig} */
const nextConfig = 
{
    // This is necessary for github pages, github actions, it seems
    output: 'export',
    // Images are not being found on github pages, this might solve it
    images: {
        loader: "akamai",
        path: "/",
    },
}

module.exports = nextConfig
