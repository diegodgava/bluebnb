/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['img.freepik.com', 'links.papareact.com', 'cf.bstatic.com', 
    'www.oregonlive.com', 'pandabranding.com.br', 'www.architectureanddesign.com.au',
    'serradoitaqueri.com.br','cdn.theatlantic.com', 'reservas.anfitriaoprime.com.br',
    'blog.123milhas.com', 'media.staticontent.com', 'blogdeviagens.com.br', 'media.tacdn.com', 
    'mid.curitiba.pr.gov.br', 'adritur.com.br', 'www.segueviagem.com.br', 'poraicomjosi.com']
  }
}

module.exports = nextConfig
