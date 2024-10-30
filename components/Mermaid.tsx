// components/Mermaid.tsx
"use client"

import mermaid from 'mermaid'
import { useEffect, useRef, useState } from 'react'

mermaid.initialize({
  startOnLoad: true,
  theme: 'default',
  securityLevel: 'loose',
  themeVariables: {
    fontFamily: 'system-ui'
  }
})

const Mermaid = ({ chart }: { chart: string }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const renderDiagram = async () => {
      if (ref.current) {
        try {
          setIsLoading(true)
          await mermaid.init(undefined, ref.current)
          setError(null)
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Failed to render diagram')
        } finally {
          setIsLoading(false)
        }
      }
    }

    renderDiagram()
  }, [chart])

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-600">
        Error rendering diagram: {error}
      </div>
    )
  }

  return (
    <div className="relative my-4">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
          <div className="text-gray-500">Loading diagram...</div>
        </div>
      )}
      <div className="mermaid overflow-x-auto rounded-lg bg-white p-4 shadow-sm" ref={ref}>
        {chart}
      </div>
    </div>
  )
}

export default Mermaid