import PageTemplate from "@/components/PageTemplate"
import Card from "@/components/Card"

import { retiros } from "@/data/retiros"
import { coloresSedes } from "@/data/coloresSedes"

export default function RetirosPage() {
  return (
    <PageTemplate
      titulo="Retiros mensuales"
      subtitulo="Agosto 2026"
    >
      {retiros.map((retiro, index) => (
        <Card key={index}>

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">

              <div
                className={`${coloresSedes[retiro.sede]} w-6 h-4 rounded-md`}
              />

              <p className="font-semibold">
                {retiro.fecha}
              </p>

            </div>

            <p className="text-slate-500">
              {retiro.horario}
            </p>

          </div>

          <p className="mt-4 font-medium text-slate-700">
            {retiro.sede}
          </p>

        </Card>
      ))}

    </PageTemplate>
  )
}