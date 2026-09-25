import Link from "next/link";
import PageTemplate from "@/components/PageTemplate";

export default function LecturaPage() {
  return (
    <PageTemplate
      titulo="Lectura espiritual (diario)"
      volverHref="/dashboard/oraciones"
      volverTexto="Oraciones"
    >

      <div className="rounded-2xl bg-white p-6 shadow-md">

        <p className="text-xl font-semibold text-slate-800">
          Al iniciar:
        </p>

        <p className="mt-4 text-xl leading-relaxed text-slate-700">
          ¡Ven, oh Santo Espíritu!, llena los corazones de tus fieles y
          enciende en ellos el fuego de tu amor.
        </p>

        <p className="mt-6 text-xl leading-relaxed text-slate-700">
          <span className="font-bold text-red-600">V.</span> Envía tu Espíritu
          y serán creados.
        </p>

        <p className="mt-2 text-xl leading-relaxed text-slate-700">
          <span className="font-bold text-red-600">R.</span> Y renovarás la faz
          de la tierra.
        </p>

        <p className="mt-8 text-xl font-bold text-slate-800">
          ORACIÓN
        </p>

        <p className="mt-4 text-xl leading-relaxed text-slate-700">
          Oh Dios, que habéis instruido los corazones de los fieles con la luz
          del Espíritu Santo, concedednos según el mismo Espíritu conocer las
          cosas rectas y gozar siempre de sus divinos consuelos. Por Jesucristo
          nuestro Señor.
        </p>

        <p className="mt-2 text-xl leading-relaxed text-slate-700">
          Amén.
        </p>

        <div className="my-8 border-t border-gray-200" />

        <p className="text-xl font-semibold text-slate-800">
          Al terminar:
        </p>

        <p className="mt-4 text-xl leading-relaxed text-slate-700">
          <span className="font-bold text-red-600">V.</span> Te damos gracias,
          Señor, por todos tus beneficios. Tú, que vives y reinas por los
          siglos de los siglos.
        </p>

        <p className="mt-2 text-xl leading-relaxed text-slate-700">
          <span className="font-bold text-red-600">R.</span> Amén.
        </p>

        <p className="mt-6 text-xl leading-relaxed text-slate-700">
          <span className="font-bold text-red-600">V.</span> El Señor nos dé su
          paz.
        </p>

        <p className="mt-2 text-xl leading-relaxed text-slate-700">
          <span className="font-bold text-red-600">R.</span> Y la vida eterna.
          Amén.
        </p>

      </div>

      <Link
        href="/dashboard"
        className="mt-4 inline-block rounded-xl bg-slate-700 px-6 py-3 text-white transition hover:bg-slate-800"
      >
        ← Inicio
      </Link>

    </PageTemplate>
  );
}