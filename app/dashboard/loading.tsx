'use client'

import { Skeleton, SkeletonStats, SkeletonList } from '@/components/ui'
import styles from './page.module.css'

export default function DashboardLoading() {
  return (
    <div className={styles.dashboard}>
      {/* Welcome Header Skeleton */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '1.5rem',
        gap: '1rem'
      }}>
        <div style={{ flex: 1 }}>
          <Skeleton width="50%" height={28} />
          <div style={{ marginTop: '0.5rem' }}>
            <Skeleton width="70%" height={16} />
          </div>
        </div>
        <Skeleton width={140} height={44} borderRadius="var(--radius-lg)" />
      </div>

      {/* Stats Grid Skeleton */}
      <SkeletonStats />

      {/* Main Content Skeleton */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1.5fr 1fr', 
        gap: '1.5rem',
        marginTop: '1.5rem'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Subject Progress Skeleton */}
          <div style={{ 
            background: 'white', 
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--paper-accent)',
            padding: '1.25rem'
          }}>
            <Skeleton width="40%" height={20} />
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '0.75rem',
              marginTop: '1rem'
            }}>
              {[1, 2, 3, 4].map(i => (
                <Skeleton key={i} height={70} borderRadius="var(--radius-md)" />
              ))}
            </div>
          </div>

          {/* Continue Learning Skeleton */}
          <div style={{ 
            background: 'white', 
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--paper-accent)',
            padding: '1.25rem'
          }}>
            <Skeleton width="50%" height={20} />
            <div style={{ marginTop: '1rem' }}>
              <Skeleton height={100} borderRadius="var(--radius-md)" />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Upcoming Tasks Skeleton */}
          <div style={{ 
            background: 'white', 
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--paper-accent)',
            padding: '1.25rem'
          }}>
            <Skeleton width="40%" height={20} />
            <div style={{ marginTop: '1rem' }}>
              <SkeletonList count={3} />
            </div>
          </div>

          {/* Recent Activity Skeleton */}
          <div style={{ 
            background: 'white', 
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--paper-accent)',
            padding: '1.25rem'
          }}>
            <Skeleton width="40%" height={20} />
            <div style={{ marginTop: '1rem' }}>
              <SkeletonList count={3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

