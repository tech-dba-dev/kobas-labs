import Link from "next/link"
import { Header } from "@/components/kobas/header"
import { Footer } from "@/components/kobas/footer"
import { Database, Eye, Share2, History, ShieldCheck, Mail } from "lucide-react"

const sections = [
  { id: "intro", label: "Introduction" },
  { id: "collect", label: "Information we collect" },
  { id: "use", label: "How we use information" },
  { id: "sharing", label: "Sharing" },
  { id: "retention", label: "Data retention" },
  { id: "rights", label: "Your rights" },
  { id: "contact", label: "Contact" },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 py-12 lg:flex-row lg:px-10">
        {/* Sidebar Navigation */}
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-24">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">
              Contents
            </p>
            <nav className="flex flex-col gap-3 text-sm font-medium text-muted-foreground">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="transition-colors hover:text-primary"
                >
                  {section.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="max-w-[800px] flex-1">
          {/* Breadcrumbs */}
          <nav className="mb-6 flex items-center gap-2">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Home
            </Link>
            <span className="text-sm font-medium text-muted-foreground">/</span>
            <span className="text-sm font-medium text-foreground">Privacy Policy</span>
          </nav>

          {/* Page Heading */}
          <header className="mb-12">
            <h1 className="mb-3 text-5xl font-black leading-tight tracking-tight text-foreground">
              Privacy Policy
            </h1>
            <p className="text-base text-muted-foreground">Last updated: October 24, 2023</p>
          </header>

          <div className="text-muted-foreground">
            {/* Introduction */}
            <section id="intro" className="mb-12">
              <p className="text-lg leading-relaxed">
                At Kobas Labs LLC, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our software development services. Please read this policy carefully.
              </p>
            </section>

            {/* Information we collect */}
            <section id="collect" className="mb-12 scroll-mt-24">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
                <Database className="size-6 text-primary" />
                Information we collect
              </h2>
              <p className="mb-4">
                We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, company name, and any other information you choose to provide.
              </p>
              <div className="mt-4 rounded-xl border border-border bg-card p-6">
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>
                      <strong className="text-foreground">Personal Data:</strong> Name, email address, telephone number.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>
                      <strong className="text-foreground">Technical Data:</strong> IP address, browser type, and operating system.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>
                      <strong className="text-foreground">Usage Data:</strong> Information about how you use our website and services.
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* How we use information */}
            <section id="use" className="mb-12 scroll-mt-24">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
                <Eye className="size-6 text-primary" />
                How we use information
              </h2>
              <p className="mb-4">
                We use the information we collect to provide, maintain, and improve our services, to develop new products, and to protect Kobas Labs LLC and our users. Specific uses include:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>To provide and manage your account.</li>
                <li>To deliver the services you have requested.</li>
                <li>To communicate with you about updates or changes.</li>
                <li>To analyze usage trends and optimize user experience.</li>
              </ul>
            </section>

            {/* Sharing */}
            <section id="sharing" className="mb-12 scroll-mt-24">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
                <Share2 className="size-6 text-primary" />
                Sharing
              </h2>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information with:
              </p>
              <p>
                Trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
              </p>
            </section>

            {/* Data retention */}
            <section id="retention" className="mb-12 scroll-mt-24">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
                <History className="size-6 text-primary" />
                Data retention
              </h2>
              <p>
                We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
              </p>
            </section>

            {/* Your rights */}
            <section id="rights" className="mb-12 scroll-mt-24">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
                <ShieldCheck className="size-6 text-primary" />
                Your rights
              </h2>
              <p className="mb-6">
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-border p-5">
                  <h4 className="mb-2 font-bold text-foreground">Access & Portability</h4>
                  <p className="text-sm">
                    Request a copy of the data we hold about you in a machine-readable format.
                  </p>
                </div>
                <div className="rounded-lg border border-border p-5">
                  <h4 className="mb-2 font-bold text-foreground">Correction & Deletion</h4>
                  <p className="text-sm">
                    Request that we correct inaccuracies or delete your personal information.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section id="contact" className="mb-12 scroll-mt-24">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
                <Mail className="size-6 text-primary" />
                Contact
              </h2>
              <p className="mb-6">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact our Data Protection Officer:
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:privacy@kobaslabs.com"
                  className="text-lg font-bold text-primary hover:underline"
                >
                  privacy@kobaslabs.com
                </a>
                <p className="text-sm text-muted-foreground">
                  Kobas Labs LLC, 123 Tech Plaza, Innovation Way, CA 94043
                </p>
              </div>
            </section>
          </div>

          {/* Divider */}
          <div className="my-12 h-px w-full bg-border" />

          {/* Footer Note */}
          <footer className="pb-20 text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              Effective date: October 24, 2023. © 2023 Kobas Labs LLC. All rights reserved.
            </p>
          </footer>
        </div>
      </main>
      <Footer />
    </div>
  )
}
