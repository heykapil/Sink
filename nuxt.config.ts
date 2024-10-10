// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxthub/core',
    'shadcn-nuxt',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],

  colorMode: {
    classSuffix: '',
  },

  routeRules: {
    '/': {
      prerender: true,
    },
    '/dashboard/**': {
      ssr: false,
    },
    '/dashboard': {
      redirect: '/dashboard/links',
    },
  },

  hub: {
    ai: true,
    analytics: true,
    blob: false,
    cache: false,
    database: false,
    kv: true,
  },

  eslint: {
    config: {
      stylistic: true,
      standalone: false,
    },
  },

  nitro: {
    experimental: {
      // Enable Server API documentation within NuxtHub
      openAPI: true,
    },
  },

  runtimeConfig: {
    siteToken: process.env.NUXT_SITE_TOKEN,
    redirectStatusCode: '307',
    linkCacheTtl: process.env.NUXT_LINK_CACHE_TTL,
    redirectWithQuery: process.env.NUXT_REDIRECT_WITH_QUERY,
    homeURL: process.env.NUXT_HOME_URL,
    cfAccountId: process.env.NUXT_CF_ACCOUNT_ID,
    cfApiToken: process.env.NUXT_CF_API_TOKEN,
    dataset: process.env.NUXT_DATASET,
    aiModel: '@cf/meta/llama-3.1-8b-instruct',
    aiPrompt: `You are a URL shortening assistant, please shorten the URL provided by the user into a SLUG. The SLUG information must come from the URL itself, do not make any assumptions. A SLUG is human-readable and should not exceed three words and can be validated using regular expressions {slugRegex} . Only the best one is returned, the format must be JSON reference {"slug": "example-slug"}`,
    public: {
      previewMode: '',
      slugDefaultLength: process.env.NUXT_PUBLIC_SLUG_DEFAULT_LENGTH,
    },
  },

  compatibilityDate: '2024-07-08',
})
