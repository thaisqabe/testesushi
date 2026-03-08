import Image from "next/image"
import type { Metadata } from "next"
import { Sora, Lora } from "next/font/google"
import CardPrincip from "@/components/CardPrincip"

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  title: "Historia do Sushi - Arte do Sushi",
}

export default function HistoriaPage() {
  return (
    <>
      <HeroHistoria />
      <OrigensSection />
            <Principios />

    </>
  )
}

function HeroHistoria() {
  return (
    <section className="relative z-10 overflow-hidden relative mb-40 ">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-50 px-6 py-16 md:flex-row md:py-20">

        <Image
          src="/images/about-sushi 1.png"
          alt="Rolos de sushi maki cortados mostrando o interior"
          width={350}
          height={280}
          className="rounded-2xl object-cover"
          priority
        />
        <div className="flex-1 flex justify-center">
          <div className="flex-1">
            <h1 className={`${lora.className} text-4xl font-meddium leading-tight text-foreground md:text-5xl lg:text-6xl text-balance`}>
              Cultura e história{" "}
              <span className={`text-primary font-serif ${lora.className}`}>do sushi</span>
            </h1>

          </div>
        </div>

      </div>
    </section>
  )
}

function OrigensSection() {
  return (
    <section className="relative py-16 md:py-24">

      
      <div className="relative mx-auto max-w-6xl px-6 z-10">
        
        <div className="rounded-3xl bg-[#EB8D55] p-8 md:p-12 z-10">
          <h2 className={`${lora.className} mb-6 text-5xl font-bold text-foreground md:text-4xl text-white`} >
            Origens do sushi
          </h2>
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="flex-1">
              <div className="flex flex-col gap-9 text-base mt-4 leading-relaxed text-foreground/80 text-white">
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
                src="/images/image 1.png"
                alt="Chef de sushi japones preparando sushi em um restaurante tradicional"
                width={300}
                height={160}
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>


          <div className="relative overflow-hidden mt-20 z-0">
      <svg viewBox="0 0 1440 120" className="w-full block" preserveAspectRatio="none">
        <path d="M0,60 Q360,0 720,60 Q1080,120 1440,60" stroke="#F5C6A0" strokeWidth="3" fill="none" opacity="0.4" />
        <path d="M0,70 Q360,10 720,70 Q1080,130 1440,70" stroke="#F5C6A0" strokeWidth="2" fill="none" opacity="0.3" />
        <path d="M0,80 Q360,20 720,80 Q1080,140 1440,80" stroke="#F5C6A0" strokeWidth="2" fill="none" opacity="0.25" />
        <path d="M0,50 Q360,-10 720,50 Q1080,110 1440,50" stroke="#F5C6A0" strokeWidth="2" fill="none" opacity="0.2" />
      </svg>
    </div>
    
    </section>
  )
}

function Principios(){
  return(



    <section className="relative py-16 md:py-24 z-10">



 <svg
        viewBox="0 0 1280 2180"
        className="absolute inset-0 w-full h-full object-cover mt-0 z-5"
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
          fill="#F58D92"
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
    
    <div className="relative z-10">

<CardPrincip
  titulo="Princípios Fundamentais"
  descricao="A culinária japonesa é guiada por valores profundos que vão além do sabor."
  rounded="pill"
  tam="lg"
  center
/>
</div>
<div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-5 relative z-10">

  <CardPrincip
    titulo="Respeito aos Ingredientes"
    descricao="A filosofia japonesa de valorizar cada ingrediente em sua forma mais pura e natural."
      rounded="pill"
  tam="md"
  center
  />

  <CardPrincip
    titulo="Hospitalidade (Omotenashi)"
    descricao="A arte de antecipar e atender as necessidades dos convidados com sinceridade."
          rounded="pill"
  tam="md"
  center
  />

  <CardPrincip
    titulo="Simplicidade Elegante"
    descricao="Menos é mais - cada elemento tem um propósito e significado."
          rounded="pill"
  tam="md"
  center
  />

  <CardPrincip
    titulo="Harmonia com as Estações"
    descricao="Usar ingredientes sazonais no auge de seu frescor e sabor."
          rounded="pill"
  tam="md"
  center
  />

</div>
</section>

  )
}


// function PrincipiosSection() {
//   return (
//     <section className="py-16 md:py-24">
      
//       <div className="mx-auto max-w-6xl px-6">
//         {/* Header card */}
//         <div className="mx-auto mb-12 max-w-xl rounded-full bg-forest px-8 py-6 text-center">
//           <h2 className="mb-2 font-serif text-2xl font-bold text-[#FFF5EE] md:text-3xl">
//             Principios Fundamentais
//           </h2>
//           <p className="text-sm text-[#FFF5EE]/80">
//             A culinaria japonesa e guiada por valores profundos que vao alem do sabor
//           </p>
//         </div>

//         {/* Principles grid */}
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//           <PrincipleCard
//             title="Respeito aos Ingredientes"
//             description="A filosofia japonesa de valorizar cada ingrediente em sua forma mais pura e natural."
//           />
//           <PrincipleCard
//             title="Hospitalidade (Omotenashi)"
//             description="A arte de antecipar e atender as necessidades dos convidados com sinceridade."
//           />
//           <PrincipleCard
//             title="Simplicidade Elegante"
//             description="Menos e mais - cada elemento tem um proposito e significado."
//             accent
//           />
//           <PrincipleCard
//             title="Harmonia com as Estacoes"
//             description="Usar ingredientes sazonais no auge de seu frescor e sabor."
//             accent
//           />
//         </div>
//       </div>
//     </section>
//   )
// }

