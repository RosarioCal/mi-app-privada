import Image from "next/image";
import PageTemplate from "@/components/PageTemplate";

export default function DirectorasPage() {
  return (
    <PageTemplate titulo="Directoras">

      <div className="rounded-2xl bg-white p-5 shadow-md">

        <Image
          src="/madrid-directoras.png"
          alt="Madrid"
          width={800}
          height={300}
          className="mb-6 w-full rounded-xl object-cover"
        />

        <h2 className="mb-6 text-2xl font-bold text-slate-800">
          Delegación de Madrid Este
        </h2>

        <div className="space-y-4 text-lg text-slate-700">

          <p>
            <strong>Directora:</strong> Bea Holgado
          </p>

          <p>
            <strong>Secretaria:</strong> Mª Eugenia Barea
          </p>

          <p>
            <strong>Vocal de san Miguel:</strong> Lourdes Ábalos
          </p>

          <p>
            <strong>Vocal de san Gabriel:</strong> Elena Gutiérrez
          </p>

          <p>
            <strong>Vocal de san Rafael:</strong> Carmen Poole
          </p>

          <p>
            <strong>Vocal de numerarias auxiliares:</strong> Mónica Monasterio
          </p>

          <p>
            <strong>Directora de agregadas:</strong> Rocío González
          </p>

          <p>
            <strong>Vocal de estudios:</strong> Teresa Bueno
          </p>

          <p>
            <strong>Procuradora:</strong> Mariuca García
          </p>

        </div>

      </div>

    </PageTemplate>
  );
}