import { CORE_CONCEPTS } from "../data"
import CoreConcept from "./CoreConcept"

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((coreConceptItem) => <CoreConcept key={coreConceptItem.title} {...coreConceptItem} />)}
      </ul>
    </section>
  )
}
