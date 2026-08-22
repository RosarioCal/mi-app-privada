import PageTemplate from "@/components/PageTemplate";

export default function CursosPage() {
  return (
    <PageTemplate titulo="Cursos de retiro y convivencias">

      <div className="rounded-2xl bg-white p-6 shadow-md">

        <p className="text-xl leading-relaxed text-slate-700">
          Para consultar e inscribirte, pulsa el botón y accede con tu usuario y contraseña.
        </p>

        <a
          href="https://resetmadrid.org/default.aspx"
          target="_blank"
          rel="noreferrer"
          className="mt-6 block w-full rounded-xl bg-yellow-300 py-3 text-center font-medium text-slate-800 transition hover:bg-yellow-400"
        >
          Acceder a la web
        </a>

      </div>

    </PageTemplate>
  );
}