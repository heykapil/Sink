export default defineAppConfig({
  title: 'Links shortner',
  description: 'Analytics, Link shortner.',
  image: 'https://cdn.kapil.app/',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
