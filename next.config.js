/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains:[ 'images.dominos.co.in' ]
  },
  env:{
    host:'localhost:3000'
  },
  experimental:{
    appDir:true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
