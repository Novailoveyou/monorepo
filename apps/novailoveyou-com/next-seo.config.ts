import { DefaultSeoProps } from 'next-seo'
// import truncate from 'truncate'
// import { routesFront, company, mituinstitute } from '@/config/index'

const seoParams = {
  title:
    // `${company.name} | ${company.tagline}`,
    'Novailoveyou webapp',
  desc:
    //  truncate(pros.join('. '), 120)
    'Description'
}

const seo: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    url: '',
    title: seoParams.title,
    description: seoParams.desc,
    locale: 'ru'
    // site_name: company.name
    // images: [
    //   {
    //     url: `${routesFront.root}${routesFront.assetsImgsIconsManifestIconBg512}`,
    //     width: 512,
    //     height: 512,
    //     alt: company.name,
    //     type: 'image/png'
    //   }
    // ]
  },
  // twitter: {
  //   handle: '@handle',
  //   site: '@site',
  //   cardType: 'summary_large_image',
  // },
  defaultTitle: seoParams.title,
  description: seoParams.desc,
  canonical: '/',
  dangerouslySetAllPagesToNoIndex: true,
  dangerouslySetAllPagesToNoFollow: true

  // noindex: true,
  // nofollow: true
}

export default seo
