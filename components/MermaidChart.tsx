// components/MermaidChart.tsx
'use client'

import mermaid from 'mermaid'
import { useEffect, useRef } from 'react'

mermaid.initialize({
  startOnLoad: true,
  theme: 'default',
  securityLevel: 'loose',
  themeVariables: {
    fontFamily: 'system-ui'
  }
})

export const MermaidChart = ({ chart }: { chart: string }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      mermaid.init(undefined, ref.current)
    }
  }, [chart])

  return (
    <div className="my-4 overflow-x-auto rounded-lg bg-white p-4 shadow-sm">
      <div className="mermaid" ref={ref}>
        {chart}
      </div>
    </div>
  )
}