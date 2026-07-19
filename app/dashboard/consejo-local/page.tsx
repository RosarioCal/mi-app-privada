import PageTemplate from '@/components/PageTemplate'
import Card from '@/components/Card'
import { consejoLocal } from '@/data/consejoLocal'

export default function ConsejoLocalPage() {
  return (
    <PageTemplate titulo="Consejo Local">

      <div className="space-y-5">

        {consejoLocal.map((persona) => (

          <Card key={persona.nombre}>

            <div className="flex items-center justify-between gap-6">

              <div>

                <h2 className="text-2xl font-semibold text-slate-800">
                  {persona.nombre}
                </h2>

                <span className="mt-4 inline-block rounded-lg bg-gray-100 px-4 py-2 text-lg font-medium text-gray-700">
                  {persona.cargo}
                </span>

              </div>

              <a
                href={`https://wa.me/${persona.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-green-600 px-8 py-4 text-lg font-medium text-white transition hover:bg-green-700"
              >
                WhatsApp
              </a>

            </div>

          </Card>

        ))}

      </div>

    </PageTemplate>
  )
}