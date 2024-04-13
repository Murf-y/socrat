export class Graph {
    nodes: Map<string, GraphNode> = new Map()
    edgesCount: number = 0
    addPersonIfDoesNotExist(node: GraphNode) {
        if (this.nodes.has(node.id)) {
            return
        }
        this.nodes.set(node.id, node)
    }
    
    getNode(id: string) {
        return this.nodes.get(id)
    }
    
    addEdge(from: GraphNode, to: GraphNode) {
        if (!this.nodes.has(from.id)) {
            this.addPersonIfDoesNotExist(from)
        }
        if (!this.nodes.has(to.id)) {
            this.addPersonIfDoesNotExist(to)
        }
        from.addEdge(to)
        this.edgesCount++
    }

    getStringRepresentation() {
        // Source 1 Name => [Target 1 Name (weight), Target 2 Name (weight), ...]
        const result: string[] = []
        this.nodes.forEach((node) => {
            const edges: string[] = []
            node.edges.forEach((weight, targetId) => {
                const target = this.nodes.get(targetId)
                if (!target) {
                    console.error('Target node not found')
                    return
                }
                edges.push(`${target.name} (${weight})`)
            })
            result.push(`${node.name} => [${edges.join(', ')}]`)
        })
        return result.join('\n')
    }
}

export class GraphNode {
    id: string
    name: string
    image: string
    edges: Map<string, number> = new Map()
    
    constructor(id: string, name: string, image: string) {
        this.id = id
        this.name = name
        this.image = image
    }
    
    addEdge(node: GraphNode) {
        const edge = this.edges.get(node.id)
        if (edge) {
            this.edges.set(node.id, edge + 1)
        } else {
            this.edges.set(node.id, 1)
        }
    }
}


    
