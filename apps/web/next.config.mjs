/**
 * @type {import('next').NextConfig}
 */

// import { PHASE_DEVELOPMENT_SERVER } from 'next/constants'
import { createSecureHeaders } from 'next-secure-headers'

export const PROD = process.env.NODE_ENV === 'production'
export const DEV = process.env.NODE_ENV === 'development'
export const LOCALES = ['en', 'gb', 'ru', 'de', 'tr', 'nl']
export const DEFAULT_LOCALE = 'ru'

const nextConfig = {
  reactStrictMode: true, // * Recommended for the `pages` directory, default in `app`.
  poweredByHeader: false, // * Remove the `X-Powered-By` header.
  swcMinify: true,
  compiler: {
    // styledComponents: true,
    removeConsole: PROD
  },
  i18n: {
    locales: LOCALES,
    defaultLocale: DEFAULT_LOCALE,
    localeDetection: !DEV
  },
  images: {
    // loader: 'cloudinary',
    // path: 'https://res.cloudinary.com/mitu-institute/',
    domains: ['res.cloudinary.com']
  },
  transpilePackages: ['xjsx', 'ui'],
  experimental: {
    // * Required:
    appDir: true
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: createSecureHeaders({
          forceHTTPSRedirect: DEV
            ? false
            : [
                true,
                {
                  maxAge: 60 * 60 * 24 * 365 * 2
                  // includeSubDomains: true
                }
              ],
          referrerPolicy: 'no-referrer-when-downgrade',
          frameGuard: false
        })
      }
    ]
  }
}

export default nextConfig

// // * this kind of way to do this (.mjx) is made for potential future use
// const createConfig = async (phase, { defaultConfig }) => {
//   const PROD = process.env.NODE_ENV === 'production'
//   const DEV = process.env.NODE_ENV === 'development'

//   const nextConfig = {
//     reactStrictMode: true, // * Recommended for the `pages` directory, default in `app`.
//     poweredByHeader: false, // * Remove the `X-Powered-By` header.
//     swcMinify: true,
//     compiler: {
//       styledComponents: true,
//       removeConsole: PROD
//     },
//     i18n: {
//       locales: ['en', 'ru', 'uz', 'kk'],
//       defaultLocale: 'ru',
//       localeDetection: !DEV
//     },
//     images: {
//       // loader: 'cloudinary',
//       // path: 'https://res.cloudinary.com/mitu-institute/',
//       domains: ['res.cloudinary.com']
//     },
//     experimental: {
//       // * Required:
//       // appDir: true,
//       transpilePackages: ['ui']
//     },
//     async headers() {
//       return [
//         {
//           source: '/:path*',
//           headers: createSecureHeaders({
//             forceHTTPSRedirect: DEV
//               ? false
//               : [
//                   true,
//                   {
//                     maxAge: 60 * 60 * 24 * 365 * 2
//                     // includeSubDomains: true
//                   }
//                 ],
//             referrerPolicy: 'no-referrer-when-downgrade',
//             frameGuard: false
//           })
//         }
//       ]
//     }
//   }

//   // * development only config
//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     return { ...nextConfig }
//   }

//   return nextConfig
// }

// export default createConfig
