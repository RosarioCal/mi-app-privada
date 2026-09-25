import Link from "next/link";
import PageTemplate from "@/components/PageTemplate";

export default function OracionesPage() {
  const oraciones = [
    "Círculo",
    "Preces (diario)",
    "Lectura espiritual (diario)",
    "Salmo 2 (martes)",
    "Adorote devote (jueves)",
    "Símbolo Atanasiano (3º domingo)",
  ];

  return (
    <PageTemplate titulo="Oraciones">

      <div className="space-y-4">

  {oraciones.map((oracion) => {
  if (oracion === "Círculo") {
    return (
      <Link
        key={oracion}
        href="/dashboard/oraciones/circulo"
        className="mx-auto block w-[90%] max-w-sm rounded-xl bg-yellow-100 px-5 py-4 text-left text-lg font-semibold text-slate-800 shadow-md transition hover:bg-yellow-200"
      >
        {oracion}
      </Link>
    );
  }
if (oracion === "Preces (diario)") {
  return (
    <Link
      key={oracion}
      href="/dashboard/oraciones/preces"
      className="mx-auto block w-[90%] max-w-sm rounded-xl bg-yellow-100 px-5 py-4 text-left text-lg font-semibold text-slate-800 shadow-md transition hover:bg-yellow-200"
    >
      {oracion}
    </Link>
  );
}
if (oracion === "Lectura espiritual (diario)") {
  return (
    <Link
      key={oracion}
      href="/dashboard/oraciones/lectura"
      className="mx-auto block w-[90%] max-w-sm rounded-xl bg-yellow-100 px-5 py-4 text-left text-lg font-semibold text-slate-800 shadow-md transition hover:bg-yellow-200"
    >
      {oracion}
    </Link>
  );
}
if (oracion === "Salmo 2 (martes)") {
  return (
    <Link
      key={oracion}
      href="/dashboard/oraciones/salmo-2"
      className="mx-auto block w-[90%] max-w-sm rounded-xl bg-yellow-100 px-5 py-4 text-left text-lg font-semibold text-slate-800 shadow-md transition hover:bg-yellow-200"
    >
      {oracion}
    </Link>
  );
}
if (oracion === "Adorote devote (jueves)") {
  return (
    <Link
      key={oracion}
      href="/dashboard/oraciones/adorote-devote"
      className="mx-auto block w-[90%] max-w-sm rounded-xl bg-yellow-100 px-5 py-4 text-left text-lg font-semibold text-slate-800 shadow-md transition hover:bg-yellow-200"
    >
      {oracion}
    </Link>
  );
}
if (oracion === "Símbolo Atanasiano (3º domingo)") {
  return (
    <Link
      key={oracion}
      href="/dashboard/oraciones/simbolo-atanasiano"
      className="mx-auto block w-[90%] max-w-sm rounded-xl bg-yellow-100 px-5 py-4 text-left text-lg font-semibold text-slate-800 shadow-md transition hover:bg-yellow-200"
    >
      {oracion}
    </Link>
  );
}
  return (
    <button
      key={oracion}
      className="mx-auto block w-[90%] max-w-sm rounded-xl bg-yellow-100 px-5 py-4 text-left text-lg font-semibold text-slate-800 shadow-md transition hover:bg-yellow-200"
    >
      {oracion}
    </button>
  );
})}

</div>

    </PageTemplate>
  );
}