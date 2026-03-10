import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Sora, Lora } from "next/font/google"
import { CardPassos } from "@/components/CardPassos"
import { Metadata } from "next"

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  title: "Guia de Iniciantes - Arte do Sushi",
}


export default function GuiaIniciantesPage() {
  return (
    <>
      <HeroGuia />
      <CardsPassoAPasso />
    </>
  )
}

function HeroGuia() {
  return (
    <section className=" overflow-hidden relative">

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-16 md:flex-row md:py-20">
        <div className="flex-1">
          <h1 className={`${lora.className}  text-3xl font-meddium leading-tight text-foreground md:text-5xl  text-balance`}>
            Guia básico para{" "}
            <span className={`text-primary  block  ${lora.className}`}>Iniciantes</span>
          </h1>
          <p className="mt-4 max-w-sm text-md leading-relaxed text-muted-foreground">
            Fazer sushi pode parecer intimidador no início, mas com paciência, prática e os conhecimentos certos, qualquer pessoa pode aprender.
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
            src="/images/recent-product-img (1).png"
            alt="Sushi fresco no tabua de madeira com molho de soja"
            width={480}
            height={340}
            className="rounded-2xl object-cover"
            priority
          />
        </div>
      </div>


      <div className="mx-auto flex max-w-4xl items-center justify-center gap-6 px-6 md:gap-12">
        <Image
          src="/images/product-img-3.png"
          alt="Sushi maki rolls"
          width={180}
          height={140}
          className="rounded-xl object-cover"
        />
        <Image
          src="/images/product-img-1.png"
          alt="Nigiri de salmao"
          width={180}
          height={140}
          className="rounded-xl object-cover"
        />
        <Image
          src="/images/product-img-2.png"
          alt="Temaki e sushi variados"
          width={180}
          height={140}
          className="rounded-xl object-cover"
        />
      </div>
    </section>
  )
}

function CardsPassoAPasso() {
  return (
    <section className="py-16 md:py-24" id="passos">

  <img
    src="/images/canto.png"
    alt="Decoração esquerda"
    className="absolute top-158 h-410 -left-5  max-[1293px]:hidden "
  />

  <img
    src="/images/canto.png"
    alt="Decoração direita"
    className="absolute top-158 h-410 right-1 max-[1293px]:hidden"
  />

      <CardPassos
        className="hover:scale-105 transition"

        numero={1}
        titulo="Comece com o Básico"
        descricao="Antes de tentar fazer sushi em casa, experimente diferentes tipos em restaurantes japoneses autênticos.
"
        dicas={[
          "Visite restaurantes especializados em sushi",
          "Experimente nigiri, maki e temaki",
          "Observe como o sushi e apresentado e servido",
          "Preste atenção às temperaturas e texturas"
        ]}
      />

      <CardPassos
        className="hover:scale-105 transition"

        numero={2}
        titulo="Entenda os Ingredientes"
        descricao="Familiarize-se com os ingredientes essenciais e suas qualidades."
        dicas={[
          "Aprenda sobre arroz de sushi japonês",
          "Entenda a importância do vinagre de arroz",
          "Conheça os tipos de peixe mais comuns",
          "Saiba onde comprar ingredientes de qualidade"
        ]}
      />

      <CardPassos
        className="hover:scale-105 transition"

        numero={3}
        titulo="Invista em Equipamentos"
        descricao="Não precisa de muito, mas alguns itens são essenciais para começar."
        dicas={[
          "Compre uma esteira de bambu (makisu)",
          "Tenha uma tigela grande de madeira ou vidro",
          "Invista em uma faca afiada",
          "Use papel filme para proteger a esteira"
        ]}
      />


      <CardPassos
        className="hover:scale-105 transition"

        numero={4}
        titulo="Pratique o Arroz"
        descricao="O arroz é a base do sushi. Domine sua preparação antes de tudo."
        dicas={[
          "Lave o arroz até a água ficar clara",
          "Domine o tempero com vinagre",
          "Aprenda a proporção correta de água",
          "Pratique até conseguir a textura ideal"
        ]}
      />

      <CardPassos
        className="hover:scale-105 transition"

        numero={5}
        titulo="Comece com Maki Simples"
        descricao="Maki (rolinhos) são mais fáceis de dominar que nigiri para iniciantes."
        dicas={[
          "Comece com pepino ou abacate",
          "Pratique enrolar com firmeza",
          "Use menos recheio no início",
          "Aprenda a cortar com faca úmida"
        ]}
      />


      <CardPassos
        className="hover:scale-105 transition"

        numero={6}
        titulo="Progrida Gradualmente"
        descricao="Avance para técnicas mais complexas conforme ganha confiança."
        dicas={[
          "Tente uramaki (inside-out rolls)",
          "Experimente diferentes combinações",
          "Pratique nigiri com peixe cozido primeiro",
          "Aprenda técnicas de apresentação"
        ]}
      />


    </section>

  )
}


