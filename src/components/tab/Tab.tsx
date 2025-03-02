'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Tab.module.scss'
import cls from 'classnames'

const tabs: {
  name: string
  path: string
}[] = [
  {
    name: '推荐',
    path: '/recommend',
  },
  {
    name: '歌手',
    path: '/singer',
  },
  {
    name: '排行',
    path: '/top-list',
  },
  {
    name: '搜索',
    path: '/search',
  },
]

export default function Tab() {
  const pathname = usePathname()
  return (
    <div className={styles.tab}>
      {tabs.map((tab) => {
        return (
          <Link
            key={tab.name}
            href={tab.path}
            className={cls(styles['tab-item'], {
              [styles['router-link-active']]: pathname === tab.path,
            })}
          >
            <span className={styles['tab-link']}>{tab.name}</span>
          </Link>
        )
      })}
    </div>
  )
}
