import Link from "next/link"

export function Footer() {
  return (
    <footer  className=" bg-red border-t border-border" >
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div style={{ color: "#1D2D26" }} className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <SushiIconSmall />
              <h3 className="text-base font-bold text-foreground">Arte do Sushi</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Descubra a arte milenar da culinaria japonesa e aprenda a fazer sushi autentico em casa.
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold text-foreground mb-3">Navegacao</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/historia" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Historia
                </Link>
              </li>
              <li>
                <Link href="/guia-iniciantes" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Guia Iniciantes
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-bold text-foreground mb-3">Sobre</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Compartilhamos conhecimento sobre a arte do sushi, respeitando as tradicoes japonesas e tornando acessivel para todos que desejam aprender.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SushiIconSmall() {
  return (
    <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#E8734A" opacity="0.15" />
      <ellipse cx="16" cy="18" rx="10" ry="6" fill="#E8734A" opacity="0.3" />
      <ellipse cx="16" cy="16" rx="8" ry="5" fill="#F5A67B" />
      <ellipse cx="16" cy="15" rx="6" ry="3.5" fill="#E8734A" />
      <ellipse cx="16" cy="14.5" rx="4" ry="2" fill="#F5C6A0" />
    </svg>
  )
}
