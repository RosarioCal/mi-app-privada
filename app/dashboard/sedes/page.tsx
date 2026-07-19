import Image from 'next/image'
import PageTemplate from '@/components/PageTemplate'
import Card from '@/components/Card'
import { sedes } from '@/data/sedes'

export default function SedesPage() {
  return (
    <PageTemplate titulo="Sedes">

      <div className="space-y-6">

        {sedes.map((sede) => (

          <Card key={sede.nombre}>

            <Image
              src={sede.imagen}
              alt={sede.nombre}
              width={600}
              height={350}
              className="mb-5 h-52 w-full rounded-xl object-cover"
            />

            <h2 className="text-2xl font-semibold text-gray-800">
              {sede.nombre}
            </h2>

            <p className="mt-1 text-gray-500 font-medium">
              {sede.ciudad}
            </p>

            <p className="mt-3 text-gray-700">
              📍 {sede.direccion}
            </p>

            <a
              href={sede.maps}
              target="_blank"
              rel="noreferrer"
              className="mt-6 block w-full rounded-xl bg-slate-700 py-3 text-center text-white transition hover:bg-slate-800"
            >
              📍 Ubicación
            </a>

          </Card>

        ))}

      </div>

    </PageTemplate>
  )
}