import { Laptop } from "lucide-react"
import PageTemplate from "@/components/PageTemplate"
import Card from "@/components/Card"
import Button from "@/components/Button"

import { retiroVirtual } from "@/data/retiroVirtual"

export default function RetiroVirtualPage() {
  return (
    <PageTemplate
      titulo="Retiro virtual"
      subtitulo="Un momento de oración donde estés"
    >
      <Card>

        <div className="flex flex-col items-center">

          <Laptop className="w-10 h-10 text-slate-500 mb-5" />

          <p className="text-center text-slate-700">
            Para hacer el retiro virtual, pulsa el botón.
          </p>

          <div className="mt-8 w-full">
            <a
                href={retiroVirtual.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
            <Button
                className="
                w-full
                bg-amber-100
                hover:bg-amber-200
                text-slate-900
                font-semibold-text-lg
                py-3
                "
            >
                Comenzar el retiro
            </Button>
                </a>
            </div>

        </div>

      </Card>
    </PageTemplate>
  )
}