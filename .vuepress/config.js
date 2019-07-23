module.exports = {
  base: '/ljpress/',
  title: '凝卓智能 | Linkjob',
  themeConfig: {
    search: false,
    nav: [
      { text: '新闻', link: '/news/' },
      { text: '发现', link: '/explore/' },
      { text: '帮助', link: '/help/' },
    ]
  },
  markdown: {
    externalLinks: { target: '', rel: 'noopener noreferrer' }
  }
}