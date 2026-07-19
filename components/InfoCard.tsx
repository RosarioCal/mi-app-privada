import Image from 'next/image'

type Props = {
  titulo: string
  subtitulo?: string
  enlace?: string
  imagen?: string
}

export default function InfoCard({
  titulo,
  subtitulo,
  enlace,
  imagen,
}: Props) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-md">

      {imagen && (
        <Image
          src={imagen}
          alt={titulo}
          width={600}
          height={350}
          className="mb-4 h-48 w-full rounded-xl object-cover"
        />
      )}

      <h2 className="text-xl font-semibold text-gray-800">
        {titulo}
      </h2>

      {subtitulo && (
        <p className="mt-2 text-gray-600">
          📍 {subtitulo}
        </p>
      )}

      {enlace && (
        <a
          href={enlace}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-blue-600 hover:underline"
        >
          🗺 Abrir en Google Maps
        </a>
      )}

    </div>
  )
}