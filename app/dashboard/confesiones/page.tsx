"use client"
import { useState } from "react"
import { Info } from "lucide-react"

import PageTemplate from '@/components/PageTemplate'
import Card from '@/components/Card'
import { confesiones } from '@/data/confesiones'

export default function ConfesionesPage() {
  const [abierto, setAbierto] = useState<string | null>(null)    
  return (
    <PageTemplate titulo="Confesiones">

      <div className="space-y-5">

        {confesiones.map((dia) => (

          <Card key={dia.dia}>

            <span className="inline-block rounded-lg bg-gray-100 px-4 py-2 text-lg font-semibold text-gray-700">
              {dia.dia}
            </span>

            <div className="mt-5 space-y-5">
{dia.horarios.map((horario, index) => {

  const clave = `${dia.dia}-${index}`

  return (

  <div
    key={index}
    className={index > 0 ? "border-t border-gray-100 pt-4" : ""}
  >

    <div className="flex items-center justify-between">

  <p className="text-lg font-medium text-slate-800">
    {horario.hora}
  </p>

  <button
    onClick={() =>
      setAbierto(abierto === clave ? null : clave)
    }
    className="text-slate-400 hover:text-slate-700"
    aria-label="Mostrar sacerdote"
  >
    <Info size={18} />
  </button>

</div>

    <p className="text-base font-medium text-slate-700">
      {horario.lugar}
    </p>
{abierto === clave && (

  <div className="mt-3 rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-2">
  <p className="text-sm font-medium text-emerald-800">
    Sacerdote: {horario.sacerdote}
  </p>
</div>

)}
  </div>

  )

})}
              
            </div>

          </Card>

        ))}

      </div>

    </PageTemplate>
  )
}