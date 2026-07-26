'use client'

import PageTemplate from "@/components/PageTemplate";
import { grupos } from "@/data/grupos";
import { coloresSedes } from "@/data/ColoresSedes";

export default function GruposPage() {
  const reuniones = grupos.flatMap((grupo) =>
    grupo.reuniones.map((reunion) => ({
      ...reunion,
      sede: grupo.sede,
    }))
  );

  return (
    <PageTemplate
      titulo="👥 Grupos de Supernumerarias"
      subtitulo="Horarios de los grupos"
    >
      <div className="space-y-4">
        {reuniones.map((reunion, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white p-5 shadow-md"
          >
            <div className="flex items-center gap-3">
              <div
                className={`h-4 w-10 rounded-full ${
                  coloresSedes[
                    reunion.sede as keyof typeof coloresSedes
                  ]
                }`}
              />

              <h2 className="text-xl font-bold text-slate-800">
                {reunion.dia} · {reunion.hora}
              </h2>
            </div>

            <p className="mt-3 text-slate-500">
              {reunion.sede}
            </p>

            <p className="mt-4 text-slate-700">
              👤 {reunion.encargada}
            </p>
          </div>
        ))}
      </div>
    </PageTemplate>
  );
}