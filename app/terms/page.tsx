import Link from "next/link"
import { Header } from "@/components/kobas/header"
import { Footer } from "@/components/kobas/footer"
import { Mail, MapPin, ArrowLeft } from "lucide-react"

const termsData = [
  {
    number: "01",
    title: "Use of the website",
    content: `Welcome to Kobas Labs LLC. By accessing this website, you agree to be bound by these Terms of Use and all applicable laws and regulations. You are responsible for compliance with any applicable local laws.`,
    bullets: [
      "You must not use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.",
      "You must not use this website to copy, store, host, transmit, send, use, publish or distribute any material which consists of any spyware, computer virus, or other malicious software.",
    ],
  },
  {
    number: "02",
    title: "Intellectual property",
    content: `The intellectual property rights in all software, designs, and content made available to you on or through this website remain the property of Kobas Labs LLC or its licensors and are protected by copyright laws and treaties around the world.

You may store, print, and display the content supplied solely for your own personal use. You are not permitted to publish, manipulate, distribute, or otherwise reproduce, in any format, any of the content or copies of the content supplied to you.`,
  },
  {
    number: "03",
    title: "No warranties",
    content: `This website is provided "as is" without any representations or warranties, express or implied. Kobas Labs LLC makes no representations or warranties in relation to this website or the information and materials provided on this website.`,
  },
  {
    number: "04",
    title: "Limitation of liability",
    content: `Kobas Labs LLC will not be liable to you (whether under the law of contact, the law of torts or otherwise) in relation to the contents of, or use of, or otherwise in connection with, this website for any direct, indirect, special or consequential loss.`,
  },
  {
    number: "05",
    title: "Changes",
    content: `Kobas Labs LLC may revise these Terms of Use for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Use.`,
  },
]

export default function TermsOfUsePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex flex-grow justify-center px-6 py-12">
        <div className="flex w-full max-w-[720px] flex-col">
          {/* Page Heading */}
          <div className="mb-10">
            <h1 className="mb-3 text-5xl font-black leading-tight tracking-tight text-foreground">
              Terms of Use
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <p className="text-base">Last updated: October 2023</p>
            </div>
          </div>

          {/* Intro Text */}
          <div className="mb-8 border-l-4 border-primary/40 py-2 pl-6">
            <p className="text-lg italic leading-relaxed text-muted-foreground">
              By using the services provided by Kobas Labs LLC, you agree to be bound by the following terms and conditions. Please read them carefully before proceeding with any of our software solutions.
            </p>
          </div>

          {/* Accordion Sections */}
          <div className="mb-12 flex flex-col">
            {termsData.map((term) => (
              <details
                key={term.number}
                className="group border-b border-border"
                open={term.number === "01"}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between py-6">
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-primary">{term.number}.</span>
                    <h3 className="text-xl font-bold text-foreground">{term.title}</h3>
                  </div>
                  <svg
                    className="size-5 text-primary transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="pb-6 pl-10">
                  <p className="mb-4 whitespace-pre-line text-base leading-relaxed text-muted-foreground">
                    {term.content}
                  </p>
                  {term.bullets && (
                    <ul className="space-y-3">
                      {term.bullets.map((bullet, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <svg
                            className="mt-1 size-4 shrink-0 text-primary"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </details>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mb-16 rounded-xl border border-primary/20 bg-primary/5 p-8">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
              Contact Information
            </h2>
            <p className="mb-6 text-base text-muted-foreground">
              If you have any questions about these Terms, the practices of this site, or your dealings with Kobas Labs, please reach out to our legal department.
            </p>
            <div className="flex flex-col gap-6 sm:flex-row">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/20">
                  <Mail className="size-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Email
                  </p>
                  <a href="mailto:legal@kobaslabs.com" className="font-medium text-primary hover:underline">
                    legal@kobaslabs.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/20">
                  <MapPin className="size-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Office
                  </p>
                  <p className="font-medium text-foreground">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Back button */}
          <div className="mb-20 flex justify-center">
            <Link
              href="/"
              className="flex items-center gap-2 font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
