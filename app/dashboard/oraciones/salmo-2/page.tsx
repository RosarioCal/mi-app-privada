import Link from "next/link";
import PageTemplate from "@/components/PageTemplate";

export default function Salmo2Page() {
  return (
    <PageTemplate
      titulo="Salmo 2 (martes)"
      volverHref="/dashboard/oraciones"
      volverTexto="Oraciones"
    >

      <div className="rounded-2xl bg-white p-6 shadow-md">

        <p className="text-xl font-semibold text-slate-800">
          Antífona.
        </p>

        <p className="mt-2 text-xl leading-relaxed text-slate-700">
          Su reinado es sempiterno; y todos los reyes le servirán y le acatarán.
          (T.P. Aleluya).
        </p>

        <div className="mt-6 space-y-4 text-xl leading-relaxed text-slate-700">

          <p>1. ¿Por qué se han amotinado las naciones, y los pueblos meditaron cosas vanas?</p>

          <p>2. Se alzan los reyes de la tierra, y los príncipes se confabulan contra el Señor y contra su Ungido.</p>

          <p>3. «Rompamos, dijeron, sus ataduras, y sacudamos lejos de nosotros su yugo».</p>

          <p>4. El que habita en los cielos se reirá de ellos, se burlará de ellos el Señor.</p>

          <p>5. Entonces les hablará en su indignación, y les llenará de terror con su ira.</p>

          <p>6. «Mas yo constituí mi rey sobre Sión, mi monte santo».</p>

          <p>7. Predicaré su decreto. A mí me ha dicho el Señor: «Tú eres mi hijo; yo te he engendrado hoy.</p>

          <p>8. Pídeme, y te daré las naciones en herencia, y extenderé tus dominios hasta los confines de la tierra.</p>

          <p>9. Los regirás con vara de hierro, y como a vaso de alfarero los romperás».</p>

          <p>10. Ahora, pues, ¡oh reyes!, entendedlo bien: dejaos instruir, los que juzgáis la tierra.</p>

          <p>11. Servid al Señor con temor, y ensalzadle con temblor santo.</p>

          <p>12. Abrazad la buena doctrina, no sea que al fin se enoje, y perezcáis fuera del camino, cuando, dentro de poco, se inflame su ira. Bienaventurados serán los que hayan puesto en él su confianza.</p>

          <p>13. Gloria al Padre y al Hijo y al Espíritu Santo.</p>

          <p>14. Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.</p>

        </div>

        <p className="mt-8 text-xl font-semibold text-slate-800">
          Antífona.
        </p>

        <p className="mt-2 text-xl leading-relaxed text-slate-700">
          Su reinado es sempiterno; y todos los reyes le servirán y le acatarán.
          (T.P. Aleluya).
        </p>

        <p className="mt-6 text-xl leading-relaxed text-slate-700">
          <span className="font-bold text-red-600">N.</span> Señor, escucha mi oración.
        </p>

        <p className="mt-2 text-xl leading-relaxed text-slate-700">
          <span className="font-bold text-red-600">R/.</span> Y llegue a ti mi clamor.
        </p>

        <p className="mt-8 text-xl font-semibold text-slate-800">
          Los sacerdotes añaden:
        </p>

        <p className="mt-4 text-xl leading-relaxed text-slate-700">
          <span className="font-bold text-red-600">V.</span> El Señor esté con vosotros.
        </p>

        <p className="mt-2 text-xl leading-relaxed text-slate-700">
          <span className="font-bold text-red-600">R.</span> Y con tu espíritu
        </p>

        <p className="mt-8 text-xl font-bold text-slate-800">
          ORACIÓN
        </p>

        <p className="mt-4 text-xl leading-relaxed text-slate-700">
          Omnipotente y sempiterno Dios, que en tu amado Hijo, Rey universal,
          quisiste instaurarlo todo: concédenos propicio que todos los pueblos,
          disgregados por la herida del pecado, se sometan a su suavísimo imperio:
          que vive y reina contigo en la unidad del Espíritu Santo y es Dios,
          por los siglos de los siglos.
        </p>

        <p className="mt-2 text-xl leading-relaxed text-slate-700">
          <span className="font-bold text-red-600">R.</span> Amén.
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