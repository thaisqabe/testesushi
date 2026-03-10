import Link from "next/link"

export function Footer() {
  return (
    <footer className=" bg-alga border-t border-border flex flex-col items-center justify-center" >
      <div className="  max-w-6xl px-6 py-10 text-primary">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-creme">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <SushiIconSmall />
              <h3 className="text-base font-bold ">Arte do Sushi</h3>
            </div>
            <p className="text-sm  leading-relaxed">
              Descubra a arte milenar da culinária japonesa e aprenda a fazer sushi autêntico em casa.
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold  mb-3">Navegação</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/" className="text-sm  hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/historia" className="text-sm  hover:text-primary transition-colors">
                  História
                </Link>
              </li>
              <li>
                <Link href="/guia-iniciantes" className="text-sm  hover:text-primary transition-colors">
                  Guia Iniciantes
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-bold  mb-3">Sobre</h3>
            <p className="text-sm  leading-relaxed">
              Compartilhamos conhecimento sobre a arte do sushi, respeitando as tradições japonesas e tornando acessível para todos que desejam aprender.
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
