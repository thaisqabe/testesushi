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
    <section className="relative overflow-hidden ">
      <LeafDecoration className="absolute top-6 left-6 opacity-40" />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-1 px-6 py-16 md:flex-row md:py-24">
        <div className="flex-1">
          <h1 className={`${lora.className} text-4xl font-meddium leading-tight text-foreground md:text-5xl lg:text-6xl text-balance`} >
            Descubra a elegancia e sofisticacao da{" "}
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
              src="/images/sushi-hero-home.jpg"
              alt="Bandeja elegante de sushi com variedades de nigiri e maki"
              width={500}
              height={400}
              className="rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </div>
      <LeafDecoration className="absolute bottom-12 right-6 opacity-30 rotate-45" />
    </section>
  )
}

function SushiRollSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Dark green arc */}
      <div className="relative">
        <svg viewBox="0 0 1440 200" className="w-full block" preserveAspectRatio="none">
          <path d="M0,0 L1440,0 L1440,120 Q720,220 0,120 Z" fill="#1B4332" />
        </svg>
      </div>

      {/* Salmon/orange section with white curves */}
      <div className="relative bg-peach-dark py-24 md:py-36">
        {/* Decorative white curved lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className=" inset-0 w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="none">
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

function LeafDecoration({ className }: { className?: string }) {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      className={className}
    >
      <path
        d="M40 10C40 10 20 30 20 50C20 65 30 70 40 70C50 70 60 65 60 50C60 30 40 10 40 10Z"
        stroke="#C0706B"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M40 15C40 15 25 32 25 48C25 60 32 65 40 65C48 65 55 60 55 48C55 32 40 15 40 15Z"
        stroke="#C0706B"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
      <line x1="40" y1="20" x2="40" y2="65" stroke="#C0706B" strokeWidth="1" opacity="0.4" />
      <line x1="30" y1="40" x2="40" y2="35" stroke="#C0706B" strokeWidth="0.8" opacity="0.3" />
      <line x1="50" y1="40" x2="40" y2="35" stroke="#C0706B" strokeWidth="0.8" opacity="0.3" />
      <line x1="28" y1="50" x2="40" y2="44" stroke="#C0706B" strokeWidth="0.8" opacity="0.3" />
      <line x1="52" y1="50" x2="40" y2="44" stroke="#C0706B" strokeWidth="0.8" opacity="0.3" />
    </svg>
  )
}
