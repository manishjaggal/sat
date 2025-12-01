'use client'

import { Component, ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '400px',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(199, 92, 76, 0.1)',
            borderRadius: '50%',
            marginBottom: '1.5rem',
            color: '#c75c4c'
          }}>
            <AlertTriangle size={36} />
          </div>
          
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#2d3436',
            marginBottom: '0.5rem'
          }}>
            Something went wrong
          </h2>
          
          <p style={{
            color: '#636e72',
            marginBottom: '1.5rem',
            maxWidth: '400px'
          }}>
            We encountered an unexpected error. Please try refreshing the page.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              onClick={() => window.location.reload()}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: '#1a5f5a',
                color: 'white',
                border: 'none',
                borderRadius: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              <RefreshCw size={18} />
              Refresh Page
            </button>
            
            <Link
              href="/dashboard"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: '#f4f0eb',
                color: '#636e72',
                border: 'none',
                borderRadius: '0.75rem',
                fontWeight: 500,
                textDecoration: 'none'
              }}
            >
              <Home size={18} />
              Go Home
            </Link>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

