'use client'
import { grupos } from "@/data/grupos";

export default function GruposPage() {
  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="mb-8 text-center text-3xl font-bold text-blue-900">
        👥 Grupos de Supernumerarias
      </h1>

      {grupos.map((grupo) => (
        <div
          key={grupo.sede}
          className="mb-8 rounded-2xl bg-white p-6 shadow-md"
        >
          <h2 className="mb-5 text-2xl font-bold text-blue-700">
            📍 {grupo.sede}
          </h2>

          <div className="space-y-4">
            {grupo.reuniones.map((reunion, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 p-4"
              >
                <div className="grid gap-2 md:grid-cols-3">
                  <div>
                    <p className="text-sm text-gray-500">Día</p>
                    <p className="font-semibold">{reunion.dia}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Hora</p>
                    <p className="font-semibold">{reunion.hora}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Encargada</p>
                    <p className="font-semibold">{reunion.encargada}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}