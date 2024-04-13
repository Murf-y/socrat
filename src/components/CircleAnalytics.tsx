'use client'
import { Graph, GraphNode } from '@/utils/graph'
import React, { useCallback, useEffect, useRef } from 'react'

const GraphCanvas = ({ graph, width, height }: { graph: Graph; width: number; height: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const calculateNodePositions = useCallback((numNodes: number, width: number, height: number) => {
    const positions: { id: string; x: number; y: number }[] = []
    const radius = Math.min(width, height) * 0.45 // Adjust this to change the radius of the circle
    const centerX = width / 2
    const centerY = height / 2
    const angleIncrement = (2 * Math.PI) / numNodes

    let index = 0
    graph.nodes.forEach((value: GraphNode, key: string) => {
      const x = centerX + radius * Math.cos(index * angleIncrement)
      const y = centerY + radius * Math.sin(index * angleIncrement)
      positions.push({ id: key, x, y })
      index++
    })

    return positions
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')

    if (!ctx) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw nodes
    const nodePositions = calculateNodePositions(graph.nodes.size, canvas.width, canvas.height)
    let index = 0
    graph.nodes.forEach((value: GraphNode, key: string) => {
      drawNode(ctx, nodePositions[index].x, nodePositions[index].y, value)
      index++
    })

    // Draw edges
    graph.nodes.forEach((node: GraphNode) => {
      const fromPosition = nodePositions.find((pos) => pos.id === node.id)
      if (!fromPosition) return
      node.edges.forEach((weight, targetId) => {
        const toNode = graph.getNode(targetId)
        if (toNode) {
          const toPosition = nodePositions.find((pos) => pos.id === toNode.id)
          if (!toPosition) return
          drawEdge(ctx, fromPosition.x, fromPosition.y, toPosition.x, toPosition.y, weight)
        }
      })
    })
  }, [calculateNodePositions])

  // Function to draw nodes
  // Function to draw nodes
  const drawNode = (ctx: CanvasRenderingContext2D, x: number, y: number, node: GraphNode) => {
    const img = new Image()
    img.src = node.image
    img.onload = () => {
      ctx.beginPath()
      ctx.arc(x, y, 30, 0, 2 * Math.PI)
      ctx.strokeStyle = 'black'
      ctx.lineWidth = 1
      ctx.stroke()
      ctx.closePath() // Close the path after drawing the circle

      // Clip the region before drawing the image
      ctx.save()
      ctx.clip()
      ctx.drawImage(img, x - 30, y - 30, 60, 60)
      ctx.restore() // Restore the clipping region

      ctx.fillStyle = '#262626'
      ctx.font = '14px __Source_Serif_4_4416bf'
      ctx.fillText(node.name, x - 17, y + 45)
    }
  }

  // Function to draw edges
  const drawEdge = (
    ctx: CanvasRenderingContext2D,
    fromX: number,
    fromY: number,
    toX: number,
    toY: number,
    weight: number
  ) => {
    if (weight === 1) {
      ctx.beginPath()
      ctx.moveTo(fromX, fromY)
      ctx.lineTo(toX, toY)
      ctx.strokeStyle = 'black'
      ctx.lineWidth = 1
      ctx.stroke()
      ctx.closePath()
    }

    if (weight === 2) {
      ctx.beginPath()
      ctx.moveTo(fromX, fromY)
      ctx.lineTo(toX, toY)
      ctx.strokeStyle = 'black'
      ctx.lineWidth = 1
      ctx.stroke()
      ctx.closePath()

      ctx.beginPath()
      ctx.moveTo(fromX + 2.5, fromY + 2.5)
      ctx.lineTo(toX + 2.5, toY + 2.5)
      ctx.strokeStyle = 'black'
      ctx.lineWidth = 1
      ctx.stroke()
      ctx.closePath()
    }

    if (weight >= 3) {
      ctx.beginPath()
      ctx.moveTo(fromX, fromY)
      ctx.lineTo(toX, toY)
      ctx.strokeStyle = 'black'
      ctx.lineWidth = 1
      ctx.stroke()
      ctx.closePath()

      ctx.beginPath()
      ctx.moveTo(fromX + 2.5, fromY + 2.5)
      ctx.lineTo(toX + 2.5, toY + 2.5)
      ctx.strokeStyle = 'black'
      ctx.lineWidth = 1
      ctx.stroke()
      ctx.closePath()

      ctx.fillStyle = 'black'
      ctx.font = '14px __Source_Serif_4_4416bf'

      // calculate the text position based on the line direction, and the image size
      let textX = fromX
      let textY = fromY
      if (fromX < toX) {
        textX = fromX + (toX - fromX) / 2
        textY = fromY + (toY - fromY) / 2
      } else {
        textX = toX + (fromX - toX) / 2
        textY = toY + (fromY - toY) / 2

        // adjust the text position to be under the line
        textY += 15

        // adjust the text position to be in the middle of the line
        textX -= 20
      }

      ctx.fillText(weight.toString(), textX, textY)
    }
  }

  return <canvas ref={canvasRef} width={width} height={height} />
}

export default GraphCanvas
