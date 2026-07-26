'use client'

import PageTemplate from "@/components/PageTemplate";
import { grupos } from "@/data/grupos";
import { coloresSedes } from "@/data/coloresSedes";

export default function GruposPage() {
  const reuniones = grupos.flatMap((grupo) =>
    grupo.reuniones.map((reunion) => ({
      ...reunion,
      sede: grupo.sede,
    }))
  );

  return (
    <PageTemplate
      titulo="Grupos de supernumerarias"
      
    >
      <div className="space-y-4">
        {reuniones.map((reunion, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white p-4 shadow-md"
          >
           <div className="flex items-center justify-between">
  <div className="flex items-center gap-2">
    <div
      className={`h-4 w-8 rounded-md ${
        coloresSedes[
          reunion.sede as keyof typeof coloresSedes
        ]
      }`}
    />

    <h2 className="text-xl font-bold text-slate-800">
      {reunion.dia} · {reunion.hora}
    </h2>
  </div>

  <p className="font-medium text-slate-800">
    {reunion.encargada}
  </p>
</div>

<p className="mt-2 text-slate-500">
  {reunion.sede}
</p>
          </div>
        ))}
      </div>
    </PageTemplate>
  );
}
