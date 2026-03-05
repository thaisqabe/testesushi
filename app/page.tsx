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
    <section className="relative overflow-hidden">
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
      {/* <LeafDecoration className="absolute bottom-12 right-6 opacity-30 rotate-45" /> */}
    </section>
  )
}

function SushiRollSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative">
        <svg viewBox="0 0 1440 150" className="w-full block" preserveAspectRatio="none">
          <path d="M0,100 
     C360,10 1080,10 1440,100 
     L1440,160 
     L0,160 
     Z"
            fill="#1D2D26" />
        </svg>
      </div>







<svg viewBox="0 0 1440 400" preserveAspectRatio="none">
  <path
    d="
      M0,150
      C360,50 1080,50 1440,150
      C1080,250 360,250 0,150
      Z
    "
    fill="#1D2D26"
  />
</svg>



      <div className="relative bg-peach-dark py-24 md:py-36">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className=" inset-0 w-full h-full" viewBox="0 0 14400 400" preserveAspectRatio="none">

            <path d="M400,0 Q350,150 320,300 Q290,450 260,600" stroke="white" strokeWidth="2" fill="none" opacity="0.4" />
            <path d="M440,0 Q390,150 360,300 Q330,450 300,600" stroke="white" strokeWidth="2" fill="none" opacity="0.35" />
            <path d="M480,0 Q430,150 400,300 Q370,450 340,600" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
            <path d="M520,0 Q470,150 440,300 Q410,450 380,600" stroke="white" strokeWidth="2" fill="none" opacity="0.25" />
            <path d="M560,0 Q510,150 480,300 Q450,450 420,600" stroke="white" strokeWidth="2" fill="none" opacity="0.2" />
            <path d="M600,0 Q550,150 520,300 Q490,450 460,600" stroke="white" strokeWidth="2" fill="none" opacity="0.15" />
          </svg>
        </div>


        <InfoCard
          titulo="História"
          fonteTitulo={lora.className}
          descricao="Conheca a origem do sushi!"
          fonteTexto={sora.className}
          href="/historia"
          cor="bg-[#D45850]"
          titleClassName="text-4xl font-serif"
          descriptionClassName="text-base font-light"
          className="hover:scale-105 transition max-w-md mx-auto"
        />

        <InfoCard
          titulo="Guia de iniciantes"
          descricao="Dicas para inciar na culinária japonesa!"
          href="/historia"
          cor="bg-[#84BE88]"
          titleClassName="text-4xl font-serif"
          descriptionClassName="text-base font-light"
          className="hover:scale-105 transition max-w-md mx-auto mt-30"
        />

      </div>

      {/* Bottom curve back to background */}
      <div className="relative">
        <svg viewBox="0 0 1440 100" className="w-full block" preserveAspectRatio="none">
          <path d="M0,0 L1440,0 L1440,100 L0,100 Z" fill="var(--peach-dark)" />
          <path d="M0,30 Q720,120 1440,30 L1440,100 L0,100 Z" fill="var(--background)" />
        </svg>
      </div>
    </section>
  )
}

