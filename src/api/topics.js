import fetch from '@/util/fetch'

export function topicsGet ({page, tab, limit, mdrender}) {
  return fetch({
    url: '/topics',
    method: 'get',
    params: {page, tab, limit, mdrender}
  })
}
