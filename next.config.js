module.exports = {
  trailingSlash: true,
   exportPathMap: async function (
  ) {
    return {
      '/': { page: '/' },
      '/arajanlat': { page: '/arajanlat' },
      '/bemutatkozo': { page: '/bemutatkozo' },
      '/felszereles': { page: '/felszereles' },
      '/kapcsolat': { page: '/kapcsolat' },
    }
  },
  reactStrictMode: true,
}
