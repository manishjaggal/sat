'use client'

import styles from './Skeleton.module.css'

interface SkeletonProps {
  width?: string | number
  height?: string | number
  borderRadius?: string
  className?: string
}

export function Skeleton({ 
  width = '100%', 
  height = '1rem', 
  borderRadius = 'var(--radius-md)',
  className = ''
}: SkeletonProps) {
  return (
    <div 
      className={`${styles.skeleton} ${className}`}
      style={{ 
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        borderRadius 
      }}
    />
  )
}

export function SkeletonCard({ className = '' }: { className?: string }) {
  return (
    <div className={`${styles.skeletonCard} ${className}`}>
      <Skeleton height={120} borderRadius="var(--radius-lg)" />
      <div className={styles.skeletonCardContent}>
        <Skeleton width="60%" height={20} />
        <Skeleton width="80%" height={14} />
        <Skeleton width="40%" height={14} />
      </div>
    </div>
  )
}

export function SkeletonList({ count = 3, className = '' }: { count?: number, className?: string }) {
  return (
    <div className={`${styles.skeletonList} ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={styles.skeletonListItem}>
          <Skeleton width={40} height={40} borderRadius="var(--radius-md)" />
          <div className={styles.skeletonListContent}>
            <Skeleton width="70%" height={16} />
            <Skeleton width="50%" height={12} />
          </div>
        </div>
      ))}
    </div>
  )
}

export function SkeletonStats({ className = '' }: { className?: string }) {
  return (
    <div className={`${styles.skeletonStats} ${className}`}>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className={styles.skeletonStatCard}>
          <Skeleton width={36} height={36} borderRadius="var(--radius-md)" />
          <div>
            <Skeleton width={60} height={20} />
            <Skeleton width={40} height={12} />
          </div>
        </div>
      ))}
    </div>
  )
}

