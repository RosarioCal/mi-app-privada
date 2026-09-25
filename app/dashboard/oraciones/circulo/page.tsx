import Link from "next/link";
import PageTemplate from "@/components/PageTemplate";

export default function CirculoPage() {
  return (
    <PageTemplate
  titulo="Círculo"
  volverHref="/dashboard/oraciones"
  volverTexto="Oraciones"
>

      <div className="rounded-2xl bg-white p-6 shadow-md">

        <p className="text-xl leading-relaxed text-slate-700">
          Confíteor Deo omnipoténti, beátae Maríae semper Vírgini,
          beáto Michaéli Archángelo, beáto Ioánni Baptístae, sanctis
          Apóstolis Petro et Paulo, ómnibus Sanctis, et vobis, fratres,
          quia peccávi nimis cogitatióne, verbo et ópere: mea culpa,
          mea culpa, mea máxima culpa.
        </p>

        <p className="mt-6 text-xl leading-relaxed text-slate-700">
          Ideo precor beátam Maríam semper Vírginem, beátum Michaélem
          Archángelum, beátum Ioánnem Baptístam, sanctos Apóstolos
          Petrum et Paulum, omnes Sanctos, et vos, fratres, oráre pro
          me ad Dóminum, Deum nostrum.
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