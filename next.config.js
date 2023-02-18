/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains:[ 'images.dominos.co.in' ]
  },
  experimental:{
    appDir:true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
