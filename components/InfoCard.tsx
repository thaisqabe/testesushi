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
      className={`w-full max-w-md rounded-2xl p-8 text-center shadow-lg ${cor} ${className}`}
    >
      <h2
        className={`mb-3 font-bold text-[#FFF5EE] ${titleClassName} ${fonteTitulo}`}
      >
        {titulo}
      </h2>

      <p
        className={`mb-6 text-[#FFF5EE]/90 ${descriptionClassName} ${fonteTexto}`}
      >
        {descricao}
      </p>

      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-full bg-[#FFF5EE] px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-[#FFF5EE]/90"
      >
        Saiba mais
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  )
}