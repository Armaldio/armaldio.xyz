import type { DefineComponent } from "vue"

export interface Timeline {
  title: string
  description: string
  startDate: string
  endDate?: string
  icon?: DefineComponent | undefined
  company?: string | undefined
  place?: string | undefined
}

export class TimelineGraph {
  pen: number[]

  constructor() {
    this.pen = [0, 0]
  }

  creatCurve(right = 10) {
    return `M ${right} 0 C ${right} ${right} 0 0 0 ${right}`
  }

  createLine(distance = 10) {
    return `M 0 0 L 0 ${distance}`
  }
}

const graph = new TimelineGraph()
const pen1 = graph
  .createLine(10) // first line

pen1
  .createLine(20)

