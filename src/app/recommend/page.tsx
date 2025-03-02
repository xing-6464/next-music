'use client'
import { getRecommend } from '@/service/recommend'
import { useEffect } from 'react'

export default function RecommendPage() {
  useEffect(() => {
    const recommend = async () => {
      const res = await getRecommend()
      console.log(res)
    }
    recommend()
  }, [])
  return <div>RecommendPage</div>
}
