import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ScrollToTop } from "@/components/scroll-to-top"
import InfoCard from "@/components/InfoCard"
import { Sora, Lora } from "next/font/google"

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SushiRollSection />
      <ScrollToTop />
    </>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden" >
      {/* <LeafDecoration className="absolute top-6 left-6 opacity-40" /> */}
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-1 px-6 py-16 md:flex-row md:py-35">
        <div className="flex-1">
          <h1 className={`${lora.className} text-4xl font-meddium leading-tight text-foreground md:text-5xl lg:text-6xl text-balance`} >
            Descubra a elegância e sofisticação da{" "}
            <span className={`text-primary font-serif ${lora.className}`}>Culinária Japonesa</span>
          </h1>
          <div className="mt-8">
            <Link
              href="/guia-iniciantes"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Descubra
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md">
            <Image
              src="/images/home-sushi-rolls.png"
              alt="Bandeja elegante de sushi com variedades de nigiri e maki"
              width={800}
              height={700}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function SushiRollSection() {
  return (
    <section className="relative overflow-hidden py-32 md:py-48 min-h-screen mb-0">
      <svg
        viewBox="0 0 1280 2180"
        className="absolute inset-0 w-full h-full object-cover"
        xmlns="http://www.w3.org/2000/svg"
      >

        <ellipse cx="613.5" cy="1138.5" rx="1576.5" ry="1138.5" fill="#1d2d26" />
        {/* hidden sm:block */}
        <ellipse
          cx="622"
          cy="1045"
          rx="1467"
          ry="893"
          fill="#ffffff"
        />

        <ellipse
          cx="625"
          cy="1036.5"
          rx="1157"
          ry="713.5"
          fill="#e4966a"
        />

        <defs>
          <path id="salmonLine" d="m398.515 355.25-.965.263c3.785 14.663 6.555 27.234 9.18 42.052 31.629 124.503-46.77 232.692-87.494 347.335-37.93 120.012-5.024 247.422 36.874 360.91 4.263 11.41 9.693 24.29 14.721 34.75q9.002 18.93 20.361 38.31c.306-.13.612-.26.917-.4-4.308-14.33-8.664-28.06-13.098-41.22-3.659-10.95-8.372-23.99-12.6-35.3-41.618-112.743-74.334-237.293-38.782-354.512 38.061-111.704 116.327-226.308 81.138-350.255-2.978-14.817-6.106-27.342-10.252-41.933" />
        </defs>

        <g fill="#ffffff">
          <use href="#salmonLine" transform="translate(-200 300)" />
          <use href="#salmonLine" transform="translate(0 300)" />
          <use href="#salmonLine" transform="translate(200 300)" />
          <use href="#salmonLine" transform="translate(300 300)" />
          <use href="#salmonLine" transform="translate(500 300)" />
          <use href="#salmonLine" transform="translate(700 300)" />
        </g>

      </svg>


      <div className="relative z-10 flex flex-col items-center justify-center gap-20 min-h-screen px-6">
        <InfoCard
          titulo="História"
          fonteTitulo={lora.className}
          descricao="Conheça um pouco da história e origem do sushi!"
          fonteTexto={sora.className}
          href="/historia"
          cor="bg-[#D45850]"
          className="hover:scale-105 transition"
        />

        <InfoCard
          titulo="Guia de iniciantes"
          fonteTitulo={lora.className}

          descricao="Dicas para inciar na culinária japonesa!"
          fonteTexto={sora.className}

          href="/guia-iniciantes"
          cor="bg-[#84BE88]"
          className="hover:scale-105 transition"
        />

      </div>


    </section>
  )
}