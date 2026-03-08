import Link from "next/link"
import { ArrowRight } from "lucide-react"


interface InfoCardProps {
  titulo: string
  descricao: string
  href: string
  cor?: string
  fonteTitulo?: string
  titleClassName?: string
  fonteTexto?: string
  descriptionClassName?: string
  className?: string
}

export default function InfoCard({
  titulo,
  descricao,
  href,
  cor = "bg-[#C0706B]",
  fonteTitulo = "",
  titleClassName = "",
  fonteTexto = "",
  descriptionClassName = "",
  className = "",
}: InfoCardProps) {
  return (
    <div
      className={`w-full max-w-3xl 
  px-6 py-10 
  sm:px-10 sm:py-14 
  md:px-14 md:py-20 
  lg:px-20 lg:py-28
  rounded-2xl shadow-lg
  flex flex-col items-center justify-center text-center
  ${cor} ${className}`}
    >
      <h2
        className={`mb-3 font-bold text-2xl sm:text-3xl md:text-4xl text-[#FFF5EE] ${titleClassName} ${fonteTitulo}`}
      >
        {titulo}
      </h2>

      <p
        className={`mb-6 text-base sm:text-lg md:text-xl  text-[#FFF5EE]/90 ${descriptionClassName} ${fonteTexto}`}
      >
        {descricao}
      </p>

      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-full bg-[#FFF5EE] px-5 py-2.5 text-sm sm:text-base font-medium text-foreground transition-colors hover:bg-[#FFF5EE]/90"      >
        Saiba mais
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  )
}