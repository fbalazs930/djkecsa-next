module.exports = {
  exportPathMap: async function (
  ) {
    return {
      '/': { page: '/' },
      '/arajanlat': { page: '/arajanlat', query: { title: 'DJ Kecsa' } },
      '/bemutatkozo': { page: '/bemutatkozo', query: { title: 'DJ Kecsa' } },
      '/felszereles': { page: '/felszereles', query: { title: 'DJ Kecsa' } },
      '/kapcsolat': { page: '/kapcsolat', query: { title: 'DJ Kecsa' } },
    }
  },
  reactStrictMode: false,
}
