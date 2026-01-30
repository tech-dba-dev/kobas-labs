import { Smartphone, Monitor, Bot } from "lucide-react"

const services = [
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "High-performance iOS and Android applications built for excellence. We leverage cross-platform and native technologies to ensure seamless user experiences.",
  },
  {
    icon: Monitor,
    title: "Web Platforms",
    description: "Scalable, modern web technologies for complex business needs. From custom dashboards to large-scale SaaS platforms, we build for the future.",
  },
  {
    icon: Bot,
    title: "Automation & AI",
    description: "Streamlining operations through intelligent automation and AI integration. Reduce overhead and increase productivity with smart engineering.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-secondary/50 px-4 py-16 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="mb-12 px-4">
          <div className="mb-2 flex items-center gap-3">
            <div className="h-[2px] w-8 bg-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Our Expertise
            </span>
          </div>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-foreground">
            Tailored Solutions for Modern Businesses
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col gap-6 rounded-xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <service.icon className="size-7" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
