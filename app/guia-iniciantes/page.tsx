import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Guia para Iniciantes - Arte do Sushi",
  description: "Aprenda o basico sobre como fazer sushi em casa com nosso guia passo a passo para iniciantes.",
}

const steps = [
  {
    number: 1,
    title: "Comece com o Basico",
    description:
      "Antes de tentar fazer sushi em casa, experimente diferentes tipos em restaurantes japoneses autenticos.",
    tips: [
      "Visite restaurantes especializados em sushi",
      "Experimente nigiri, maki e temaki",
      "Observe como o sushi e apresentado e servido",
      "Preste atencao as temperaturas e texturas",
    ],
  },
  {
    number: 2,
    title: "Entenda os Ingredientes",
    description:
      "Familiarize-se com os ingredientes essenciais e suas qualidades.",
    tips: [
      "Aprenda sobre arroz de sushi japones",
      "Conheca os tipos de peixe mais comuns",
      "Entenda a importancia do vinagre de arroz",
      "Saiba onde comprar ingredientes de qualidade",
    ],
  },
  {
    number: 3,
    title: "Invista em Equipamentos",
    description:
      "Nao precisa de muito, mas alguns itens sao essenciais para comecar.",
    tips: [
      "Compre uma esteira de bambu (makisu)",
      "Invista em uma faca afiada",
      "Tenha uma tigela grande de madeira ou vidro",
      "Use papel filme para proteger a esteira",
    ],
  },
  {
    number: 4,
    title: "Pratique o Arroz",
    description:
      "O arroz e a base do sushi. Domine sua preparacao antes de tudo.",
    tips: [
      "Lave o arroz ate a agua ficar clara",
      "Aprenda a proporcao correta de agua",
      "Domine o tempero com vinagre",
      "Pratique ate conseguir a textura ideal",
    ],
  },
  {
    number: 5,
    title: "Comece com Maki Simples",
    description:
      "Maki (rolinhos) sao mais faceis de dominar que nigiri para iniciantes.",
    tips: [
      "Comece com pepino ou abacate",
      "Use menos recheio no inicio",
      "Pratique enrolar com firmeza",
      "Aprenda a cortar com faca umida",
    ],
  },
  {
    number: 6,
    title: "Progrida Gradualmente",
    description:
      "Avance para tecnicas mais complexas conforme ganha confianca.",
    tips: [
      "Tente uramaki (inside-out rolls)",
      "Pratique nigiri com peixe cozido primeiro",
      "Experimente diferentes combinacoes",
      "Aprenda tecnicas de apresentacao",
    ],
  },
]

export default function GuiaIniciantesPage() {
  return (
    <>
      <HeroGuia />
      <SushiImageStrip />
      <StepsSection />
    </>
  )
}

function HeroGuia() {
  return (
    <section className="bg-peach overflow-hidden relative">
      {/* Decorative sushi illustrations on sides */}
      <SushiSideDecoration className="absolute top-10 right-0 opacity-20 hidden lg:block" />
      <SushiSideDecoration className="absolute bottom-10 left-0 opacity-20 hidden lg:block rotate-180" />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-16 md:flex-row md:py-20">
        <div className="flex-1">
          <h1 className="text-3xl font-bold leading-tight text-foreground md:text-4xl text-balance">
            Guia basico para{" "}
            <span className="text-primary font-serif block">Iniciantes</span>
          </h1>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Fazer sushi pode parecer intimidador no inicio, mas com paciencia, pratica e os conhecimentos certos, qualquer pessoa pode aprender.
          </p>
          <div className="mt-6">
            <Link
              href="#passos"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Saiba mais
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/sushi-hero-guia.jpg"
            alt="Sushi fresco no tabua de madeira com molho de soja"
            width={480}
            height={340}
            className="rounded-2xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}

function SushiImageStrip() {
  return (
    <section className="py-12">
      <div className="mx-auto flex max-w-4xl items-center justify-center gap-6 px-6 md:gap-12">
        <Image
          src="/images/sushi-rolls.jpg"
          alt="Sushi maki rolls"
          width={180}
          height={140}
          className="rounded-xl object-cover"
        />
        <Image
          src="/images/sushi-nigiri.jpg"
          alt="Nigiri de salmao"
          width={180}
          height={140}
          className="rounded-xl object-cover"
        />
        <Image
          src="/images/sushi-temaki.jpg"
          alt="Temaki e sushi variados"
          width={180}
          height={140}
          className="rounded-xl object-cover"
        />
      </div>
    </section>
  )
}

function StepsSection() {
  return (
    <section id="passos" className="relative pb-20">
      {/* Side decorative elements for larger screens */}
      <SushiSideDecoration className="absolute top-20 right-0 opacity-15 hidden xl:block" />
      <SushiSideDecoration className="absolute top-[40%] left-0 opacity-15 hidden xl:block rotate-180" />
      <SushiSideDecoration className="absolute bottom-20 right-0 opacity-15 hidden xl:block" />
      
      <div className="mx-auto flex max-w-3xl flex-col gap-8 px-6">
        {steps.map((step) => (
          <StepCard key={step.number} step={step} />
        ))}
      </div>
    </section>
  )
}

function StepCard({
  step,
}: {
  step: (typeof steps)[number]
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
      <div className="flex gap-6">
        {/* Number column */}
        <div className="flex flex-col items-center">
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-olive/20">
            <span className="sr-only">Passo</span>
          </div>
          <span className="mt-2 text-4xl font-bold text-olive md:text-5xl">
            {step.number}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-lg font-bold text-foreground md:text-xl">
            {step.title}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {step.description}
          </p>

          {/* Tips grid */}
          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {step.tips.map((tip) => (
              <div key={tip} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-olive" />
                <span className="text-xs leading-relaxed text-muted-foreground">
                  {tip}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function SushiSideDecoration({ className }: { className?: string }) {
  return (
    <svg
      width="60"
      height="200"
      viewBox="0 0 60 200"
      fill="none"
      className={className}
    >
      {/* Maki roll */}
      <circle cx="30" cy="30" r="18" fill="#1B4332" opacity="0.3" />
      <circle cx="30" cy="30" r="12" fill="#FFF5EE" opacity="0.4" />
      <circle cx="30" cy="30" r="6" fill="#E8734A" opacity="0.5" />
      
      {/* Nigiri */}
      <ellipse cx="30" cy="90" rx="20" ry="10" fill="#F5C6A0" opacity="0.3" />
      <ellipse cx="30" cy="87" rx="16" ry="7" fill="#E8734A" opacity="0.4" />
      
      {/* Chopsticks */}
      <line x1="15" y1="130" x2="45" y2="180" stroke="#C0706B" strokeWidth="2" opacity="0.3" />
      <line x1="20" y1="130" x2="50" y2="180" stroke="#C0706B" strokeWidth="2" opacity="0.25" />
    </svg>
  )
}
