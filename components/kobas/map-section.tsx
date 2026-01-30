import { Map } from "lucide-react"

export function MapSection() {
  return (
    <section className="relative h-64 w-full overflow-hidden bg-secondary">
      <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <Map className="size-16 text-muted-foreground" />
        <p className="font-medium text-muted-foreground">Delaware Global Headquarters</p>
      </div>
    </section>
  )
}
