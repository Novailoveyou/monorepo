/** @type {import('next').NextConfig} */
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js'

// * this kind of way to do this (.mjx) is made for potential future use

const createConfig = async (phase, { defaultConfig }) => {
  const nextConfig = {
    reactStrictMode: true, // * Recommended for the `pages` directory, default in `app`.
    swcMinify: true,
    experimental: {
      // * Required:
      appDir: true
    }
  }

  // * development only config
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return { ...nextConfig }
  }

  return nextConfig
}

export default createConfig
