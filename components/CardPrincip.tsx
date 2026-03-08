import { Lora, Sora } from "next/font/google"
const lora = Lora({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
})

const sora = Sora({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
})


type CardPrincipProps = {
    titulo: string

    descricao?: string

    tam?: "sm" | "md" | "lg"
    rounded?: "card" | "pill"
    center?: boolean
}

export default function CardPrincip({
    titulo,
    descricao,

    tam = "md",
    rounded = "card",
    center = false,
}: CardPrincipProps) {


    const padding = tam === "lg" ? "p-8 md:p-10" : tam === "sm" ? "p-4" : "p-6 md:p-8"

    const shape = rounded === "pill" ? "rounded-full px-8 py-6" : "rounded-2xl"

    const tituloClasses =
        (tam === "lg"
            ? `text-3xl md:text-3xl font-bold `
            : tam === "md"
                ? `text-2xl md:text-1xl font-bold `
                : `text-xl md:text-2xl font-bold `)

    const textoClasses =
        (tam === "lg"
            ? `text-base md:text-md  text-white/80`
            : tam === "md"
                ? `text-sm md:text-md  text-white/80`
                : `text-sm md:text-base  text-white/80`)

    return (
        <div
            className={`${lora.className} ${padding} ${shape} ${center ? "text-center mx-auto max-w-xl bg-[#275924] text-white" : ""
                }`}
        >
            <h3 className={`${tituloClasses} mb-2`}>{titulo}</h3>
            {descricao && <p className={`${sora.className} ${textoClasses} leading-relaxed`}>{descricao}</p>}
        </div>
    )
}