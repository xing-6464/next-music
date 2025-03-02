import get from './get'

export async function getRecommend() {
  return await get('/api/getRecommend')
}
