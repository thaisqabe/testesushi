import { CheckCircle2 } from "lucide-react"
import { Lora } from "next/font/google"

const lora = Lora({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
})

export type CardPassosProps = {
    numero: number
    titulo: string
    descricao: string
    dicas?: string[]
    className?: string
}

export function CardPassos({
    numero,
    titulo,
    descricao,
    dicas = [],
    className = "",
}: CardPassosProps) {
    return (
        <div
            className={`${className} my-6 mx-auto w-full max-w-6xl rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8`}
        >
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-row md:flex-col items-center md:items-center gap-4 md:gap-0">
                    <div className="flex w-20 h-20 mt-7 items-center justify-center rounded-xl bg-olive/20">
                        <span className="text-4xl font-bold text-olive  md:text-5xl">{numero}</span>
                    </div>
                </div>

                <div className="flex-1">
                    <h3 className={`${lora.className} text-xl md:text-2xl font-bold text-foreground`}>
                        {titulo}
                    </h3>
                    <p className="mt-2 text-md md:text-lg leading-relaxed text-muted-foreground">
                        {descricao}
                    </p>

                    {dicas.length > 0 && (
                        <div className={`${lora.className} mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2`}>
                            {dicas.map((dica) => (
                                <div key={dica} className="flex items-start gap-2">
                                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-olive" />
                                    <span className="text-sm md:text-md leading-relaxed text-muted-foreground">
                                        {dica}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}