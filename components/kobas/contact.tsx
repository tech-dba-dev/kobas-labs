import { Mail, Phone, MapPin } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "tech@kobaslabs.com",
    isLink: true,
    href: "mailto:tech@kobaslabs.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+351 910 705 182",
    isLink: true,
    href: "tel:+351910705182",
  },
  {
    icon: MapPin,
    title: "Our Office",
    content: "131 Continental Dr, Suite 305,\nNewark, DE 19713, USA",
    isLink: false,
  },
]

export function Contact() {
  return (
    <section id="contact" className="px-4 py-20 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="mb-16 px-4 text-center">
          <h2 className="mb-4 text-4xl font-bold leading-tight text-foreground">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground">
            Ready to start your next project? Reach out to our team of experts and let's build something incredible together.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-3">
          {contactInfo.map((info) => (
            <div
              key={info.title}
              className="flex flex-col items-center rounded-xl border border-transparent bg-secondary p-8 transition-all hover:border-primary/30"
            >
              <div className="mb-6 flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                <info.icon className="size-5" />
              </div>
              <h4 className="mb-2 text-lg font-bold text-foreground">{info.title}</h4>
              {info.isLink ? (
                <a
                  href={info.href}
                  className="font-medium text-primary hover:underline"
                >
                  {info.content}
                </a>
              ) : (
                <p className="whitespace-pre-line text-center text-sm text-muted-foreground">
                  {info.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
