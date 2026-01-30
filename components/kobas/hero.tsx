import Image from "next/image"

export function Hero() {
  return (
    <section className="px-4 py-12 md:py-24 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center gap-10 text-center lg:flex-row-reverse lg:text-left">
          {/* Hero Image */}
          <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-2xl shadow-primary/10 lg:w-1/2">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpmEIEUTDNc-WJRTlSiSlh9AiQ0C8yDtGVpFN-iclKf9GuIB-J6tHqZHOMPyo1F7KqfAvAFLBnD7-mafA00Qxb2iuTazOaUKcCYWBrJ-3L-3XEqRa53kYFjgmqEHXGT3DhiTDuYA9N6ygLVfdIUDT-U5i6YnDUON9xKm2AZeWo1uQC7u0mLN7i6K8B5VUgGaPaZOuyxJUsKjpMpf6I4cieBFwHEPx-k_Hafl4eFAgiWiP_Ik-xigltpdLxgH9FTeFHe4IGlkg_45B0"
              alt="Digital representation of high tech software engineering workspace"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/80 to-primary/20" />
          </div>

          {/* Hero Content */}
          <div className="flex flex-col gap-8 lg:w-1/2">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl font-black leading-tight tracking-tight text-foreground md:text-6xl">
                Kobas Labs LLC
              </h1>
              <p className="mx-auto max-w-[600px] text-lg leading-relaxed text-muted-foreground lg:mx-0">
                Kobas Labs is a software development company focused on building high-quality mobile and web products. We help startups and businesses launch, scale, and automate their digital operations through modern engineering and reliable delivery.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <button className="min-w-[160px] rounded-lg bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20">
                Contact Us
              </button>
              <button className="min-w-[160px] rounded-lg border-2 border-primary/30 bg-transparent px-8 py-4 text-base font-bold text-primary transition-all hover:bg-primary/10">
                Our Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
