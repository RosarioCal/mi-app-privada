import Image from 'next/image'
import PageTemplate from '@/components/PageTemplate'
import Card from '@/components/Card'
import { avisos } from '@/data/avisos'

export default function AvisosPage() {
  return (
    <PageTemplate titulo="Avisos">

      <div className="space-y-6">

        {avisos.map((aviso) => (

          <Card key={aviso.titulo}>

  <h2 className="mb-4 text-xl font-semibold text-slate-800">
    {aviso.titulo}
  </h2>

  <a
    href={aviso.enlace}
    target="_blank"
    rel="noreferrer"
  >
    <Image
      src={aviso.imagen}
      alt={aviso.titulo}
      width={600}
      height={800}
      className="w-full rounded-xl object-cover transition hover:scale-[1.02]"
    />
  </a>

</Card>

        ))}

      </div>

    </PageTemplate>
  )
}