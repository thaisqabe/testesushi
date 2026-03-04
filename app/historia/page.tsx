import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Historia do Sushi - Arte do Sushi",
  description: "Conheca a cultura e historia milenar do sushi, desde suas origens no Sudeste Asiatico ate a culinaria japonesa moderna.",
}

export default function HistoriaPage() {
  return (
    <>
      <HeroHistoria />
      <OrigensSection />
      <DecorativeCurves />
      <PrincipiosSection />
    </>
  )
}

function HeroHistoria() {
  return (
    <section className="bg-peach overflow-hidden relative">
      <LeafDecoration className="absolute top-4 right-8 opacity-40" />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-16 md:flex-row md:py-20">
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/sushi-rolls.jpg"
            alt="Rolos de sushi maki cortados mostrando o interior"
            width={350}
            height={280}
            className="rounded-2xl object-cover"
            priority
          />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl text-balance">
            Cultura e historia{" "}
            <span className="text-primary font-serif">do sushi</span>
          </h1>
        </div>
      </div>
    </section>
  )
}

function OrigensSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl bg-peach p-8 md:p-12">
          <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Origens do sushi
          </h2>
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="flex-1">
              <div className="flex flex-col gap-4 text-sm leading-relaxed text-foreground/80">
                <p>
                  O sushi tem suas raizes no seculo VII, quando surgiu como um metodo de conservacao de peixes em arroz fermentado no Sudeste Asiatico. O peixe era preservado em arroz fermentado e depois o arroz era descartado.
                </p>
                <p>
                  {'No periodo Edo (1603-1868), em Toquio, o sushi evoluiu para sua forma moderna. O chef Hanaya Yohei criou o "edomae-zushi" (sushi ao estilo de Edo), usando peixe fresco da baia de Toquio e servindo-o imediatamente sobre arroz temperado.'}
                </p>
                <p>
                  Esta inovacao transformou o sushi de um metodo de preservacao para uma experiencia gastronomica que celebra o frescor e a qualidade dos ingredientes.
                </p>
              </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
              <Image
                src="/images/sushi-chef.jpg"
                alt="Chef de sushi japones preparando sushi em um restaurante tradicional"
                width={360}
                height={280}
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DecorativeCurves() {
  return (
    <div className="relative overflow-hidden">
      <svg viewBox="0 0 1440 120" className="w-full block" preserveAspectRatio="none">
        <path d="M0,60 Q360,0 720,60 Q1080,120 1440,60" stroke="#F5C6A0" strokeWidth="3" fill="none" opacity="0.4" />
        <path d="M0,70 Q360,10 720,70 Q1080,130 1440,70" stroke="#F5C6A0" strokeWidth="2" fill="none" opacity="0.3" />
        <path d="M0,80 Q360,20 720,80 Q1080,140 1440,80" stroke="#F5C6A0" strokeWidth="2" fill="none" opacity="0.25" />
        <path d="M0,50 Q360,-10 720,50 Q1080,110 1440,50" stroke="#F5C6A0" strokeWidth="2" fill="none" opacity="0.2" />
      </svg>
    </div>
  )
}

function PrincipiosSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header card */}
        <div className="mx-auto mb-12 max-w-xl rounded-full bg-forest px-8 py-6 text-center">
          <h2 className="mb-2 font-serif text-2xl font-bold text-[#FFF5EE] md:text-3xl">
            Principios Fundamentais
          </h2>
          <p className="text-sm text-[#FFF5EE]/80">
            A culinaria japonesa e guiada por valores profundos que vao alem do sabor
          </p>
        </div>

        {/* Principles grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <PrincipleCard
            title="Respeito aos Ingredientes"
            description="A filosofia japonesa de valorizar cada ingrediente em sua forma mais pura e natural."
          />
          <PrincipleCard
            title="Hospitalidade (Omotenashi)"
            description="A arte de antecipar e atender as necessidades dos convidados com sinceridade."
          />
          <PrincipleCard
            title="Simplicidade Elegante"
            description="Menos e mais - cada elemento tem um proposito e significado."
            accent
          />
          <PrincipleCard
            title="Harmonia com as Estacoes"
            description="Usar ingredientes sazonais no auge de seu frescor e sabor."
            accent
          />
        </div>
      </div>
    </section>
  )
}

function PrincipleCard({
  title,
  description,
  accent = false,
}: {
  title: string
  description: string
  accent?: boolean
}) {
  return (
    <div
      className={`rounded-2xl p-6 md:p-8 ${
        accent
          ? "bg-olive text-foreground"
          : "bg-forest text-[#FFF5EE]"
      }`}
    >
      <h3 className={`mb-3 text-lg font-bold md:text-xl ${accent ? "text-foreground" : "text-[#FFF5EE]"}`}>
        {title}
      </h3>
      <p className={`text-sm leading-relaxed ${accent ? "text-foreground/80" : "text-[#FFF5EE]/80"}`}>
        {description}
      </p>
    </div>
  )
}

function LeafDecoration({ className }: { className?: string }) {
  return (
    <svg
      width="70"
      height="70"
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
    </svg>
  )
}
